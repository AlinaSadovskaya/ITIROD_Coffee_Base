async function searchCoffee() {
    let searchTextPrepair = document.getElementById("search-input");
    let searchText = searchTextPrepair.value.trim().toLowerCase();
    searchTextPrepair.value = "";
    if (searchText != "") {
        let catalog = await db.getAllDrinks();

        for (let id in catalog) {
            let coffeeName = catalog[id].coffeeName.toLowerCase();
            if (coffeeName.includes(searchText) || searchText.includes(coffeeName)) {
                onNavigate('/details?id=' + id);
                return;
            }
        }
        alert('A drink with this name was not found( \nYou can create it by going to the "create" tab! \nP.s. You must be registered to be able to create a drink');
    }
}