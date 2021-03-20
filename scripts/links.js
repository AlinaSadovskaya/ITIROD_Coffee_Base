const routes = {
    '/login': login,
    '/register': register,
    '/catalog': catalog,
    '/': catalog
};

const scripts = {
    '/register': "scripts/registrate.js",
    '/login': "scripts/registrate.js"

}

function getPathWithoutParams(pathname) {
    let startParamsIndex = pathname.indexOf('?');
    if (startParamsIndex != -1) {
        return pathname.slice(0, startParamsIndex);
    }
    return pathname;
}

function addScript(pathname) {
    var scriptSrc = scripts[pathname];
    var script = document.createElement("script");
    script.src = scriptSrc;
    rootDiv.appendChild(script);
}

async function addContent(pathname) {
    pathname = getPathWithoutParams(pathname);
    if (pathname in routes) {
        rootDiv.innerHTML = routes[pathname];
        if (pathname in scripts) {
            addScript(pathname);
        }
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
