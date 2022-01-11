"use strict";
var A08_McdonaldsFarm_Heritage;
(function (A08_McdonaldsFarm_Heritage) {
    let day = 0;
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        //let cow: Animal = new Animal("Kuh");
        //let chicken: Animal = new Animal("Huhn");
        //let dog: Dog = new Dog();
        //let bull: Animal = new Animal("Bulle");
        //let pig: Animal = new Animal("Schwein");
        // let nextDay: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#nextDay");
        document.getElementById("Day").innerText = "TAG:" + day.toString();
        //document.getElementById("cowHeading").innerHTML = cow.getHeading();
        //document.getElementById("cowlyrics").innerHTML = cow.getPicture() + cow.getSongLyrics();
        //document.getElementById("chickenHeading").innerHTML = chicken.getHeading();
        //document.getElementById("chickenlyrics").innerHTML = chicken.getPicture() + chicken.getSongLyrics();
        // document.getElementById("dogHeading").innerHTML = dog.getHeading();
        //document.getElementById("doglyrics").innerHTML = dog.getPicture() + dog.getLyrics();
        //document.getElementById("bullHeading").innerHTML = bull.getHeading();
        //document.getElementById("bulllyrics").innerHTML = bull.getPicture() + bull.getSongLyrics();
        //document.getElementById("pigHeading").innerHTML = pig.getHeading();
        //document.getElementById("piglyrics").innerHTML = pig.getPicture() + pig.getSongLyrics();
        //     nextDay.addEventListener (
        //         "click", 
        //         function(): void {           // anonyme Funktion
        //             Load(cow, chicken, dog, bull, pig);  
        //         }, 
        //         false
        //      );
        // }
        // function Load(_cow: Animal, _chicken: Animal, _dog: Animal, _bull: Animal, _pig: Animal): void {
        //     _cow.eat();
        //     _chicken.eat();
        //     _dog.eat();
        //     _bull.eat();
        //     _pig.eat();
        //     day++;
        //     document.getElementById("Day").innerHTML = "TAG:" + day.toString();
        //     document.getElementById("cowHeading").innerHTML = _cow.setNewHeading();
        //     document.getElementById("chickenHeading").innerHTML = _chicken.setNewHeading();
        //     document.getElementById("dogHeading").innerHTML = _dog.setNewHeading();
        //     document.getElementById("bullHeading").innerHTML = _bull.setNewHeading();
        //     document.getElementById("pigHeading").innerHTML = _pig.setNewHeading();
        //     if (_cow.foodAmount < 0) {
        //         document.getElementById("cowHeading").style.display = "none";
        //         document.getElementById("cowlyrics").style.display = "none";
        //     }
        //     if (_chicken.foodAmount < 0) {
        //         document.getElementById("chickenHeading").style.display = "none";
        //         document.getElementById("chickenlyrics").style.display = "none";
        //     }
        //     if (_dog.foodAmount < 0) {
        //         document.getElementById("dogHeading").style.display = "none";
        //         document.getElementById("doglyrics").style.display = "none";
        //     }
        //     if (_bull.foodAmount < 0) {
        //         document.getElementById("bullHeading").style.display = "none";
        //         document.getElementById("bulllyrics").style.display = "none";
        //     }
        //     if (_pig.foodAmount < 0) {
        //         document.getElementById("pigHeading").style.display = "none";
        //         document.getElementById("piglyrics").style.display = "none";
        //     }
        //     return;
    }
})(A08_McdonaldsFarm_Heritage || (A08_McdonaldsFarm_Heritage = {}));
var A08_McdonaldsFarm_Heritage;
(function (A08_McdonaldsFarm_Heritage) {
    class Lyrics {
        animal;
        songlyrics;
        heading;
        song = ["Old MacDonalds Kanibalen Farm, EI A, EIA, EI,<br> und auf der Farm da gibt\'s \' ", " EI A, EIA, EI.<br> Mit \'nem ", " hier und \'nem ", " da,<br>hier ein ", ", da ein ", ", überall ein ", ",<br>Old MacDonalds Kanibalen Farm, EI A, EIA, EI."];
        headingSentence = [" namens ", " hat heute noch "];
        constructor(_animal, _otherGrammar, _item, _sound, _name, _foodamount, _food) {
            _animal = this.animal;
            this.setSongLyrics(_animal, _otherGrammar, _item, _food, _sound);
            this.setHeading(_item, _name, _foodamount, _food);
        }
        getSongLyrics() {
            return this.songlyrics;
        }
        getHeading() {
            return this.heading;
        }
        setHeading(_item, _name, _foodamout, _food) {
            this.heading = _item + " " + this.animal + " " + this.headingSentence[0] + _name + this.headingSentence[1] + " " + _foodamout + " " + _food;
        }
        setSongLyrics(_animal, _otherGrammar, _item, _food, _sound) {
            this.songlyrics = this.song[0] + _otherGrammar + this.animal + this.song[1] + _sound + "-" + _sound + this.song[2] + _sound + "-" + _sound + this.song[3] + _sound + this.song[4] + _sound + this.song[5] + _sound + "-" + _sound + this.song[6];
        }
    }
    A08_McdonaldsFarm_Heritage.Lyrics = Lyrics;
})(A08_McdonaldsFarm_Heritage || (A08_McdonaldsFarm_Heritage = {}));
var A08_McdonaldsFarm_Heritage;
(function (A08_McdonaldsFarm_Heritage) {
    class Animal {
        foodAmount;
        animal; //string klassen
        //animal: string;
        name;
        //private food: string;
        //private sound: string;
        //private index: number;
        //private songlyrics: string;
        //private heading: string;
        //picture: string;
        //private headingSentence: string[] = [" namens " , " hat heute noch "];
        //private otherGrammar: string[] = ["\'ne ", " ein " , " ein " , " ein ", " ein "];
        //private item: string[] = ["Die ", "Das ", "Der ", "Der ", "Die "];
        //private song: string[] = ["Old MacDonalds Kanibalen Farm, EI A, EIA, EI,<br> und auf der Farm da gibt\'s \' ", " EI A, EIA, EI.<br> Mit \'nem ", " hier und \'nem ", " da,<br>hier ein ", ", da ein ", ", überall ein ", ",<br>Old MacDonalds Kanibalen Farm, EI A, EIA, EI."];
        nameTemplate = ["Berta", "Günter", "Fred", "Maik", "Manfred"];
        //private animalTemplate: string[] = ["Kuh", "Huhn", "Hund", "Bulle", "Schwein"];
        //private foodTemplate: string[] = ["Rindersteaks", "Chickenwings", "Welpen", "Bullensteaks", "Schweinesteaks"];
        //private soundTemplate: string[] = ["Muh", "put", "wuff", "schnauf", "oink"];
        constructor() {
            //this.set(_animal);
            //this.setFood();
            this.setName();
            //this.setSound();
            // this.setFoodAmount();
            // //this.setHeading();
            // //this.setpicture();
            // this.eat();
        }
        // eat(): void {
        //     //return this.foodAmount--;
        //     if (this.food == "Rindersteaks") {
        //         this.foodAmount = this.foodAmount - Math.floor(Math.random() * 4);       //wie gesagt, er wusste nicht wie viele Tiere er noch hatte
        //     }
        //     if (this.food == "Chickenwings") {
        //         this.foodAmount = this.foodAmount - Math.floor(Math.random() * 9);
        //     }
        //     if (this.food == "Welpen") {
        //         this.foodAmount--;
        //     }
        //     if (this.food == "Bullensteaks") {
        //         this.foodAmount = this.foodAmount - Math.floor(Math.random() * 4);
        //     }
        //     if (this.food == "Schweinesteaks") {
        //         this.foodAmount = this.foodAmount - Math.floor(Math.random() * 4);
        //     }
        // }
        // private set(_animal: string): void {
        //     for (let i: number = 0; i < this.animalTemplate.length; i++) {
        //         if (_animal == this.animalTemplate[i]) {
        //             this.animal = _animal;
        //             this.index = i;
        //         }
        //     }
        // }
        // private setFood(): void {
        //     this.food = this.foodTemplate[this.index];
        // }
        // private setSound(): void {
        //     this.sound = this.soundTemplate[this.index];
        // }
        setName() {
            this.name = this.nameTemplate[Math.floor(Math.random() * 5) + 0];
        }
    }
    A08_McdonaldsFarm_Heritage.Animal = Animal;
})(A08_McdonaldsFarm_Heritage || (A08_McdonaldsFarm_Heritage = {}));
var A08_McdonaldsFarm_Heritage;
(function (A08_McdonaldsFarm_Heritage) {
    class Bull extends FarmAnimals {
    }
    A08_McdonaldsFarm_Heritage.Bull = Bull;
})(A08_McdonaldsFarm_Heritage || (A08_McdonaldsFarm_Heritage = {}));
var A08_McdonaldsFarm_Heritage;
(function (A08_McdonaldsFarm_Heritage) {
    class Chicken extends A08_McdonaldsFarm_Heritage.Bird {
    }
    A08_McdonaldsFarm_Heritage.Chicken = Chicken;
})(A08_McdonaldsFarm_Heritage || (A08_McdonaldsFarm_Heritage = {}));
var A08_McdonaldsFarm_Heritage;
(function (A08_McdonaldsFarm_Heritage) {
    class Cow extends FarmAnimals {
    }
    A08_McdonaldsFarm_Heritage.Cow = Cow;
})(A08_McdonaldsFarm_Heritage || (A08_McdonaldsFarm_Heritage = {}));
var A08_McdonaldsFarm_Heritage;
(function (A08_McdonaldsFarm_Heritage) {
    class Pig extends FarmAnimals {
    }
    A08_McdonaldsFarm_Heritage.Pig = Pig;
})(A08_McdonaldsFarm_Heritage || (A08_McdonaldsFarm_Heritage = {}));
var A08_McdonaldsFarm_Heritage;
(function (A08_McdonaldsFarm_Heritage) {
    class Bird extends A08_McdonaldsFarm_Heritage.Animal {
    }
    A08_McdonaldsFarm_Heritage.Bird = Bird;
})(A08_McdonaldsFarm_Heritage || (A08_McdonaldsFarm_Heritage = {}));
var A08_McdonaldsFarm_Heritage;
(function (A08_McdonaldsFarm_Heritage) {
    class FarmAnimal extends A08_McdonaldsFarm_Heritage.Animal {
    }
    A08_McdonaldsFarm_Heritage.FarmAnimal = FarmAnimal;
})(A08_McdonaldsFarm_Heritage || (A08_McdonaldsFarm_Heritage = {}));
var A08_McdonaldsFarm_Heritage;
(function (A08_McdonaldsFarm_Heritage) {
    class Pet extends A08_McdonaldsFarm_Heritage.Animal {
        name = super.name;
        classspecial = "liebt Menschen";
        constructor() {
            super();
        }
    }
    A08_McdonaldsFarm_Heritage.Pet = Pet;
    class Dog extends Pet {
        //all parameters of DOG
        animal = "Hund";
        otherGrammar = " ein ";
        item = "Der";
        food = "Welpen";
        sound = "wuff";
        picture = "<img src=img/" + this.animal + ".svg heigth=50% width=50%><br>";
        foodAmount = Math.floor(Math.random() * 5) + 1;
        //create Lyrics of DOG
        lyricsHeading = new A08_McdonaldsFarm_Heritage.Lyrics(this.animal, this.otherGrammar, this.item, this.sound, super.name, this.foodAmount, this.food);
        heading = this.lyricsHeading.getHeading();
        lyric = this.lyricsHeading.getSongLyrics();
        //special of DOG
        animalSpecial = "hat einen Knochen";
        constructor() {
            super();
            //this.heading = this.lyricsHeading.getHeading();
            //this.lyric = this.lyricsHeading.getSongLyrics();
        }
        //get function
        getAnimal() {
            return this.animal;
        }
        getFood() {
            return this.food;
        }
        getFoodAmount() {
            return this.foodAmount;
        }
        getSound() {
            return this.sound;
        }
        getName() {
            return this.name;
        }
        getHeading() {
            return this.heading;
        }
        getPicture() {
            return this.picture;
        }
        getLyrics() {
            return this.lyric;
        }
        eat() {
            this.foodAmount--; //aendern
            this.lyricsHeading = new A08_McdonaldsFarm_Heritage.Lyrics(this.animal, this.otherGrammar, this.item, this.sound, super.name, this.foodAmount, this.food);
        }
    }
    A08_McdonaldsFarm_Heritage.Dog = Dog;
})(A08_McdonaldsFarm_Heritage || (A08_McdonaldsFarm_Heritage = {}));
//# sourceMappingURL=Build.js.map