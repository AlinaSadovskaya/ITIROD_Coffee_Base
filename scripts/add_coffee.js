async function submitForm() {
    let name = document.getElementById('beauty-input-name').value;
    let value = document.getElementById('beauty-input-number').value;
    let description = document.getElementById('description-create').value;
    let user = 'alinasadovsckaya@yandex.ru';//my_auth.user.email;
    name = name.trim().toLowerCase();

    let isInputValid = await checkValue(name, value, description);
    if (!isInputValid) {
        return;
    }

    let ingredientsSelects = document.getElementsByClassName('ingredients-select');
    let ingredientsValues = document.getElementsByClassName('input_value_ingr');

    let sumOfValues = 0;
    for (let value of ingredientsValues) {
        sumOfValues += +value.value;
    }

    if (sumOfValues < 95 || sumOfValues > 100) {
        alert('Sum of ingredients should be сlose to 100');
        return;
    }

    let ingrLst = new Map();
    for (let i = ingredientsSelects.length - 1; i >= 0; i--) {
        let name = ingredientsSelects[i].options[ingredientsSelects[i].selectedIndex].value;
        let value = +ingredientsValues[i].value;
        if (ingrLst.has(name)) {
            let newValue = ingrLst.get(name) + value;
            ingrLst.delete(name);
            ingrLst.set(name, newValue);
        }
        else {
            ingrLst.set(name, value);
        }
    }

    let ingredientsList = [];

    for (let pair of ingrLst.entries()) {
        ingredientsList.push(new Ingredient(pair[0], pair[1]));
    }


    let coffee = new CoffeeDrink(name.trim().toLowerCase(), user, value, description, ingredientsList);
    db.addCoffeeDrink(coffee);
    onNavigate('/');
}


function addIngredient() {
    let ingredientListItem =
        ` <div class="ingredient-value">
            <select class="ingredients-select" name="ingredients-select">
                <option value="espresso">ESPRESSO</option>
                <option value="water">WATER</option>
                <option value="milk">MILK</option>
                <option value="milk-foam">MILK FOAM</option>
                <option value="chocolate">CHOCOLATE</option>
                <option value="honey">HONEY</option>
                <option value="syrup">SYRUP</option>
                <option value="vanilla">VANILLA</option>
                <option value="red_pepper">RED PEPPER</option>
                <option value="egg_yolk">EGG_YOLK</option>
            </select>
            <input class="input_value_ingr" type="number" name="ingredient-value" value="" placeholder="VALUE%" required>
            <button class="remove-ingredient" type="button" name="remove-ingredient" onclick="deleteIngredient();"><i class="fas fa-minus"></i></button>
        </div>
        
    `

    let ingredientsList = document.querySelector('.ingredients-list');
    let ingredientItem = document.createElement('li');
    ingredientItem.classList.add('ingredient-desc');
    ingredientItem.innerHTML = ingredientListItem;
    ingredientsList.appendChild(ingredientItem);
}

function deleteIngredient() {
    let item = event.srcElement.closest(".ingredient-desc");
    item.parentNode.removeChild(item);
}

async function checkValue(name, value, description) {

    if (name == "") {
        alert('Name is empty!');
        return false;
    }

    if (value == "") {
        alert('Value is empty!');
        return false;
    }

    if (description == "") {
        alert('Description is empty!');
        return false;
    }

    let drinks = await db.getAllDrinks();
    for (let id in drinks) {
        if (drinks[id].coffeeName == name) {
            alert('Name already exists! Change name of your Coffee Drink');
            return false;
        }
    }

    if (value <= 0 || value > 1000) {
        alert('Standard value should be less than a liter but more than 0ml');
        return false;
    }

    return true;
}
