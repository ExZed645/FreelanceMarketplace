
// Show and hide password fields
const passwordToggles = document.querySelectorAll(".toggle-password");

passwordToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
        const passwordInput = toggle.previousElementSibling;

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggle.textContent = "Hide";
        } else {
            passwordInput.type = "password";
            toggle.textContent = "Show";
        }
    });
});

// Prevent form submission until the Django backend is connected
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });
}

if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });
}
const forgotPasswordForm = document.getElementById("forgotPasswordForm");
const resetPasswordForm = document.getElementById("resetPasswordForm");

if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });
}

if (resetPasswordForm) {
    resetPasswordForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });
}