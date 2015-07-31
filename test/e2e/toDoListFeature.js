describe('To Do List', function() {

  var tasks = element.all(by.repeater('task in toDoCtrl.allTasks'));
  var newEntryField = element(by.model('toDoCtrl.newTask'));
  var createTaskButton = element(by.id('createTaskButton'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('can add a new task and display it on the page', function() {
    newEntryField.sendKeys('Buy lottery ticket');
    createTaskButton.click();
    expect(tasks(.first()).getText()).toContain('Buy lottery ticket');
  });
})
