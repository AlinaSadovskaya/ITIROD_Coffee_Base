function setEventListeners() {
    const signupLink = document.querySelector('#signup-link a');

    signupLink.addEventListener("click", function (e) {
        onNavigate('/register');
        e.preventDefault();
    }, true);

}

setEventListeners();
