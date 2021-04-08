function SignUpForm() {
    let email = document.getElementById('login-input').value;
    let password = document.getElementById('password-input').value;
    let passwordAgain = document.getElementById('password-again-input').value;

    if (password != passwordAgain) {
        alert("Passwords are different")
        return;
    }
    if (password.length < 6) {
        alert("Password's length should be at least 6 symbols")
        return;
    }
    if (!(password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([0-9])/) && password.match(/([a-zA-Z])/))) {
        alert("The password must contain at least 1 digit, 1 character, and 1 special synbol")
        return;
    }
    my_auth.signUp(email, password);
}

function LoginForm() {
    let email = document.getElementById('login-input').value;
    let password = document.getElementById('password-input').value;
    my_auth.login(email, password);
}