function setEventListeners() {
    const signupLink = document.querySelector('#signup-link i');
    const loginLink = document.querySelector('#login-link i');
    const logoutLink = document.querySelector('#logout-link i');

    const catalogLink = document.querySelector('#catalog-link a');
    const createLink = document.querySelector('#create-link a');

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

    createLink.addEventListener("click", function (e) {
        onNavigate('/create');
        e.preventDefault();
    }, true);

    logoutLink.addEventListener("click", function (e) {
        my_auth.logOut();
        e.preventDefault();
    }, true);
}

setEventListeners();
