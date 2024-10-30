const list = document.querySelector("ul");
const input = document.getElementById("input");
const newElement = document.getElementById("newEl");
let Todo = "";
let local;
function toLocal() {
    local = list.innerHTML;
    localStorage.setItem("local", local);
}

// Update Todo variable with input value
input.addEventListener("input", (e) => {
    Todo = e.target.value;
});

// Add new <li> element when "Add" button is clicked
newElement.addEventListener("click", () => {
    if (Todo.trim() !== "") {
        // Check if the input is not empty
        const li = document.createElement("li"); // Create a new <li> element
        li.textContent = Todo; // Set the text of <li> to the input value
        list.appendChild(li); // Append the new <li> to the <ul> list
        input.value = ""; // Clear the input field
        Todo = ""; // Reset the Todo variable
        toLocal();
    }
});
if (localStorage.getItem("local")) {
    list.innerHTML = localStorage.getItem("local");
}
