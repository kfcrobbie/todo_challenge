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
    newEntryField.sendKeys('Acquire new monkey');
    createTaskButton.click();
    expect(tasks.first().getText()).toContain('Acquire new monkey');
  });

  it('can add a second new task and display both on the page', function() {
    newEntryField.sendKeys('Acquire new monkey');
    createTaskButton.click();
    newEntryField.sendKeys('Teach monkey to perform');
    createTaskButton.click();
    expect(tasks.first().getText()).toContain('Acquire new monkey');
    expect(tasks.last().getText()).toContain('Teach monkey to perform');
  });

  it('can display a completed task', function() {
    var checkbox = element(by.id('markDone'));
    newEntryField.sendKeys('Acquire new monkey');
    createTaskButton.click();
    checkbox.click();
    newEntryField.sendKeys('Sell stupid monkey');
    createTaskButton.click();
    expect(element.all(by.repeater('task in toDoCtrl.allTasks')).count()).toEqual(2);
    element(by.id('showCompletedTasksButton')).click();
    expect(element.all(by.repeater('task in toDoCtrl.allTasks')).count()).toEqual(1);
  });

  it('correctly displays active tasks', function() {
    var checkbox = element(by.id('markDone'));
    newEntryField.sendKeys('Acquire new monkey');
    createTaskButton.click();
    checkbox.click();
    newEntryField.sendKeys('Sell stupid monkey');
    createTaskButton.click();
    element(by.id('showActiveTasksButton')).click();
    expect(element.all(by.repeater('task in toDoCtrl.allTasks')).count()).toEqual(1);
  });

  it('can clear all tasks', function(){
    newEntryField.sendKeys('Acquire new monkey');
    createTaskButton.click();
    element(by.id('clearAllTasksButton')).click();
    expect(element.all(by.repeater('task in toDoCtrl.allTasks')).count()).toEqual(0);
  });
})
