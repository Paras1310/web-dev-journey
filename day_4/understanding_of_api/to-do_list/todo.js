const todoInput = document.getElementById("task");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const clearBtn = document.getElementById("clear-btn");

const saved = localStorage.getItem("todos");
const todos = saved ? JSON.parse(saved) : [];

renderTodos();

function addTodo() {
    const task = todoInput.value.trim();
    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    todos.push({ text: task, done: false });

    saveTodos();
    todoInput.value = "";
    renderTodos();
    
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function toggleDone(index) {
    todos[index].done = !todos[index].done;
    saveTodos();
    renderTodos();
}

function renderTodos() {
    todoList.innerHTML = todos.map((todo, index) => `
        <div>
            <span>${todo.text}</span>
            <button data-index="${index}">Delete</button>
            <input type="checkbox" data-index="${index}" ${todo.done ? "checked" : ""}>
            <span style="${todo.done ? 'text-decoration: line-through' : ''}">${todo.text}</span>
        </div>
    `).join("");
}

function deleteTodo(index) {
    todos.splice(index, 1);

    saveTodos();
    renderTodos();
}

todoList.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        const index = e.target.dataset.index;
        deleteTodo(index);
    }
    if (e.target.type === "checkbox") {
        const index = e.target.dataset.index;
        toggleDone(index);
    }
});



clearBtn.addEventListener("click", () => {
    todos.length = 0;
    saveTodos();
    renderTodos();
});

addBtn.addEventListener("click", addTodo);