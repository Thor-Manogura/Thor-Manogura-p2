//Array to hold task
var tasks = [];

//task status 'enum'
var taskStatus = {
    active: "active",
    completed: "completed"
};

//task construction function
function Task(id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}

//click handles to add a new task
function addTask(even) {
    var inputEl = document.getElementById('input-task');
    if (inputEl.value !== '') {
        //create a unique id
        var id = 'item' + tasks.length;

        //create a new task
        var task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task);

        //add this task to the dom
        addTaskElement(task);

        //reset input
        inputEl.value = "";
    }
}

//creates new task element and adds it to the DOM
function addTaskElement(task) {
    //create elements

    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    //set to attribute
    taskEl.setAttribute('id', task.id);

    // add text to task element
    taskEl.appendChild(textEl);

    //add tasks element to list
    listEl.appendChild(taskEl);
}


// click handler to complete a task
function completeTask(event) {
    //get task element
    var taskEl = event.target;
    var id = taskEl.id;


    //find corresponding task in tasks array and update status
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks[i].status = taskStatus.completed;
            break
        }
    }

    taskEl.remove();
    document.getElementById("completed-list").appendChild(taskEl);
}

//keypress handler to automatically click the add task button * this is 
// to add words when you hit enter
function clickButton(event) {
    //check if enter button was click
    if (event.keyCode === 13) {
        document.getElementById('add-task').click()
    }


}

//initiaizes the app
function init() {
    //wire  up the add task button click handler
    document.getElementById('add-task').onclick = addTask;

    //wire up the task completed list item click handler
    document.getElementById('active-list').onclick = completeTask;

    //wire up the task input keypress handler or enterkey
    document.getElementById('input-task').onkeypress = clickButton;

}

init(); 