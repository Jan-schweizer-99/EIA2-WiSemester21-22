"use strict";
var Boxes;
(function (Boxes) {
    let n = 5;
    let color;
    let x = 0;
    let y = 0;
    window.addEventListener("load", function () {
        for (let i = 0; i < n; i++) { //n=5 fahre die funktion 5 mal durch
            y += (i == 2) ? 20 : 50; //wenn i = 2 -->evt vergessen als 20 und 50 
            x = (x + 170) % 400;
            switch (i) {
                case 0: //in falle I=0
                    color = "#ff0000"; //Rot
                    break; //springe aus der switch case raus
                case 1: //Debugger springt auch in die case 4 wenn der wert 1 ist
                case 4: //
                    color = "#00ff00"; //Grün
                    break; //springe aus der switch case raus 
                case 3: //Fall I=3
                    continue; //Debugger: springt wieder nach oben
                default: //Debugger: default wird aufgerufen wenn fall I = 2  
                    color = "#0000ff"; //Blau
            }
            for (let size of ["big", "medium", "small"]) { //
                createBox(color, x, y, size);
                if (i == 4)
                    break;
            }
        }
    });
    function createBox(_color, _x, _y, _size) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.classList.add(_size);
        div.style.backgroundColor = _color; //erstze farbe
        div.style.left = _x + "px"; //verkette neues x mit px
        div.style.top = _y + "px"; //verkette neues y mit px 
    }
})(Boxes || (Boxes = {}));
