// write a function to validate the login form in real time use the input event 

function validateForm() {
    const email = document.getElementById("username");
    const password = document.getElementById("password");
    // first check if email is empty
    if (email.value.trim() === "") {
        email.setCustomValidity("Email is required");
    }

    // if email is not empty then check for valid email id
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        email.setCustomValidity("Invalid email format");
    } else {
        email.setCustomValidity("");
    }

    if (email.value.trim() === "") {
        email.setCustomValidity("Email is required");
    } else {
        email.setCustomValidity("");
    }

    if (password.value.trim() === "") {
        password.setCustomValidity("Password is required");
    } else {
        password.setCustomValidity("");
    }
}



document.querySelector('form').addEventListener('submit', function(e) {
    const loginBtn = this.querySelector('button[type="submit"]');
    loginBtn.disabled = true;
});

document.getElementById("username").addEventListener("input", validateForm);
document.getElementById("password").addEventListener("input", validateForm);