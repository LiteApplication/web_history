var introduction = document.getElementById("introduction");
var summary = document.getElementById("summary");
var informations = document.getElementById("informations");
var viewer = document.getElementById("viewer");
viewer.src = "blank.html";

function toggleButton(el) {
    introduction.classList = ["button"];
    summary.classList = ["button"];
    informations.classList = ["button"];
    el.classList = ["button-active"];
    viewer.src = "introduction.html";
}
