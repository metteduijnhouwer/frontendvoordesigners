for(var i=0; i<buttons.length; i++){
    function veranderen(e){
        document.documentElement.style.setProperty(kleurenvar[e.target.name], e.target.value);
    }

    buttons[i].addEventListener("change", veranderen);

}

