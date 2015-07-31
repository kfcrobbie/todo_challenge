describe('ToDoListController', function() {
  beforeEach(module('ToDoListApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty new task field and list of tasks', function () {
    expect(ctrl.addNewTask).toBeUndefined();
    expect(ctrl.showTaskList).toBeUndefined();
  });

});
