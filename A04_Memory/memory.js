"use strict";
var memory;
(function (memory) {
    window.addEventListener("load", handleLoad); //starte die handleload funktion
    let sequence; //eingegebenes Wort
    let shuffledword; //durchgemischtes Wort
    let cardcolor = "#ff0000"; //variable für kartenfarbe
    let cardfont = "arial"; //variable für ausgewählte schrift
    let cardheightwidth = "160px"; //variable für schriftgroeße kartenhoehe und breite
    let cardfontcolor = "#ffffff"; //variable für kartenfarbe
    let timevar = 20;
    let selection;
    let counter = 0; //runden counter
    let showcase = document.createElement("span");
    function handleLoad(_event) {
        let slider = document.querySelector("input#amount"); //kartengroese
        let backgroundcolor = document.querySelector("input#backgroundColor"); //hintergrundfarbe
        let font = document.querySelector("select#font"); //schriftart
        let fontcardcolor = document.querySelector("input#fontcolor"); //
        let cardcolor = document.querySelector("input#cards");
        let time = document.querySelector("input#time");
        let apply = document.querySelector("#start");
        setatributes(); //atribute auf null setzen
        slider.addEventListener("input", ChangeSize); //slider event listener
        backgroundcolor.addEventListener("input", changebackground); //backgroundcolor event listener
        font.addEventListener("input", changefont); //change font listener
        apply.addEventListener("click", Load);
        cardcolor.addEventListener("input", changecardcolor);
        fontcardcolor.addEventListener("input", changefontcolor);
        time.addEventListener("input", timefortimer);
        //card.addEventListener("click", turncard);
        //console.log(document.querySelector(".card").style);      //ausgabe der styles von showcase span     
    }
    function turncard(_index) {
        if (counter <= sequence.length) {
            if (document.getElementById("span" + _index).style.borderStyle == "solid") {
                console.log("selbes Feld");
            }
            else if (document.getElementById("span" + _index).innerText == sequence[counter]) {
                document.getElementById("span" + _index).style.fontSize = cardheightwidth;
                document.getElementById("span" + _index).style.borderWidth = "thick";
                document.getElementById("span" + _index).style.borderColor = cardfontcolor;
                document.getElementById("span" + _index).style.borderStyle = "solid";
                counter++;
            }
            //if (document.getElementById("span" + _index).innerText != sequence[counter]) {
            else {
                //    counter = 0;
                //alert("wrong");
                hidecardsonly();
            }
        }
        if (counter == sequence.length) {
            clearInterval();
            setTimeout(() => {
                winner(_index);
            }, 10);
        }
        console.log(_index);
    }
    function winner(_index) {
        document.getElementById("span" + _index).style.fontSize = cardheightwidth;
        document.getElementById("span" + _index).style.borderWidth = "thick";
        document.getElementById("span" + _index).style.borderColor = cardfontcolor;
        document.getElementById("span" + _index).style.borderStyle = "solid";
        window.location.reload();
        alert("you win");
    }
    function timefortimer(_event) {
        let time = document.querySelector("#time");
        //console.log(time.value);
        timevar = Number(time.value);
        console.log(timevar);
    }
    function setatributes() {
        showcase.setAttribute("style", "color:" + cardfontcolor + "; background:" + cardcolor + "; height:" + cardheightwidth + "; width:" + cardheightwidth + "; font-Family:" + cardfont + "; display: inline-block; margin: 5px; text-align: center; line-height: 1; font-size: " + cardheightwidth + "; border-radius: 20%; vertical-align: middle");
        document.getElementById("settings").prepend(showcase);
        showcase.setAttribute("id", "showcase");
        showcase.innerHTML = "M";
    }
    function Load(_event) {
        let codeword = document.querySelector("#codename");
        let codeword2 = codeword.value.replace(/ /gi, "_");
        sequence = codeword2.split("");
        console.log("hat geklapt");
        console.log("hat geklapt");
        document.getElementById("settings").style.display = "none";
        startgame();
    }
    function ChangeSize(_event) {
        console.log(_event.target.value);
        cardheightwidth = _event.target.value + "px";
        setatributes();
    }
    function changebackground(_event) {
        console.log(_event.target.value);
        document.body.style.backgroundColor = _event.target.value;
        setatributes();
    }
    function changefont(_event) {
        console.log(_event.target.value);
        cardfont = _event.target.value;
        console.log(cardfont);
        setatributes();
    }
    function changefontcolor(_event) {
        cardfontcolor = _event.target.value;
        setatributes();
    }
    function changecardcolor(_event) {
        console.log(_event.target.value);
        cardcolor = _event.target.value;
        setatributes();
    }
    function startgame() {
        console.log("spiel startet");
        shuffledword = sequence.slice(); //kopiere das wort durch und schreib es in das Array shuffle_word
        shuffledword.sort(() => Math.random() - 0.5); //vermische das Array     
        console.log(sequence);
        console.log(shuffledword);
        let game = document.createElement("div"); //erstelle ein spielfeld
        document.body.appendChild(game); //.
        game.setAttribute("id", "game"); //.
        for (let i = 0; i <= sequence.length - 1; i++) { //for loop für spielfeld in Array länge
            let span = document.createElement("span"); //erzeuge neues span element
            game.appendChild(span); //verschachtle das das span element in das spielfeld
            span.classList.add("card"); //gebe vergebe die klasse card
            span.setAttribute("id", "span" + i); //erzeuge eine eine id für die unterschiedlichen Felder und vergebe ihr unten die passenden Atribute
            span.setAttribute("style", "color:" + cardfontcolor + "; background:" + cardcolor + "; height:" + cardheightwidth + "; width:" + cardheightwidth + "; font-Family:" + cardfont + "; display: inline-block; margin: 5px; text-align: center; line-height: 1; font-size: " + cardheightwidth + "; border-radius: 20%; vertical-align: middle");
            span.innerHTML = shuffledword[i]; //schreibe noch in das Atribut den Namen
        }
        setatributes(); //schreib nochmal die eingestelten Atribute in das span
        setTimeout(hidecards, sequence.length * 1000); //warte Pro buchstaben des Wortes 1s und springe dann in die hide funktion
    }
    function hidecards() {
        for (let i = 0; i <= sequence.length - 1; i++) { //forloop zum erneut durch die spans durch zu gehen
            let ausgewaehlte = document.querySelector("span#span" + i + ".card"); //geh nach der erstellten id durch
            //console.log(ausgewaehlte);
            ausgewaehlte.style.fontSize = "0px"; //verstecke die beschriftung in dem sie auf 0px gesetzt wird
        }
        let clock = document.createElement("p"); //erzeuge neues p element
        document.getElementById("game").prepend(clock); //verschachtle das das span element in das spielfeld
        clock.setAttribute("id", "clock"); //erzeuge eine eine id für die unterschiedlichen Felder und vergebe ihr unten die passenden Atribute
        document.getElementById("clock").innerText = timevar.toString() + "s";
        setInterval(UpdateTime, 1000);
        let card = document.querySelectorAll("span.card");
        for (let index = 0; index < card.length; index++) {
            selection = index;
            card[index].addEventListener("click", function () {
                turncard(index);
            }, false);
        }
    }
    function hidecardsonly() {
        for (let i = 0; i <= sequence.length - 1; i++) { //forloop zum erneut durch die spans durch zu gehen
            let ausgewaehlte = document.querySelector("span#span" + i + ".card"); //geh nach der erstellten id durch
            //console.log(ausgewaehlte);
            ausgewaehlte.style.fontSize = "0px"; //verstecke die beschriftung in dem sie auf 0px gesetzt wird
            counter = 0;
            document.getElementById("span" + i).style.borderStyle = "none";
        }
    }
    function UpdateTime() {
        if (timevar == 0) {
            window.location.reload();
            alert("you lost");
        }
        else {
            timevar--;
            document.getElementById("clock").innerText = timevar.toString() + "s";
        }
    }
})(memory || (memory = {}));
//let codeword: string = prompt("Please enter your name", "EIA-2-stinkt");
//let chars: string[] = codeword.split("");
//console.log(chars);
