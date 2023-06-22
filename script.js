const form = document.querySelector("form");
const firstPwd = document.getElementById("pwd");
const secondPwd = document.getElementById("error-pwd");
const errorPwd = document.querySelector(".error");


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
    if (firstPwd.value !== secondPwd.value && secondPwd.value.length >= 8) {
        secondPwd.className = "invalid";
        errorPwd.textContent = "Password mismatch."
    } else {
        secondPwd.className = "valid";
        errorPwd.textContent = "";
    }
}