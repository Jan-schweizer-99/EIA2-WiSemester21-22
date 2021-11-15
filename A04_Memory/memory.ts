namespace memory {
    window.addEventListener("load", handleLoad); //starte die handleload funktion

    let sequence: string[];                      //eingegebenes Wort
    let shuffledword: string[];                   //durchgemischtes Wort

    let cardcolor: string = "#ff0000";            //variable für kartenfarbe
    let cardfont: string = "arial";               //variable für ausgewählte schrift
    let cardheightwidth: string = "160px";        //variable für schriftgroeße kartenhoehe und breite
    let cardfontcolor: string = "#ffffff";      //variable für kartenfarbe
    let time: HTMLInputElement = <HTMLInputElement>document.querySelector("#time");
    let timevar: number = 20;
    let selection: number;

    let showcase: HTMLElement = document.createElement("span");

    function handleLoad(_event: Event): void {
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");                        //kartengroese
        let backgroundcolor: HTMLInputElement = <HTMLInputElement>document.querySelector("input#backgroundColor");      //hintergrundfarbe
        let font: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#font");                         //schriftart
        let fontcardcolor: HTMLInputElement = <HTMLInputElement>document.querySelector("input#fontcolor");              //
        let cardcolor: HTMLInputElement = <HTMLInputElement>document.querySelector("input#cards");
        let time: HTMLInputElement = <HTMLInputElement>document.querySelector("input#time");
        let apply: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#start");



        setatributes();                                              //atribute auf null setzen

        slider.addEventListener("input", ChangeSize);                //slider event listener
        backgroundcolor.addEventListener("input", changebackground); //backgroundcolor event listener
        font.addEventListener("input", changefont);                  //change font listener
        apply.addEventListener("click", Load);
        cardcolor.addEventListener("input", changecardcolor);
        fontcardcolor.addEventListener("input", changefontcolor);
        time.addEventListener("input", timefortimer);
        //card.addEventListener("click", turncard);

        let counter: number = 0;   //runden counter
        //console.log(document.querySelector(".card").style);      //ausgabe der styles von showcase span     
    }
    function turncard(): void {

        let card: NodeList = document.querySelectorAll("span.card");
        for (let index: number = 0; index < card.length; index++) {

        }
        console.log(card);
    }
    function turncard1(): void {

        console.log(selection);
        turncard();
    }
    function timefortimer(_event: Event): void {
        let time: HTMLInputElement = <HTMLInputElement>document.querySelector("#time");
        //console.log(time.value);
        timevar = Number(time.value);
        console.log(timevar);
    }
    function setatributes(): void {                                //setatributs setzt die Atribute auf standarteinstellungen  
        showcase.setAttribute("style", "color:" + cardfontcolor + "; background:" + cardcolor + "; height:" + cardheightwidth + "; width:" + cardheightwidth + "; font-Family:" + cardfont + "; display: inline-block; margin: 5px; text-align: center; line-height: 1; font-size: " + cardheightwidth + "; border-radius: 20%; vertical-align: middle");
        document.getElementById("settings").prepend(showcase);
        showcase.setAttribute("id", "showcase");
        showcase.innerHTML = "M";
    }
    function Load(_event: MouseEvent): void {
        let codeword: HTMLInputElement = <HTMLInputElement>document.querySelector("#codename");
        sequence = codeword.value.split("");
        console.log("hat geklapt");
        console.log("hat geklapt");
        document.getElementById("settings").style.display = "none";
        startgame();
    }
    function ChangeSize(_event: Event): void {
        console.log((<HTMLInputElement>_event.target).value);
        cardheightwidth = (<HTMLInputElement>_event.target).value + "px";
        setatributes();
    }

    function changebackground(_event: Event): void {
        console.log((<HTMLInputElement>_event.target).value);
        document.body.style.backgroundColor = (<HTMLInputElement>_event.target).value;
        setatributes();
    }
    function changefont(_event: Event): void {
        let spanelement: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
        console.log((<HTMLInputElement>_event.target).value);
        cardfont = (<HTMLInputElement>_event.target).value;
        console.log(cardfont);
        setatributes();

    }
    function changefontcolor(_event: Event): void {
        cardfontcolor = (<HTMLInputElement>_event.target).value;
        setatributes();
    }
    function changecardcolor(_event: Event): void {
        console.log((<HTMLInputElement>_event.target).value);
        cardcolor = (<HTMLInputElement>_event.target).value;
        setatributes();
    }
    function startgame(): void {                                    //Funktion start game

        console.log("spiel startet");
        shuffledword = sequence.slice();                            //kopiere das wort durch und schreib es in das Array shuffle_word
        shuffledword.sort(() => Math.random() - 0.5);               //vermische das Array     
        console.log(sequence);
        console.log(shuffledword);
        let game: HTMLElement = document.createElement("div");      //erstelle ein spielfeld
        document.body.appendChild(game);                            //.
        game.setAttribute("id", "game");                            //.
        for (let i: number = 0; i <= sequence.length - 1; i++) {    //for loop für spielfeld in Array länge
            let span: HTMLElement = document.createElement("span"); //erzeuge neues span element
            game.appendChild(span);                                 //verschachtle das das span element in das spielfeld
            span.classList.add("card");                             //gebe vergebe die klasse card
            span.setAttribute("id", "span" + i);                    //erzeuge eine eine id für die unterschiedlichen Felder und vergebe ihr unten die passenden Atribute
            span.setAttribute("style", "color:" + cardfontcolor + "; background:" + cardcolor + "; height:" + cardheightwidth + "; width:" + cardheightwidth + "; font-Family:" + cardfont + "; display: inline-block; margin: 5px; text-align: center; line-height: 1; font-size: " + cardheightwidth + "; border-radius: 20%; vertical-align: middle");
            span.innerHTML = shuffledword[i];                       //schreibe noch in das Atribut den Namen

        }
        setatributes();                                             //schreib nochmal die eingestelten Atribute in das span
        setTimeout(hidecards, sequence.length * 1000);              //warte Pro buchstaben des Wortes 1s und springe dann in die hide funktion
    }
    function hidecards(): void {                                    //Funktion hide cards
        for (let i: number = 0; i <= sequence.length - 1; i++) {    //forloop zum erneut durch die spans durch zu gehen
            let ausgewaehlte: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span#span" + i + ".card"); //geh nach der erstellten id durch
            //console.log(ausgewaehlte);
            ausgewaehlte.style.fontSize = "0px";                    //verstecke die beschriftung in dem sie auf 0px gesetzt wird
        }
        let clock: HTMLElement = document.createElement("p"); //erzeuge neues p element
        document.getElementById("game").prepend(clock);                                 //verschachtle das das span element in das spielfeld
        clock.setAttribute("id", "clock");                    //erzeuge eine eine id für die unterschiedlichen Felder und vergebe ihr unten die passenden Atribute
        document.getElementById("clock").innerText = timevar.toString() + "s";
        setInterval(UpdateTime, 1000);
        turncard();
    }
    function UpdateTime(): void {
        if (timevar == 0) {
            window.location.reload();
            alert("you lost");
        }
        else {
            timevar--;
            document.getElementById("clock").innerText = timevar.toString() + "s";
        }
    }


}

//let codeword: string = prompt("Please enter your name", "EIA-2-stinkt");
//let chars: string[] = codeword.split("");
//console.log(chars);