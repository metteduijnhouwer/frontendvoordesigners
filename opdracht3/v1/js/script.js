var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'

var body = document.querySelector('body');

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    var filmpjes = request.response; //variabele met json data
    console.log("film data", filmpjes);
    laatfilmpjeszien(filmpjes); //geef object mee als parameter
}

function laatfilmpjeszien(jsonObj) {
    //var heroes = jsonObj;
    console.log("hoeland ben jij", jsonObj.length);
    for (var i = 0; i < jsonObj.length; i++) {

        console.log(jsonObj[i].title);

        var titel = document.createElement('h2');
        titel.innerHTML = jsonObj[i].title;
        body.appendChild(titel);

    }

}
