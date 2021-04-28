function setEventListeners() {
    const signupLink = document.querySelector('#signup-link i');
    const loginLink = document.querySelector('#login-link i');
    const logoutLink = document.querySelector('#logout-link i');

    const catalogLink = document.querySelector('#catalog-link a');
    const createLink = document.querySelector('#create-link a');

    signupLink.addEventListener("click", function (e) {
        onNavigate('/register');
        e.preventDefault();
    }, true);

    loginLink.addEventListener("click", function (e) {
        onNavigate('/login');
        e.preventDefault();
    }, true);

    catalogLink.addEventListener("click", function (e) {
        onNavigate('/catalog');
        e.preventDefault();
    }, true);

    createLink.addEventListener("click", function (e) {
        onNavigate('/create');
        e.preventDefault();
    }, true);

    logoutLink.addEventListener("click", function (e) {
        my_auth.logOut();
        e.preventDefault();
    }, true);
}

function getURLParam(param) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let value = urlParams.get(param);
    return value;
}


function getSortParam(sortOption) {
    let url = `/catalog?sort=${sortOption}`;
    let filterOption = getURLParam('filter');
    if (filterOption != null) {
        url += `&filter=${filterOption}`;
    }
    onNavigate(url);
}


function getFilterParam(filterOption) {
    let url = `/catalog?filter=${filterOption}`;
    let sortOption = getURLParam('sort');
    if (sortOption != null) {
        url += `&sort=${sortOption}`;
    }
    onNavigate(url);
}

setEventListeners();
