const list = document.querySelector("ul");
const input = document.getElementById("input");
const newElement = document.getElementById("newEl");
const clearButton = document.getElementById("btn");
let todos = [];

function loadTodos() {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
        todos.forEach((todo, index) => {
            createTodoElement(todo.text, todo.completed, index);
        });
    }
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodoElement(text, completed = false, index) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.addEventListener("change", () => {
        todos[index].completed = checkbox.checked;

        li.style.textDecoration = checkbox.checked ? "line-through" : "none";
        saveTodos();
    });
    const deleter = document.createElement("span");
    deleter.textContent = " x ";
    deleter.style.color = "red";
    deleter.style.cursor = "pointer";
    deleter.style.marginLeft = "10px";
    deleter.style.backgroundColor = "transparent";
    deleter.style.width = "40px";

    deleter.addEventListener("click", () => {
        todos.splice(index, 1);
        saveTodos();
        list.removeChild(li);
        updateTodosUI();
    });
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(text));
    li.appendChild(deleter);
    li.style.textDecoration = completed ? "line-through" : "none";
    list.appendChild(li);
}
function updateTodosUI() {
    list.innerHTML = "";
    todos.forEach((todo, index) =>
        createTodoElement(todo.text, todo.completed, index)
    );
}
newElement.addEventListener("click", () => {
    const todoText = input.value.trim();
    if (todoText !== "") {
        todos.push({ text: todoText, completed: false });
        createTodoElement(todoText, false, todos.length - 1);
        input.value = "";
        saveTodos();
    }
});
clearButton.addEventListener("click", () => {
    todos = [];
    list.innerHTML = "";
    saveTodos();
});

loadTodos();
