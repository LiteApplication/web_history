var introduction = document.getElementById("introduction");
var sommaire = document.getElementById("sommaire");
var informations = document.getElementById("informations");
var pageContent = document.getElementById("page-content");
var btn_page = {
    "introduction": "/introduction.html",
    "sommaire": "/sommaire.html",
    "informations": "/informations.html"
};

function toggleButton(el) {
    pageContent.classList.toggle("hide");
    introduction.classList = ["button"];
    sommaire.classList = ["button"];
    informations.classList = ["button"];
    el.classList = ["button-active"];
    setTimeout(function () {
        setContentText(`http://localhost/web_history${btn_page[el.id]}`);
    }, 250);
    setTimeout(function () {
        pageContent.classList.toggle("hide");
    }, 500);
}

function setContentText(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            pageContent.innerHTML =  request.responseText;
        }
    }
}