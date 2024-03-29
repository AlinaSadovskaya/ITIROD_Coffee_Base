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

    async getAllDrinks() {
        return (await this.database.ref('drinks/').once('value')).val();
    }

    addCoffeeDrink(coffeeDrink) {
        this.database.ref('drinks/').push({
            coffeeName: coffeeDrink.coffeeName,
            login: coffeeDrink.login,
            value: coffeeDrink.value,
            desc: coffeeDrink.desc,
            ingredients: coffeeDrink.ingredients,
            Date: coffeeDrink.Date.toISOString().slice(0, 10) + ' ' + coffeeDrink.Date.toTimeString().slice(0, 8)
        })
    }

    async getCoffeeDrink(id) {
        return (await this.database.ref('drinks/' + id).once('value')).val();
    }

    setStar(coffeeDrinkId, userId, mark) {
        this.database.ref(`drinks/${coffeeDrinkId}/stars/${userId}`).set(+mark);
    }

    setMark(coffeeDrinkId, userId, mark) {
        this.database.ref(`drinks/${coffeeDrinkId}/mark/`).set(+mark);
    }

    async getMark(coffeeDrinkId) {
        return (await this.database.ref(`drinks/${coffeeDrinkId}/mark/`).once('value')).val();
    }

    async getStarByUser(coffeeDrinkId, userId) {
        return (await this.database.ref(`drinks/${coffeeDrinkId}/stars/${userId}`).once('value')).val();
    }

    addComment(coffeeDrinkId, comment) {
        this.database.ref(`drinks/${coffeeDrinkId}/comments/`).push({
            login: comment.login,
            comment: comment.comment,
            date: comment.date.toISOString().slice(0, 10) + ' ' + comment.date.toTimeString().slice(0, 8)
        })
    }
}

let db = new My_db();
