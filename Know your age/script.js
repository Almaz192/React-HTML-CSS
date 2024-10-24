const btn = document.getElementById("btn");
const input = document.getElementById("input");
let age = ""; 

input.addEventListener("input", (e) => {
    age = e.target.value;
});

btn.addEventListener("click", () => {
    alert(`You were born in ${2024 - age} year`);
});
