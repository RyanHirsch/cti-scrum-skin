var ScrumBoard = {};
ScrumBoard.title = $('.initTitle').text();
ScrumBoard.currentSprint = $('#sprintNumSpan').text().substring(8);
ScrumBoard.columns = [];

$('.storyColumns').each(function(idx, column) {
  var columnObj = {
    tasks: []
  };

  columnObj.title = $('.pageAndColumnTitles', column).text();
  var $tasks = $('.task.text', column);

  $tasks.each(function(idx, itm) {
    var titleParse = $('.title>a', itm).text().match(/^#(\d+) (.*) \((\w+)\)$/);
    var assignedParse = $('.assignedInfo', itm).text().match(/^Assigned: (.*) - (.*)$/);
    var story = $('.taskParents a', itm).text();
    var capability = $('.capabilityInNote a', itm).text();
    var description = $('.notes', itm).text().substring(13);

    columnObj.tasks.push({
      id: titleParse[1],
      title: titleParse[2],
      priority: titleParse[3],
      description: description,
      story: story,
      capability: capability,
      assignedTo: assignedParse[1],
      assignedDate: new Date(assignedParse[2])
    });
  });
  ScrumBoard.columns.push(columnObj);
});