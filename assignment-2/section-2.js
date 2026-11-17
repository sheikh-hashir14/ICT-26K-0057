let tasks = [];

const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUser() {
  r1.question('Enter command \n1. Add Task\n2. Remove Task\n3. View Tasks\n4. Clear Tasks\n5. Exit\n', (answer) => {
    const command = answer;

    switch (command) {
      case '1':
        r1.question('Enter task: ', (taskText) => {
          addTask(taskText);
          promptUser();
        });
        break;

      case '2':
        displayTasks();
        r1.question('Enter Task Number: ', (task_no) => {
            removeTask(Number(task_no)-1);
            promptUser();
        });
        break;

      case '3':
        displayTasks();
        promptUser();
        break;

      case '4':
        clearTasks();
        promptUser();
        break;

      case '5':
        r1.close();
        break;

      default:
        console.log("Invalid Command Selected. Try Again");
        promptUser();
    }
  });
}

function addTask(task){
    tasks.push(task);
}

function removeTask(task_no){
    if(task_no >= 0 && task_no < tasks.length){
        tasks.splice(task_no, 1);
    }
}

function displayTasks(){
    if (tasks.length === 0) {
        console.log("No tasks yet.");
        return;
    }

    console.log("To-Do List:");
    for (let i = 0; i < tasks.length; i++) {
      console.log((i + 1) + ": " + tasks[i]);
    }
}

function clearTasks(){
    tasks = [];
    console.log("All Tasks Cleared");
}

promptUser();