namespace EventInspector {

    let body: HTMLBodyElement;  //definiere den Body HTML-ein body Element
    let div0: HTMLDivElement;   //definiere div0 als HTML-DIV Element
    let div1: HTMLDivElement;   //definiere div1 als HTML-DIV Element

    body = document.querySelector("body");      //weisse dem body die Var Body zu
    div0 = document.querySelector("div0");      //weisse div0 die Var div0 zu
    div1 = document.querySelector("div1");      //weisse div1 die Variable div1 zu

    window.addEventListener("load", handleLoad) //starte die handleload funktion

    function handleLoad(_event: Event): void {
        document.addEventListener("mousemove", setInfobox); //oeffne bei der Mausbewegung irgendwo im auf der Seite die handlemousemove funktion

        document.addEventListener("click", logInfo); //oeffne bei einem Maus(click) event irgendwo auf der Seite die handleClick Funktion
        document.addEventListener("keyup", logInfo); //oeffne bei einem Tasten(click) event die Funktion handlekeyup

        body.addEventListener("click", logInfo); //oeffne bei einem click die Klick funktion
        body.addEventListener("keyup", logInfo); //oeffne bei der keyup die handlekeyup funktion
        div0.addEventListener("click", logInfo); //oeffne bei einem click die Klick funktion
        div0.addEventListener("keyup", logInfo); //oeffne bei der keyup die handlekeyup funktion
        div1.addEventListener("click", logInfo); //oeffne bei einem click die Klick funktion
        div1.addEventListener("keyup", logInfo); //oeffne bei der keyup die handlekeyup funktion
    }
    function setInfobox(_event: MouseEvent) {

        let x: number = _event.clientX;         //deklariere die X position mit der eventfunktion der Maus
        let y: number = _event.clientY;         //deklariere die y position mit der eventfunktion der Maus

        let position: HTMLElement = <HTMLElement>document.querySelector("span");  //deklariere die position des spans
        let target: HTMLElement = <HTMLElement>_event.target; //deklariere das Target (div0,div1,html oder htmlheader)

        position.innerHTML = "Event-target:" + "<br>" + target + "" + "<br>" + "x=" + x + " " + "px" + " " + "<br>" + "y=" + y + " " + "px"; //Textausgabe des span

        position.style.left = (_event.clientX + 5) + "px";  //aendere die Position des span (x) neben der Maus
        position.style.top = (_event.clientY + 10) + "px";  //aendere die position des span (y) neben der Maus

    }
    function logInfo(_event: Event): void {
        console.log(_event.type)              //event typ auswaehlen click oder keyup
        console.log(_event.target)          // ziel anzeigen
        console.log(_event.currentTarget)   //aktuell ausgewähltes ziel anzeigen
        console.log(_event)                 //ganzes event anzeigen in konsole
    }
}