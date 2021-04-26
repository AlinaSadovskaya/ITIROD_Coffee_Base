const routes = {
    '/login': login,
    '/register': register,
    '/catalog': catalog,
    '/create': create,
    '/details': details,
    '/404': error404,
    '/': catalog
};

function getPathWithoutParams(pathname) {
    let startParamsIndex = pathname.indexOf('?');
    if (startParamsIndex != -1) {
        return pathname.slice(0, startParamsIndex);
    }
    return pathname;
}

const scripts = {
    '/login': "db/registrate.js",
    '/register': "db/registrate.js",
    '/catalog': "db/catalog.js",
    '/create': "db/add_coffee.js",
    '/details': "db/details.js",
    '/': "db/catalog.js"
}

function addScript(pathname) {
    var scriptSrc = scripts[pathname];
    var script = document.createElement("script");
    script.src = scriptSrc;
    rootDiv.appendChild(script);
}

async function addBack(pathname) {
    if (pathname in scripts) {
        addScript(pathname);
    }
}

async function addContent(pathname) {
    pathname = getPathWithoutParams(pathname);
    if (pathname in routes) {
        rootDiv.innerHTML = routes[pathname];
        addBack(pathname);
    }
    else {
        onNavigate('/404');
    }
}

const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    );
    addContent(pathname);
}

window.onpopstate = () => {
    addContent(window.location.pathname);
}

const rootDiv = document.getElementById('root');
addContent(window.location.pathname);