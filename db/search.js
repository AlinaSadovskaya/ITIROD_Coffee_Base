async function searchCoffee() {
    let searchTextPrepair = document.getElementById("search-input");
    let searchText = searchTextPrepair.value.trim().toLowerCase();
    //searchTextPrepair.value = "";
    if (searchText != "") {
        let catalog = await db.getAllDrinks();
        let catalogArray = [];
        for (let coffeeId in catalog) {
            catalogArray.push({ id: coffeeId, value: catalog[coffeeId] });
        }
        catalog = catalogArray.reverse();
        let newCatalog = [];
        for (let id in catalog) {
            let coffeeName = catalog[id].value.coffeeName.toLowerCase();

            if (coffeeName.includes(searchText) || searchText.includes(coffeeName)) {
                newCatalog.push(catalog[id]);
            }
        }
        if (newCatalog.length > 0) {
            newCatalog.sort(function (a, b) {
                var nameA = a.value.coffeeName.toLowerCase(), nameB = b.value.coffeeName.toLowerCase();
                if (nameA.indexOf(searchText) < nameB.indexOf(searchText)) {
                    return -1;
                }
                if (nameA.indexOf(searchText) > nameB.indexOf(searchText)) {
                    return 1;
                }
                if (nameA.indexOf(searchText) == nameB.indexOf(searchText)) {
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    else return 0;
                }

            });
            //console.log(newCatalog);
            newCatalog = newCatalog.slice(0, 3);
            newCatalog = newCatalog.reverse();

            let searchResult = document.getElementById('search-result');
            // searchResult.style.display = 'block';
            searchResult.innerHTML = '';
            for (let coffee of newCatalog) {
                let coffeeNode = getSearchItem(coffee);
                searchResult.prepend(coffeeNode);
            }
        }
        else {
            //alert('A drink with this name was not found( \nYou can create it by going to the "create" tab! \nP.s. You must be registered to be able to create a drink');
            let searchResult = document.getElementById('search-result');
            searchResult.innerHTML = '';
            let result = document.createElement("li");
            let coffeeres = document.createElement("p");
            coffeeres.classList.add('empty_res');
            coffeeres.textContent = 'Sorry( Nothing found...'
            result.appendChild(coffeeres);
            searchResult.prepend(result);
        }
    }
    else {
        let searchResult = document.getElementById('search-result');
        searchResult.innerHTML = '';
    }
}


function getSearchItem(coffee) {
    let result = document.createElement("li");
    let coffeeNode = document.createElement("a");

    let coffeeImg = document.createElement('i');
    coffeeImg.className = 'fas fa-mug-hot';

    let coffeeName = document.createElement("p");
    coffeeName.textContent = coffee.value.coffeeName.toUpperCase();
    //console.log(coffee);
    coffeeNode.setAttribute('onclick',
        `let searchTextPrepair = document.getElementById("search-input");
         searchTextPrepair.value = "";
         let searchResult = document.getElementById('search-result');
         searchResult.innerHTML = '';
         //searchResult.style.display = 'none';
         onNavigate('/details?id=${coffee.id}'); 
         return false;`);


    coffeeNode.appendChild(coffeeImg);
    coffeeNode.appendChild(coffeeName);
    result.appendChild(coffeeNode);
    return result;
}
