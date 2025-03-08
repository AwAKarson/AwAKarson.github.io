document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var id = document.getElementById('register-id').value;
    var nickname = document.getElementById('register-nickname').value;
    var email = document.getElementById('register-email').value;
    var age = document.getElementById('register-age').value;
    var gender = document.getElementById('register-gender').value;
    var password = document.getElementById('register-password').value;
    var confirmPassword = document.getElementById('register-confirm-password').value;
    var profileImage = document.getElementById('register-profile-image').value;
    var registerSuccess = true;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        registerSuccess = false;
        return;
    }
    var idInput = document.getElementById("register-id");
    var nicknameInput = document.getElementById("register-nickname");
    var emailInput = document.getElementById("register-email");
    var passwordInput = document.getElementById("register-password");
    var confirmPasswordInput = document.getElementById("register-confirm-password");
    
    if (!isValidAlphanumeric(idInput.value)) {
        alert("Login ID must be alphanumeric.");
        event.preventDefault();
        registerSuccess = false;
        return;
    }
    
    if (!isValidAlphanumeric(nicknameInput.value)) {
        alert("Nickname must be alphanumeric.");
        event.preventDefault();
        registerSuccess = false;
        return;
    }
    
    if (!isValidEmail(emailInput.value)) {
        alert("Invalid email format.");
        event.preventDefault();
        registerSuccess = false;
        return;
    }
    
    if (!isValidPassword(passwordInput.value)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, and one number.");
        event.preventDefault();
        registerSuccess = false;
        return;
    }
    
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Passwords do not match.");
        event.preventDefault();
        registerSuccess = false;
        return;
    }
    // Perform registration logic here
    if (registerSuccess == true) {
        alert('Registration Successful');
        document.getElementById('register-form').reset();
    };
    console.log('Registration Details:');
    console.log('ID:', id);
    console.log('Nickname:', nickname);
    console.log('Email:', email);
    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('Password:', password);
    console.log('Profile Image:', profileImage);
});

function isValidAlphanumeric(value) {
    var alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(value);
}

function isValidEmail(value) {
    var emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(value);
}

function isValidPassword(value) {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(value);
}

document.getElementById("register-show-password").addEventListener("click", function() {
    var passwordInput = document.getElementById("register-password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        this.textContent = "Show";
    }
});

document.getElementById("register-show-confirm-password").addEventListener("click", function() {
    var confirmPasswordInput = document.getElementById("register-confirm-password");
    if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
        this.textContent = "Hide";
    } else {
        confirmPasswordInput.type = "password";
        this.textContent = "Show";
    }
});

document.getElementById("login-show-password").addEventListener("click", function() {
    var loginPasswordInput = document.getElementById("login-password");
    if (loginPasswordInput.type === "password") {
        loginPasswordInput.type = "text";
        this.textContent = "Hide";
    } else {
        loginPasswordInput.type = "password";
        this.textContent = "Show";
    }
});
