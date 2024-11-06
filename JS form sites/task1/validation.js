const btn = document.getElementById("btn");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPsw = document.getElementById("password");
const warnings = document.getElementsByTagName("p");
let Name = "";
let Email = "";
let Psw = "";

inputName.addEventListener("input", (e) => {
    Name = e.target.value.trim();
});
inputEmail.addEventListener("input", (e) => {
    Email = e.target.value.trim();
});
inputPsw.addEventListener("input", (e) => {
    Psw = e.target.value.trim();
});

btn.addEventListener("click", () => {
    if (Name === "") {
        warnings[0].style.display = "block";
        inputName.style.borderBlockColor = "red";
    } else {
        warnings[0].style.display = "none";
        inputName.style.borderBlockColor = "green";
    }

    const emailPattern =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    if (!emailPattern.test(Email)) {
        warnings[1].style.display = "block";
        inputEmail.style.borderBlockColor = "red";
    } else {
        warnings[1].style.display = "none";
        inputEmail.style.borderBlockColor = "green";
    }

    if (8 >= Psw.length) {
        warnings[2].style.display = "block";
        inputPsw.style.borderBlockColor = "red";
    } else {
        warnings[2].style.display = "none";
        inputPsw.style.borderBlockColor = "green";
    }
});
