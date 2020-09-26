var introduction = document.getElementById("introduction");
var sommaire = document.getElementById("sommaire");
var informations = document.getElementById("informations");
var viewer = document.getElementById("viewer");
viewer.src = "./blank.html";
var btn_page = {
    "introduction": "./introduction.html",
    "sommaire": "./sommaire.html",
    "informations": "./informations.html"
};

function toggleButton(el) {
    viewer.classList.toggle("hide");
    introduction.classList = ["button"];
    sommaire.classList = ["button"];
    informations.classList = ["button"];
    el.classList = ["button-active"];
    setTimeout(function () {
        viewer.src = btn_page[el.id];
    }, 250);
    setTimeout(function () {
        viewer.classList.toggle("hide");
    }, 500
    );
}