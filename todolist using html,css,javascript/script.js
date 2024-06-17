document.querySelector('#push').onclick = function() {
    if(document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task");
    } else {
        addTask(document.querySelector('#newtask input').value);
        document.querySelector('#newtask input').value = "";
    }
};

function addTask(taskText) {
    let tasksContainer = document.querySelector('#tasks');
    let taskElement = document.createElement('div');
    taskElement.classList.add('task');
    
    taskElement.innerHTML = `
        <span id="taskname">${taskText}</span>
        <div class="actions">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="far fa-trash-alt"></i></button>
            <button class="done"><i class="fas fa-check"></i></button>
        </div>
    `;

    tasksContainer.appendChild(taskElement);

    taskElement.querySelector('.delete').onclick = function() {
        this.parentNode.parentNode.remove();
    };

    taskElement.querySelector('.edit').onclick = function() {
        let taskText = this.parentNode.parentNode.querySelector('#taskname').textContent;
        let newTaskText = prompt("Update Task", taskText);
        if (newTaskText) {
            this.parentNode.parentNode.querySelector('#taskname').textContent = newTaskText;
        }
    };

    taskElement.querySelector('.done').onclick = function() {
        this.parentNode.parentNode.classList.toggle('completed');
        if (this.parentNode.parentNode.classList.contains('completed')) {
            // Move completed task to the end of the list
            tasksContainer.appendChild(this.parentNode.parentNode);
        }
    };

    taskElement.onclick = function(event) {
        if (event.target.classList.contains('edit') || event.target.parentNode.classList.contains('edit') || event.target.classList.contains('delete') || event.target.parentNode.classList.contains('delete') || event.target.classList.contains('done') || event.target.parentNode.classList.contains('done')) {
            return;
        }
        this.classList.toggle('completed');
        if (this.classList.contains('completed')) {
            // Move completed task to the end of the list
            tasksContainer.appendChild(this);
        }
    };
}

document.querySelectorAll('.task').forEach(task => {
    task.onclick = function(event) {
        if (event.target.classList.contains('edit') || event.target.parentNode.classList.contains('edit') || event.target.classList.contains('delete') || event.target.parentNode.classList.contains('delete') || event.target.classList.contains('done') || event.target.parentNode.classList.contains('done')) {
            return;
        }
        this.classList.toggle('completed');
        if (this.classList.contains('completed')) {
            // Move completed task to the end of the list
            tasksContainer.appendChild(this);
        }
    };
    task.querySelector('.delete').onclick = function() {
        this.parentNode.parentNode.remove();
    };
    task.querySelector('.edit').onclick = function() {
        let taskText = this.parentNode.parentNode.querySelector('#taskname').textContent;
        let newTaskText = prompt("Update Task", taskText);
        if (newTaskText) {
            this.parentNode.parentNode.querySelector('#taskname').textContent = newTaskText;
        }
    };
    task.querySelector('.done').onclick = function() {
        this.parentNode.parentNode.classList.toggle('completed');
        if (this.parentNode.parentNode.classList.contains('completed')) {
            // Move completed task to the end of the list
            tasksContainer.appendChild(this.parentNode.parentNode);
        }
    };
});
