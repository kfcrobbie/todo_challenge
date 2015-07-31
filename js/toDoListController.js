toDoList.controller('ToDoListController', [function() {

  var self = this;

  self.allTasks = []

  self.addNewTask = function() {
    self.allTasks.push(self.newTask);
      }

  self.displayTasks = function() {
    for (i = 0; i<self.allTasks.length; i++) {
      console.log(self.allTasks[i])
    }
  }
}]);
