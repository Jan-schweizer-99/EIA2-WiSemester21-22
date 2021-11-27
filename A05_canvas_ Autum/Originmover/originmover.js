var oringmover;
(function (oringmover) {
    window.addEventListener("load", handleLoad); //starte die handleload funktion
    var i;
    var result1;
    var moeglichkeiten = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-"); // Array for Beziercurve
    var bezirstring;
    function handleLoad(_event) {
        var apply = document.querySelector("#start");
        apply.addEventListener("click", Load);
        var code = document.createElement("div"); //erstelle ein spielfeld
        document.body.appendChild(code); //.
        code.setAttribute("id", "code"); //.
    }
    function Load(_event) {
        var codeword = document.querySelector("#codename");
        var codeword2 = codeword.value;
        //document.getElementById("code").innerText = codeword.value;
        splitarray(codeword2);
    }
    function splitarray(_codeword2) {
        var sequence = _codeword2.split(";");
        for (var index = 0; index < sequence.length; index++) {
            replace(sequence[index]);
            //console.log(sequence[index]);
            //document.getElementById("code").innerText += sequence[index] + ";"; 
        }
        document.getElementById("code").innerText = document.getElementById("code").innerText.replace("undefined", "");
    }
    function replace(_sequence) {
        var result;
        if (_sequence.substr(5, 11) === "crc2.lineTo") {
            result = _sequence.replace("To(", "To(_originX + ").replace(",", ", _originY + ");
            document.getElementById("code").innerText += result + ";";
        }
        if (_sequence.substr(5, 11) === "crc2.moveTo") {
            result = _sequence.replace("To(", "To(_originX + ").replace(",", " _originY + ");
            document.getElementById("code").innerText += result + ";";
        }
        if (_sequence.substr(5, 11) === "crc2.bezier") {
            var bezir = _sequence.split(",");
            for (var index = 0; index < bezir.length; index++) {
                bezir[index] = "," + bezir[index];
                replacebezir(bezir[index], index);
            }
            console.log(bezirstring);
            document.getElementById("code").innerText += bezirstring + ";";
            bezirstring = "";
            //document.getElementById("code").innerText += result;
        }
        function replacebezir(_bezir, _index) {
            // console.log(_bezir);
            var result2;
            if (_index == 0) {
                result2 = _bezir.replace("To(", "To(_originX + ").replace(",", "");
            }
            if (_index == 1) {
                result2 = _bezir.replace(",", ", _originY +");
            }
            if (_index == 2) {
                result2 = _bezir.replace(",", ", _originX +");
            }
            if (_index == 3) {
                result2 = _bezir.replace(",", ", _originY +");
            }
            if (_index == 4) {
                result2 = _bezir.replace(",", ", _originX +");
            }
            if (_index == 5) {
                result2 = _bezir.replace(",", ", _originY +");
            }
            bezirstring += result2;
            //let result: string = _sequence.replace("To(", "To(_originX + ");
        }
        //document.getElementById("code").innerText += _sequence;
        //console.log(_sequence.substr(5, 11));
        //document.getElementById("code").innerText += result;
    }
})(oringmover || (oringmover = {}));
//# sourceMappingURL=originmover.js.map