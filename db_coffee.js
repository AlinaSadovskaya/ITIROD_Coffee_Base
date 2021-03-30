const config = {
    apiKey: "AIzaSyDgx34qb9sZZa5VwoG02EmVZhQEvA0y1hU",
    authDomain: "coffebaseas.firebaseapp.com",
    databaseURL: "https://coffebaseas-default-rtdb.firebaseio.com"
};

class My_db {
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        this.database = firebase.database();
    }
}

let db = new My_db();
