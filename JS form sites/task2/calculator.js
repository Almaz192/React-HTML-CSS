const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const res = document.getElementById("result");
const Btn = document.getElementById("Btn");

let second = "";
let first = "";

num1.addEventListener("input", (e) => {
    first = e.target.value;
});
num2.addEventListener("input", (e) => {
    second = e.target.value;
});

Btn.addEventListener("click", () => {
    const operation = operationSelect.value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Пожалуйста, введите корректные числа.";
        return;
    }

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
                resultDisplay.textContent = "Деление на ноль невозможно.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultDisplay.textContent = "Пожалуйста, выберите операцию.";
            return;
    }

    alert(result);
});
