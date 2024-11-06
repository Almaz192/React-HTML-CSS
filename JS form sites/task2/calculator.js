const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const res = document.getElementById("result");
const Btn = document.getElementById("Btn");
const operationSelect = document.getElementById("operation");

let first = "";
let second = "";

num1.addEventListener("input", (e) => {
    first = e.target.value;
});
num2.addEventListener("input", (e) => {
    second = e.target.value;
});

Btn.addEventListener("click", () => {
    const operation = operationSelect.value;
    let result;

    if (isNaN(first) || isNaN(second) || first === "" || second === "") {
        res.textContent = "Пожалуйста, введите корректные числа.";
        return;
    }

    const num1 = parseFloat(first);
    const num2 = parseFloat(second);

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                res.textContent = "Деление на ноль невозможно.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            res.textContent = "Пожалуйста, выберите операцию.";
            return;
    }

    res.textContent = result;
});
