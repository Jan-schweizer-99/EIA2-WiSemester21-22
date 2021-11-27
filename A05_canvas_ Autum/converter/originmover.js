var oringmover;
(function (oringmover) {
    window.addEventListener("load", handleLoad); //starte die handleload funktion
    function handleLoad(_event) {
        var apply = document.querySelector("#start");
        apply.addEventListener("click", Load);
    }
    function Load() {
        var codeword = document.querySelector("#codename");
        //let codeword2: string = codeword.value.replace(/crc2.moveTo(/gi, "_");
        var codeword2 = codeword.innerText;
        var result = codeword2.replace(/dsdsaafsd\() /g, "<");
        console.log(result);
    }
})(oringmover || (oringmover = {}));
//# sourceMappingURL=originmover.js.map