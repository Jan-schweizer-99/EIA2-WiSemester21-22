var random_test;
(function (random_test) {
    window.addEventListener("load", handleLoad); //starte die handleload funktion
    var sequence; //eingegebenes Wort
    var shuffledword; //durchgemischtes Wort
    var cardcolor = "#ff0000"; //variable für kartenfarbe
    var cardfont = "arial"; //variable für ausgewählte schrift
    var cardheightwidth = "160px"; //variable für schriftgroeße kartenhoehe und breite
    var cardfontcolor = "#ffffff"; //variable für kartenfarbe
    var time = document.querySelector("#time");
    var timevar = 20;
    var selection;
    var showcase = document.createElement("span");
    function handleLoad(_event) {
        var slider = document.querySelector("input#amount"); //kartengroese
        var backgroundcolor = document.querySelector("input#backgroundColor"); //hintergrundfarbe
        var font = document.querySelector("select#font"); //schriftart
        var fontcardcolor = document.querySelector("input#fontcolor"); //
        var cardcolor = document.querySelector("input#cards");
        var time = document.querySelector("input#time");
        var apply = document.querySelector("#start");
        var card = document.querySelector("span.card");
        for (var index = 0; index <= sequence.length; index++) {
            if (document.querySelector("span#span" + index)) {
                selection = index;
                card.addEventListener("click", turncard);
            }
        }
        setatributes(); //atribute auf null setzen
        slider.addEventListener("input", ChangeSize); //slider event listener
        backgroundcolor.addEventListener("input", changebackground); //backgroundcolor event listener
        font.addEventListener("input", changefont); //change font listener
        apply.addEventListener("click", Load);
        cardcolor.addEventListener("input", changecardcolor);
        fontcardcolor.addEventListener("input", changefontcolor);
        time.addEventListener("input", timefortimer);
        var counter = 0; //runden counter
        //console.log(document.querySelector(".card").style);      //ausgabe der styles von showcase span     
    }
    function turncard(_event) {
        console.log("blablabla");
    }
    function timefortimer(_event) {
        var time = document.querySelector("#time");
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
        var codeword = document.querySelector("#codename");
        sequence = codeword.value.split("");
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
        var spanelement = document.querySelector("span");
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
        shuffledword.sort(function () { return Math.random() - 0.5; }); //vermische das Array     
        console.log(sequence);
        console.log(shuffledword);
        var game = document.createElement("div"); //erstelle ein spielfeld
        document.body.appendChild(game); //.
        game.setAttribute("id", "game"); //.
        for (var i = 0; i <= sequence.length - 1; i++) { //for loop für spielfeld in Array länge
            var span = document.createElement("span"); //erzeuge neues span element
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
        for (var i = 0; i <= sequence.length - 1; i++) { //forloop zum erneut durch die spans durch zu gehen
            var ausgewaehlte = document.querySelector("span#span" + i + ".card"); //geh nach der erstellten id durch
            //console.log(ausgewaehlte);
            ausgewaehlte.style.fontSize = "0px"; //verstecke die beschriftung in dem sie auf 0px gesetzt wird
        }
        var clock = document.createElement("p"); //erzeuge neues p element
        document.getElementById("game").prepend(clock); //verschachtle das das span element in das spielfeld
        clock.setAttribute("id", "clock"); //erzeuge eine eine id für die unterschiedlichen Felder und vergebe ihr unten die passenden Atribute
        document.getElementById("clock").innerText = timevar.toString() + "s";
        setInterval(UpdateTime, 1000);
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
})(random_test || (random_test = {}));
//let codeword: string = prompt("Please enter your name", "EIA-2-stinkt");
//let chars: string[] = codeword.split("");
//console.log(chars);
//# sourceMappingURL=memory.js.map