toDoList.controller('ToDoListController', [function() {

  var self = this;

  self.allTasks = []

  self.addNewTask = function() {
      var task = {"name": self.newTask,
                  "done": false}
      self.allTasks.push(task);
      self.newTask = '';
    }

  self.displayTasks = function() {
    for (i = 0; i<self.allTasks.length; i++) {
      console.log(self.allTasks[i].name)
    };
  };

  self.clearCompletedTasks = function() {
    array = self.allTasks
    self.allTasks = []
    array.forEach(function(task) {
      if(task.done === false) {
        self.allTasks.push(task);
      }
    });
  };

  self.clearAllTasks = function(){
    self.allTasks = []
  };
}]);
