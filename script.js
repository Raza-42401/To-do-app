document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('clearAllButton').addEventListener('click', clearAllTasks);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    
    const li = document.createElement('li');
    li.textContent = taskText;
    
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function() {
        li.remove();
    };
    
    li.appendChild(removeBtn);
    document.getElementById('taskList').appendChild(li);
    
    taskInput.value = "";
}

function clearAllTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";
}
