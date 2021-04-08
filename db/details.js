async function createDetailsPage() {
    let CoffeeDrinkId = getURLParam('id');
    let CoffeeDrink = await db.getCoffeeDrink(CoffeeDrinkId);
    if (CoffeeDrink == null) {
        onNavigate('/404');
        return;
    }
    else {

        document.querySelector('.coffee-name-details').textContent = CoffeeDrink.coffeeName;
        document.querySelector('.coffee-value-details').textContent = CoffeeDrink.value;
        document.querySelector('.coffee-author').textContent = CoffeeDrink.login;
        document.querySelector('.coffee-description-details').textContent = CoffeeDrink.desc;
        setImageDiv(CoffeeDrink);
        setIngredients(CoffeeDrink);

        let mark = 0;
        let stars = Object.values(CoffeeDrink.stars);
        if (stars.length != 0) {
            mark = stars.reduce((a, b) => (a + b)) / stars.length;
        }

        document.querySelector('.average-mark').textContent = mark.toFixed(2);

        if (await my_auth.isAuthenticated()) {
            let mark_by_user = await db.getStarByUser(getURLParam('id'), my_auth.user.uid);

            //    console.log(mark_by_user);

            if (mark_by_user) {
                let input = document.getElementsByClassName('star-rating-input');
                input[5 - mark_by_user].checked = true;
            }
        }
    }
}

function setImageDiv(CoffeeDrink) {
    let pictureInfoDiv = document.querySelector('.coffee-img-details');
    pictureInfoDiv.prepend(createIngredientImageDiv(CoffeeDrink));
}

function setIngredients(CoffeeDrink) {
    let ingredientsList = document.querySelector('.ingredients');
    for (let ingredient of CoffeeDrink.ingredients) {
        let ingredientItem = document.createElement("li");
        ingredientItem.classList.add('ingredient');

        let ingredientValue = document.createElement("span");
        ingredientValue.classList.add('ingedient-value');
        ingredientValue.textContent = `${ingredient.value}% `;

        let ingredientName = document.createElement("span");
        ingredientName.classList.add('ingedient-name');
        ingredientName.textContent = ingredient.name.toUpperCase();

        ingredientItem.appendChild(ingredientValue);
        ingredientItem.appendChild(ingredientName);
        ingredientsList.prepend(ingredientItem);
    }
}

async function setStar(button) {
    let flag = await my_auth.isAuthenticated();
    if (!flag) {
        alert('Sign up to rate your drinks!');
        return;
    }

    let star_mark = button.value;
    let CoffeeDrinkId = getURLParam('id');
    db.setStar(CoffeeDrinkId, my_auth.user.uid, star_mark);

    let CoffeeDrink = await db.getCoffeeDrink(CoffeeDrinkId);

    let mark = 0;
    let stars = Object.values(CoffeeDrink.stars);
    if (stars.length != 0) {
        mark = stars.reduce((a, b) => (a + b)) / stars.length;
    }

    document.querySelector('.average-mark').textContent = mark.toFixed(2);
}


createDetailsPage()