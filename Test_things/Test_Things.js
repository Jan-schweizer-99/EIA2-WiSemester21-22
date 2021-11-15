var random_test;
(function (random_test) {
    var element = document.getElementsByClassName("test")[0];
    window.addEventListener("load", handleLoad); //starte die handleload funktion
    var time = 5;
    function handleLoad(_event) {
        var buttonstart = document.querySelector("button#starttimer");
        buttonstart.addEventListener("click", startTimer);
    }
    function startTimer() {
        setInterval(updatetimer, 1000);
    }
    function updatetimer() {
        if (time == 0) {
            clearInterval();
            alert("you lost");
            window.location.reload();
        }
        else {
            time--;
            document.getElementById("time").innerText = time.toString();
        }
    }
    function myFunction(cardnuber) {
        console.log(cardnuber);
    }
})(random_test || (random_test = {}));
//# sourceMappingURL=Test_Things.js.map