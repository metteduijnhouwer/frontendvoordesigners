var huidigekleur = null;

var boxeen = document.getElementById("boxeen");
var boxtwee = document.getElementById("boxtwee");
var boxdrie = document.getElementById("boxdrie");
var section = document.querySelector('section');
var body = document.querySelector('body');

function functieeen() {
    if (huidigekleur === "geel") {
        body.classList.remove('geel');
        huidigekleur = null;
    } else {
        body.classList.remove('blauw');
        body.classList.remove('groen');
        body.classList.add('geel');
        huidigekleur = "geel";
    }
}

boxeen.addEventListener('click', functieeen);


function functietwee() {
    if (huidigekleur === "blauw") {
        body.classList.remove('blauw');
        huidigekleur = null;
    } else {
        body.classList.add('blauw');

        body.classList.remove('geel');
        body.classList.remove('groen');

        huidigekleur = "blauw";
    }
}

boxtwee.addEventListener('click', functietwee);


function functiedrie() {
    if (huidigekleur === "groen") {
        body.classList.remove('groen');
        huidigekleur = null;
    } else {
        body.classList.remove('geel');
        body.classList.remove('blauw');
        body.classList.add('groen');
        huidigekleur = "groen";
    }
}

boxdrie.addEventListener('click', functiedrie);
