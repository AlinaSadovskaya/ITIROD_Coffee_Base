async function getCatalog() {

    let catalog = await db.getAllDrinks();

    let catalogArray = [];
    for (let coffeeId in catalog) {
        catalogArray.push({ id: coffeeId, value: catalog[coffeeId] });
    }
    catalog = catalogArray.reverse();
    let filterOption = getURLParam('filter');
    let sortOption = getURLParam('sort');

    setSortFilter(filterOption, sortOption);

    if (filterOption != null || sortOption != null) {
        catalog = filterSortCatalog(catalog, filterOption, sortOption);
    }

    // console.log(catalog);

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

    let mark = coffee.value.mark;

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


function filterSortCatalog(catalog, filterOption, sortOption) {

    if (filterOption == 'top') {
        catalog.sort((a, b) => b.value.mark || 0 - a.value.mark || 0);
        catalog = catalog.slice(0, 10);
        catalog.sort((a, b) => b.value.mark || 0 - a.value.mark || 0);
    }

    switch (sortOption) {
        case 'rating':
            catalog.sort((a, b) => b.value.mark || 0 - a.value.mark || 0);
            break;
        case 'date':
            catalog.sort((a, b) => Date.parse(b.value.Date) - Date.parse(a.value.Date));
            break;
        case 'name':
            catalog.sort(function (a, b) {
                var nameA = a.value.coffeeName.toLowerCase(), nameB = b.value.coffeeName.toLowerCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            break;
    }

    return catalog;
}


function setSortFilter(filterOption, sortOption) {


    if (filterOption != null) {
        switch (filterOption) {
            case 'all':
                document.getElementById("filter-all-li").style.setProperty('--sq-color', "#FFCE08");
                document.getElementById("filter-top-li").style.setProperty('--sq-color', "#E0926E");
                break;
            case 'top':
                document.getElementById("filter-top-li").style.setProperty('--sq-color', "#FFCE08");
                document.getElementById("filter-all-li").style.setProperty('--sq-color', "#E0926E");
                break;
        }
    }
    else {
        document.getElementById("filter-all-li").style.setProperty('--sq-color', "#FFCE08");
        document.getElementById("filter-top-li").style.setProperty('--sq-color', "#E0926E");
    }


    if (sortOption != null) {
        switch (sortOption) {
            case 'name':
                document.getElementById("sort-name-li").style.setProperty('--sq-color', "#FFCE08");
                document.getElementById("sort-date-li").style.setProperty('--sq-color', "#E0926E");
                document.getElementById("sort-rating-li").style.setProperty('--sq-color', "#E0926E");
                break;
            case 'rating':
                document.getElementById("sort-rating-li").style.setProperty('--sq-color', "#FFCE08");
                document.getElementById("sort-name-li").style.setProperty('--sq-color', "#E0926E");
                document.getElementById("sort-date-li").style.setProperty('--sq-color', "#E0926E");
                break;
            case 'date':
                document.getElementById("sort-date-li").style.setProperty('--sq-color', "#FFCE08");
                document.getElementById("sort-name-li").style.setProperty('--sq-color', "#E0926E");
                document.getElementById("sort-rating-li").style.setProperty('--sq-color', "#E0926E");
                break;
        }
    }
}


getCatalog();
