const register = `
<script src="scripts/registrate.js"></script>
<link rel="stylesheet" href="styles/registrate.css">
<section class="register-section">
  <form class="register-form" onsubmit="SignUpForm(); return false;">
    <label for="login-input">EMAIL</label>
    <input id="login-input" type="text" name="" value="" required>
    <label for="login-input">PASSWORD</label>
    <input id="password-input" type="password" name="" value="" required>
    <label for="password-again-input">PASSWORD AGAIN</label>
    <input id="password-again-input" type="password" name="" value="" required>
    <button name="button">SIGN UP</button>
  </form>
</section>
`