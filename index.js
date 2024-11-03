const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".toDo-button");
const todoList = document.querySelector(".todo-list");
const completedButton = document.querySelector(".completed-btn");
const filterOption = document.getElementById("select");

// Add task on button click
todoButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    addTask();
});

function addTask() {
    if (todoInput.value === '') {
        alert("You must write something");
    } else {
        // Create the list item 
        let li = document.createElement("li");

        // Complete icon
        const completedIcon = document.createElement("span");
        completedIcon.classList.add("completed-icon");
        li.appendChild(completedIcon);

        // Task text
        const taskText = document.createElement("span");
        taskText.classList.add("text");
        taskText.textContent = todoInput.value;
        li.appendChild(taskText);

        // trash icon
        const trashIcon = document.createElement("span");
        trashIcon.classList.add("trash-icon");
        li.appendChild(trashIcon);

        // Append the complete list item to the todo list
        todoList.appendChild(li);

        // Clear the input field
        todoInput.value = '';
    }
}

// complete and trash functionality
document.addEventListener("DOMContentLoaded", () => {
    todoList.addEventListener("click", (event) => {
        if (event.target.classList.contains("completed-icon")) {
            const listItem = event.target.closest("li");
            listItem.classList.toggle("completed");
        }

        if (event.target.classList.contains("trash-icon")) {
            const listItem = event.target.closest("li");
            listItem.remove();
        }
    });
});


// Filter functionality
filterOption.addEventListener("change", filterTodo);
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "checked":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "incompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}
