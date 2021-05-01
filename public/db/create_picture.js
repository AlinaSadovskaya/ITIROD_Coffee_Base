function createIngredientImageDiv(coffee) {
    let coffeeImageDiv = document.createElement("div");
    coffeeImageDiv.classList.add('image-box');

    let coffeePicture = document.createElement("picture");
    coffeeImageDiv.appendChild(coffeePicture);

    let coffeeImage = document.createElement("img");
    coffeeImage.setAttribute('src', "images/empty-cup.png");
    coffeeImage.setAttribute('alt', "empty-cup");

    coffeePicture.appendChild(coffeeImage);


    let cupValue = 300;
    let percentValues = 0;
    let reductionFactor = 0;

    for (let ingredient of coffee.ingredients) {
        percentValues += ingredient.value;
    }

    if (coffee.value > cupValue) {
        reductionFactor = 1;
    }
    else {
        reductionFactor = coffee.value / cupValue;
    }

    if (coffee.value < cupValue) {
        percentValues = (percentValues * reductionFactor) | 0;
    }

    let lst_ingr = coffee.ingredients.sort((a, b) => a.value - b.value);
    for (let ingredient of lst_ingr) {
        let ingredientDiv = document.createElement("div");
        ingredientDiv.classList.add('coffee-ingredient_n');
        ingredientDiv.classList.add(ingredient.name);
        ingredientDiv.setAttribute('style', getIngredientStyleString(100 - percentValues | 0));
        percentValues -= ingredient.value * reductionFactor;
        coffeeImageDiv.appendChild(ingredientDiv);
    }

    return coffeeImageDiv;
}

function getIngredientStyleString(value) {
    return `clip-path: polygon(0 ${value}%, 100% ${value}%, 100% 100%, 0% 100%);
    -webkit-clip-path: polygon(0 ${value}%, 100% ${value}%, 100% 100%, 0% 100%);`;
}
