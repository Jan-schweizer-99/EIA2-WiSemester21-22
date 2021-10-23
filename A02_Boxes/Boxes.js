var Boxes;
(function (Boxes) {
    var n = 5;
    var color;
    var x = 0;
    var y = 0;
    window.addEventListener("load", function () {
        for (var i = 0; i < n; i++) { //n=5 fahre die funktion 6 mal durch
            y += (i == 2) ? 20 : 50; //wenn i größer als 2 -->evt vergessen als 20 und 50 
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
                    continue; //LUL was zur hölle ist das für ein case, das ist das unnötigste was ich jemals gesehen hab
                default:
                    color = "#0000ff"; //Blau
            }
            for (var _i = 0, _a = ["big", "medium", "small"]; _i < _a.length; _i++) { //
                var size = _a[_i];
                createBox(color, x, y, size);
                if (i == 4)
                    break;
            }
        }
    });
    function createBox(_color, _x, _y, _size) {
        var div = document.createElement("div");
        document.body.appendChild(div);
        div.classList.add(_size);
        div.style.backgroundColor = _color; //erstze farbe
        div.style.left = _x + "px"; //verkette neues x mit px
        div.style.top = _y + "px"; //verkette neues y mit px 
    }
})(Boxes || (Boxes = {}));
//# sourceMappingURL=Boxes.js.map