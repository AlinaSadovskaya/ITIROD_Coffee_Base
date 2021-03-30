class AuthLogic {
  constructor() {
    this.user = null;
  }

  async isAuthenticated() {
    let service = this;
    return await startAuth.then(() => {
      return service.user != null
    })
  }

  signUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
      onNavigate('/');
    }).catch(function (error) {
      alert('Email is wrong or has already been used.')
    });
  }
}

const startAuth = new Promise(resolve => {
  firebase.auth().onAuthStateChanged(user => {
    my_auth.this.user = user;
    resolve();
  })
})


let my_auth = new AuthLogic();
