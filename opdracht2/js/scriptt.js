var carousels = document.getElementsByClassName('carousel');

console.log("foreach", carousels)

var next = document.querySelector('.verder');
var prev = document.querySelector('.terug');
var inner = document.querySelector('.inner');
var imgs = document.querySelectorAll('.inner > img');
var imageIndex = 0;
var width = 100;
var knp = document.querySelector('.titel > img');
var instellingen = document.querySelector('.instellingen');
var body = document.querySelector('body');
var roodknp = document.querySelector('button:first-of-type');
var groenknp = document.querySelector('button:nth-of-type(2)')
var zwartknp = document.querySelector('button:nth-of-type(3)')
huidigekleur = null;


function veranderenImg() {
    inner.style.left = -width * imageIndex + '%';
}

function terugpijltje() {
    imageIndex--;

    if (imageIndex < 0) {
        imageIndex = imgs.length - 1;
    }

    veranderenImg();
}

function verderpijltje() {
    imageIndex++;

    if (imageIndex >= imgs.length) {
        imageIndex = 0;
    }

    veranderenImg();
}


next.addEventListener('click', function () {
    verderpijltje();
});

prev.addEventListener('click', function () {
    terugpijltje();
});

window.addEventListener('keyup', function (e) {
    if (e.keyCode === 37) {
        terugpijltje();
    }
    if (e.keyCode === 39) {
        verderpijltje();
    }
})


var range = document.querySelector("#range");
var h1 = document.querySelector("h1");

range.addEventListener("input", function () {
    h1.style["font-size"] = this.value + "em";
});


function uitklappen() {
    body.classList.toggle('uitgeklapt');
}

knp.addEventListener('click', uitklappen);


function roodworden() {
    if (huidigekleur === "rood") {
        body.classList.remove('rood');
        huidigekleur = null;
    } else {
        body.classList.add('rood');
        body.classList.remove('groen');
        body.classList.remove('zwart');
        huidigekleur = "rood";
    }
}

roodknp.addEventListener('click', roodworden);

function groenworden() {
    if (huidigekleur === "groen") {
        body.classList.remove('groen');
        huidigekleur = null;
    } else {
        body.classList.add('groen');
        body.classList.remove('rood');
        body.classList.remove('zwart');
        huidigekleur = "groen";
    }
}

groenknp.addEventListener('click', groenworden);


function zwartworden() {
    if (huidigekleur === "zwart") {
        body.classList.remove('zwart');
        huidigekleur = null;
    } else {
        body.classList.add('zwart');
        body.classList.remove('rood');
        body.classList.remove('groen');
        huidigekleur = "zwart";
    }
}

zwartknp.addEventListener('click', zwartworden);

console.log($);
