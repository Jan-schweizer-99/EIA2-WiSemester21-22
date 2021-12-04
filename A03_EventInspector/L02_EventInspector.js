"use strict";
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad); //starte die handleload funktion
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfobox); //oeffne bei der Mausbewegung irgendwo im auf der Seite die handlemousemove funktion
        document.addEventListener("click", logInfo); //oeffne bei einem Maus(click) event irgendwo auf der Seite die handleClick Funktion
        document.addEventListener("keyup", logInfo); //oeffne bei einem Tasten(click) event die Funktion handlekeyup
        let div0 = document.createElement("div"); //gut nun probieren wir (div0) in Typescript das HTML Element zu erzeugen
        div0.classList.add("box");
        div0.setAttribute("id", "div0");
        document.body.appendChild(div0);
        let div1 = document.createElement("div"); //gut nun probieren wir (div1) in Typescript das HTML Element zu erzeugen
        div1.classList.add("box");
        div1.setAttribute("id", "div1");
        document.body.appendChild(div1);
        document.body.addEventListener("click", logInfo); //oeffne bei einem click die Klick funktion
        document.body.addEventListener("keyup", logInfo); //oeffne bei der keyup die handlekeyup funktion
        //div0.addEventListener("click", logInfo); //oeffne bei einem click die Klick funktion
        //div0.addEventListener("keyup", logInfo); //oeffne bei der keyup die handlekeyup funktion
        //div1.addEventListener("click", logInfo); //oeffne bei einem click die Klick funktion
        //div1.addEventListener("keyup", logInfo); //oeffne bei der keyup die handlekeyup funktion
    }
    window.addEventListener("mousemove", setInfobox);
    function setInfobox(_event) {
        let x = _event.clientX; //deklariere die X position mit der eventfunktion der Maus
        let y = _event.clientY; //deklariere die y position mit der eventfunktion der Maus
        let position = document.querySelector("span"); //deklariere die position des spans
        let target = _event.target; //deklariere das Target (div0,div1,html oder htmlheader)
        position.innerHTML = "Event-target:" + "<br>" + target + "" + "<br>" + "x=" + x + " " + "px" + " " + "<br>" + "y=" + y + " " + "px"; //Textausgabe des span
        position.style.left = (_event.clientX + 5) + "px"; //aendere die Position des span (x) neben der Maus
        position.style.top = (_event.clientY + 10) + "px"; //aendere die position des span (y) neben der Maus
    }
    window.addEventListener("click", logInfo);
    window.addEventListener("keyup", logInfo);
    function logInfo(_event) {
        console.log(_event.type); //event typ auswaehlen click oder keyup
        console.log(_event.target); // ziel anzeigen
        console.log(_event.currentTarget); //aktuell ausgewähltes ziel anzeigen
        console.log(_event); //ganzes event anzeigen in konsole
    }
})(EventInspector || (EventInspector = {}));
