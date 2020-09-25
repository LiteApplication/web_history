var introduction = document.getElementById("introduction");
var summary = document.getElementById("summary");
var informations = document.getElementById("informations");
var viewer = document.getElementById("viewer");
viewer.src = "blank.html";

function toggleIntroduction() {
    introduction.classList = ["button-active"];
    summary.classList      = ["button"];
    informations.classList = ["button"];
    viewer.src = "introduction.html";
    
}
function toggleSummary() {
    summary.classList      = ["button-active"];
    introduction.classList = ["button"];
    informations.classList = ["button"];
    viewer.src = "sommaire.html";
}
function toggleInformations() {
    informations.classList = ["button-active"];
    introduction.classList = ["button"];
    summary.classList      = ["button"];
    viewer.src = "informations.html";
}