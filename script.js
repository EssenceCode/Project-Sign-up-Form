const form = document.querySelector("form");
const firstPwd = document.getElementById("pwd");
const secondPwd = document.getElementById("error-pwd");
const errorPwd = document.querySelector(".pwd-symbol");


form.addEventListener("submit", (e) => {
    if (firstPwd.value !== secondPwd.value) {
        e.preventDefault();
    }
})

firstPwd.addEventListener("input", (e) => {
    if (firstPwd.validity.valid) {
        firstPwd.className = "valid";
    }
});
secondPwd.addEventListener("input",showError);

function showError() {
    if (firstPwd.value !== secondPwd.value) {
        secondPwd.className = "invalid";
        errorPwd.textContent = "Password mismatch."
    } else {
        secondPwd.className = "valid";
        errorPwd.textContent = "";
    }
}