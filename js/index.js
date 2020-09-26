var pageContent = document.getElementById("page-content");

window.onpointermove = function () {
    var elements = document.getElementsByTagName('*'), i;
    for (i in elements) {
        if (elements[i].hasAttribute && elements[i].hasAttribute('target')) {
            elements[i].onclick = function () {
                toggleButton(this);
            }
        }
    }
}
function toggleButton(el) {
    console.info("called toggleButton");
    console.debug("resetting styles");
    var elements = document.getElementsByTagName('*'), i;
    for (i in elements) {
        if (elements[i].hasAttribute && elements[i].hasAttribute('target')) {
            elements[i].classList = ["button"];
        }
    }
    console.debug("hide viewer");
    pageContent.classList.toggle("hide");
    console.debug("set button style to active");
    el.classList = ["button-active"];
    setTimeout(function () {
        console.debug(`loading ${el.getAttribute("target")} ...`);
        setContentText(`http://localhost/web_history/${el.getAttribute("target")}`);
    }, 200);
    setTimeout(function () {
        console.debug("show viewer");
        pageContent.classList.toggle("hide");

    }, 500);
}

function setContentText(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            console.debug("loading complete");
            pageContent.innerHTML = request.responseText;
            console.debug("page content set");
        }
    }
}