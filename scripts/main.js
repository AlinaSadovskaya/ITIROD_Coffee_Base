function setEventListeners() {
    const signupLink = document.querySelector('#signup-link i');
    const loginLink = document.querySelector('#login-link i');

    const catalogLink = document.querySelector('#catalog-link a');

    signupLink.addEventListener("click", function (e) {
        onNavigate('/register');
        e.preventDefault();
    }, true);

    loginLink.addEventListener("click", function (e) {
        onNavigate('/login');
        e.preventDefault();
    }, true);

    catalogLink.addEventListener("click", function (e) {
        onNavigate('/catalog');
        e.preventDefault();
    }, true);
}

setEventListeners();
