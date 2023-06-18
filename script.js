const form = document.querySelector("form");

const pwd = document.getElementById("pwd");
const errorPwd = document.getElementById("error-pwd")

form.addEventListener("submit", (e) => {
    if (pwd.value !== errorPwd.value) {
        e.preventDefault();
    }
})

pwd.addEventListener("input",pwdError)
errorPwd.addEventListener("input",pwdError)

function pwdError () {
    if (pwd.validity.valid) {
        pwd.className = "valid";
    }

    if (pwd.value !== errorPwd.value) {
        // pwd.className = "invalid";
        errorPwd.className = "invalid";
        console.log("pwd mismatch")
    } else {
        // pwd.className = "valid";
        errorPwd.className = "valid";

    }
}
