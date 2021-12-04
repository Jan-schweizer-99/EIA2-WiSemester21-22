var Mcdonalds_Farm;
(function (Mcdonalds_Farm) {
    var day = 0;
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        var cow = new Mcdonalds_Farm.Animal("Kuh");
        var chicken = new Mcdonalds_Farm.Animal("Huhn");
        var dog = new Mcdonalds_Farm.Animal("Hund");
        var bull = new Mcdonalds_Farm.Animal("Bulle");
        var pig = new Mcdonalds_Farm.Animal("Schwein");
        var nextDay = document.querySelector("#nextDay");
        document.getElementById("Day").innerHTML = "TAG:" + day.toString();
        document.getElementById("cowHeading").innerHTML = cow.getHeading();
        document.getElementById("cowlyrics").innerHTML = cow.getPicture() + cow.getSongLyrics();
        document.getElementById("chickenHeading").innerHTML = chicken.getHeading();
        document.getElementById("chickenlyrics").innerHTML = chicken.getPicture() + chicken.getSongLyrics();
        document.getElementById("dogHeading").innerHTML = dog.getHeading();
        document.getElementById("doglyrics").innerHTML = dog.getPicture() + dog.getSongLyrics();
        document.getElementById("bullHeading").innerHTML = bull.getHeading();
        document.getElementById("bulllyrics").innerHTML = bull.getPicture() + bull.getSongLyrics();
        document.getElementById("pigHeading").innerHTML = pig.getHeading();
        document.getElementById("piglyrics").innerHTML = pig.getPicture() + pig.getSongLyrics();
        nextDay.addEventListener("click", function () {
            Load(cow, chicken, dog, bull, pig);
        }, false);
    }
    function Load(_cow, _chicken, _dog, _bull, _pig) {
        _cow.eat();
        _chicken.eat();
        _dog.eat();
        _bull.eat();
        _pig.eat();
        day++;
        document.getElementById("Day").innerHTML = "TAG:" + day.toString();
        document.getElementById("cowHeading").innerHTML = _cow.setNewHeading();
        document.getElementById("chickenHeading").innerHTML = _chicken.setNewHeading();
        document.getElementById("dogHeading").innerHTML = _dog.setNewHeading();
        document.getElementById("bullHeading").innerHTML = _bull.setNewHeading();
        document.getElementById("pigHeading").innerHTML = _pig.setNewHeading();
        if (_cow.foodAmount < 0) {
            document.getElementById("cowHeading").style.display = "none";
            document.getElementById("cowlyrics").style.display = "none";
        }
        if (_chicken.foodAmount < 0) {
            document.getElementById("chickenHeading").style.display = "none";
            document.getElementById("chickenlyrics").style.display = "none";
        }
        if (_dog.foodAmount < 0) {
            document.getElementById("dogHeading").style.display = "none";
            document.getElementById("doglyrics").style.display = "none";
        }
        if (_bull.foodAmount < 0) {
            document.getElementById("bullHeading").style.display = "none";
            document.getElementById("bulllyrics").style.display = "none";
        }
        if (_pig.foodAmount < 0) {
            document.getElementById("pigHeading").style.display = "none";
            document.getElementById("piglyrics").style.display = "none";
        }
        return;
    }
})(Mcdonalds_Farm || (Mcdonalds_Farm = {}));
//# sourceMappingURL=main.js.map