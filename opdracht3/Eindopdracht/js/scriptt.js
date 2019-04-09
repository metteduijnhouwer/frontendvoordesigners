var requestURL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

var body = document.querySelector('body');

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    var makeup = request.response; //variabele met json data
    console.log(makeup);
    makeuplatenzien(makeup); //geef object mee als parameter
};

function makeuplatenzien(jsonObj) {
    var section = document.querySelector('body section');

    console.log("DIT IS DE HOEVEELHEID", jsonObj.length);
    for (var i = 0; i < jsonObj.length; i++) {

        var artikel = document.createElement('article');
        artikel.setAttribute('class', jsonObj[i].product_type);
        console.log(jsonObj[i].product_type);


        var plaatje = document.createElement('img');
        var titel = document.createElement('h2');
        var beschrijving = document.createElement('p');
        var prijs = document.createElement('span');
;
        titel.innerHTML = jsonObj[i].name;
        plaatje.src = jsonObj[i].image_link;
        beschrijving.innerHTML = jsonObj[i].description;
        prijs.innerHTML = jsonObj[i].price;

        artikel.appendChild(plaatje);
        artikel.appendChild(titel); /* hij gooit alles onder elkaar */
        artikel.appendChild(beschrijving);
        artikel.appendChild(prijs);

        section.appendChild(artikel);
    }
}

var boxeen = document.querySelector('.knopjes button');
var boxtwee = document.querySelector('.knopjes button:nth-of-type(2)');
var doosje = document.querySelector('.knopjes button:nth-of-type(3)');
var vier = document.querySelector('.eyes button:first-of-type');
var vijf = document.querySelector('.eyes button:nth-of-type(2)');
var zes = document.querySelector('.eyes button:nth-of-type(3)');
var zeven = document.querySelector('.nails button:first-of-type');
var acht = document.querySelector('.lips button:first-of-type');
var negen = document.querySelector('.lips button:nth-of-type(2)');


function filteropsoort(event) {
    var value = event.target.value; /* welke value hetgene had wat getriggerd was */
    var artikelen = document.querySelectorAll('article');

    for (var artikel of artikelen) {

        var iets = artikel.classList.value; /* de var maakt hij aan en hij haalt alle value's van de classes van de artikelen op*/

        if (value != iets) { /* als de value niet iets is, dan komt er invisible bij */
            artikel.classList.add('invisible');
        }

    }

}

boxeen.addEventListener('click', filteropsoort);
boxtwee.addEventListener('click', filteropsoort);
doosje.addEventListener('click', filteropsoort);
vier.addEventListener('click', filteropsoort);
vijf.addEventListener('click', filteropsoort);
zes.addEventListener('click', filteropsoort);
zeven.addEventListener('click', filteropsoort);
acht.addEventListener('click', filteropsoort);
negen.addEventListener('click', filteropsoort);



/* het uiklappen van het filter menu */
var uitklappenknp = document.querySelector('.klapje img');


function uitklappen(){
    body.classList.toggle('uitklap');
}

uitklappenknp.addEventListener('click', uitklappen);


