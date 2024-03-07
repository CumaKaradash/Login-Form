function togglePassword() {
    var passwordInput = document.getElementById("password");
    var passwordToggle = document.getElementById("password-toggle");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.textContent = "Gizle";
    } else {
        passwordInput.type = "password";
        passwordToggle.textContent = "Göster";
    }
}

var passwordInput = document.getElementById("password");
var passwordStrengthIndicator = document.getElementById("password-strength-indicator");

passwordInput.addEventListener("input", checkPasswordStrength);

function checkPasswordStrength() {
    var passwordStrength = calculatePasswordStrength(passwordInput.value);
    var strengthIndicatorWidth = passwordStrength + "%";
    passwordStrengthIndicator.style.width = strengthIndicatorWidth;

    if (passwordStrength < 30) {
        passwordStrengthIndicator.style.backgroundColor = "#dc3545";
    } else if (passwordStrength < 70) {
        passwordStrengthIndicator.style.backgroundColor = "#ffc107";
    } else {
        passwordStrengthIndicator.style.backgroundColor = "#28a745";
    }
}

function calculatePasswordStrength(password) {
    return Math.min(password.length * 10, 100);
}

function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    if (username.trim() === "" || password.trim() === "") {
        errorMessage.textContent = "Kullanıcı adı ve şifre gereklidir.";
    } else {
        if (username === "demo" && password === "demo123") {
            errorMessage.textContent = "Giriş başarılı!";
            errorMessage.style.color = "green";
        } else {
            errorMessage.textContent = "Geçersiz kullanıcı adı veya şifre.";
            errorMessage.style.color = "red";
        }
    }
}
