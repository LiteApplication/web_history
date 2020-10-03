var pageContent = document.getElementById("page-content"); // Met le div pageContent dans une variable
var host = `${window.location.protocol}//${window.location.hostname}/`; // fais en sorte que le site reste sur un domaine (claj-ndc.github.io ou localhost pour les tests en local)

window.onload = function () { loadButtons(document); } // Initialise les boutons

function loadButtons(el) { // fonction d'initalisation des boutons
    var elements = el.getElementsByTagName('*'), i; // récupère tous les éléments de la page et stock dans une variable
    for (i in elements) { // Enn math, ça donne i --> n elements --> U elements[i] = U(n) = un élément de la page en particulier
        if (elements[i].hasAttribute && elements[i].hasAttribute('target')) { //Si l'element à des attributs et si il a un attribut target
            elements[i].onclick = function () {
                toggleButton(this); // execute la fonction qui charge les pages et maintient les boutons
            }
        }
    }
}

function toggleButton(el) { // définit fonction qui charge les pages et maintient les boutons activés (en bleu)
    var elements = document.getElementsByTagName('*'), i; // récupère tous les éléments sous el
    for (i in elements) {
        if (elements[i].hasAttribute && elements[i].hasAttribute('target')) {
            elements[i].classList = ["button"]; // On supprime toutes les classes CSS appliquées au boutton et on met "buttton" à la place
        }
    }
    pageContent.classList.toggle("hide"); // cache toi
    el.classList = ["button-active"]; // Dit au bouton qui vient d'etre cliqué de s'activer (il se met en bleu et décalé)
    setTimeout(function () { // Attend 200 ms avant d'executer la fonction (le temps que pageContent disparaisse)
        setContentText(`${host}/web_history/${el.getAttribute("target")}`); // Probablement la ligne la plus complexe, mais facile si on la décompose:
        //  Partie 1 : `${host}/web_history/${el.getAttribute("target")}` ce code construit l'url à charger :
        //      host : https://claj-ndc.github.io
        //      /web_history/
        //      el.getAttribute("target") : le contenu de target du bouton sur lequel on vient de cliquer (ex : pages/informations.html)
        //    Resultat : https://claj-ndc.github.io/web_history/pages/informations.html
        //  Partie 2:
        //      setContentText(url) : fonction créée par mes soins qui copie le contenu de la page située à "url" dans le div pageContent
    }, 200);
}

function setContentText(url) { // comme je le disais avant c'est une fonction qui récupère la page dont l'URL est url (ici, url est une variable) et copie son contenu dans pageContent
    // Comme les requetes web ressemblent à du courrier, on va partir de là
    var request = new XMLHttpRequest(); // Prendre une lettre
    request.open('GET', url, true); // Dans la lettre , on écrit GET, ce qui veut dire donne moi ce qui ce trouve à, puis on ajoute url (qu'on a créé à la ligne 27) et on lui dit de ne pas attendre la réponse pour continuer
    request.send(null); // On envoie la lettre
    request.onreadystatechange = function () { // à chaque fois que le facteur arrive avec l'état d'avancement de la lettre (envoyée, dans le bureau de poste, en transit, ...) on execute ça
        if (request.readyState === 4 && request.status === 200) { // si la lettre est arrivée (readyState = 4) et qu'il n'y a pas eu d'erreur (status = 200)
            pageContent.innerHTML = request.responseText; // on copie le contenu de la réponse (ce sera le contenu de la page) dans notre pageContent
            loadButtons(pageContent); // On vérifie si il y a des boutons dans la page qu'on vient de charger et si oui, on les affiche correctement
            console.debug("Show")
            pageContent.classList.toggle("hide"); // Décache toi (On ne montre la page que quand elle est)
        }
        if (request.readyState === 4 && request.status === 404) { // si il y a une erreur 404 : affiche un message au lieu de ne rien faire
            setContentText(`${host}/web_history/undefined`) // On charge la page d'erreur
        }
    }
}