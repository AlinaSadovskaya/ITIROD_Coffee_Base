function setEventListeners() {
    const signupLink = document.querySelector('#signup-link i');
    const loginLink = document.querySelector('#login-link i');

    signupLink.addEventListener("click", function (e) {
        onNavigate('/register');
        e.preventDefault();
    }, true);

    loginLink.addEventListener("click", function (e) {
        onNavigate('/login');
        e.preventDefault();
    }, true);
}

setEventListeners();
