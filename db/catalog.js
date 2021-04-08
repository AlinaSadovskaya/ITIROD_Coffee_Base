async function getCatalog() {
    let catalog = await db.getAllDrinks();

    let catalogArray = [];
    for (let coffeeId in catalog) {
        catalogArray.push({ id: coffeeId, value: catalog[coffeeId] });
    }
    catalog = catalogArray.reverse();

    let catalogDiv = document.getElementById('catalog-grid');
    for (let coffee of catalog) {
        let coffeeNode = getItemCatalog(coffee);
        catalogDiv.append(coffeeNode);
    }
}

function getItemCatalog(coffee) {
    let coffeeNode = document.createElement("a");
    coffeeNode.setAttribute('href', '#');
    coffeeNode.classList.add('rating');
    coffeeNode.setAttribute('onclick', `onNavigate('/details?id=${coffee.id}'); return false;`);

    let coffeeItemDiv = document.createElement("div");
    coffeeItemDiv.classList.add('box');

    let coffeeImageBox = createIngredientImageDiv(coffee.value);
    coffeeItemDiv.appendChild(coffeeImageBox);

    let coffeeDetails = document.createElement("div");
    coffeeDetails.classList.add('details');
    coffeeItemDiv.appendChild(coffeeDetails);

    let coffeeTitle = document.createElement("p");
    coffeeTitle.classList.add('coffee-title');
    coffeeTitle.textContent = coffee.value.coffeeName.toUpperCase();
    coffeeDetails.appendChild(coffeeTitle);


    let ratingDiv = document.createElement("div");
    ratingDiv.classList.add('grid-item-rating');
    let mark;

    if ('stars' in coffee.value) {
        let all_marks = Object.values(coffee.value.stars);
        if (all_marks.length == 0) {
            mark = 0;
        }
        else {
            mark = all_marks.reduce((a, b) => (a + b)) / all_marks.length;
        }
    }

    for (let i = 0; i < 5; i++) {
        let starSpan = document.createElement("span");
        starSpan.classList.add("fa");
        starSpan.classList.add("fa-star");
        if (mark >= i + 0.5) {
            starSpan.classList.add("checked");
        }
        ratingDiv.appendChild(starSpan);
    }
    coffeeDetails.appendChild(ratingDiv);
    coffeeNode.appendChild(coffeeItemDiv);
    return coffeeNode;
}

getCatalog();
