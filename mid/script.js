const list = document.querySelector("ul");
const input = document.getElementById("input");
const newElement = document.getElementById("newEl");
let todos = [];

function loadTodos() {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
        todos.forEach(todo => {
            createTodoElement(todo.text, todo.completed);
        });
    }
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodoElement(text, completed = false) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;

    checkbox.addEventListener("change", () => {
        const index = todos.findIndex(todo => todo.text === text);
        todos[index].completed = checkbox.checked;
        

        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
        }
        saveTodos();
    });

    const deleter = document.createElement("span");
    deleter.textContent = " x ";
    deleter.style.color = "red";
    deleter.style.cursor = "pointer";
    deleter.style.marginLeft = "10px";
    deleter.style.backgroundColor="transparent";
    deleter.style.width="40px"

    deleter.addEventListener("click", () => {
        todos = todos.filter(todo => todo.text !== text);
        saveTodos();
        list.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(text));
    li.appendChild(deleter);
    list.appendChild(li);
}

newElement.addEventListener("click", () => {
    const Todo = input.value.trim();
    if (Todo !== "") {
        todos.push({ text: Todo, completed: false });
        createTodoElement(Todo);
        input.value = "";
        saveTodos();
    }
});

loadTodos();
