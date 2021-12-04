var Mcdonalds_Farm;
(function (Mcdonalds_Farm) {
    var Animal = /** @class */ (function () {
        function Animal(_animal) {
            this.headingSentence = [" namens ", " hat heute noch "];
            this.otherGrammar = ["\'ne ", " ein ", " ein ", " ein ", " ein "];
            this.item = ["Die ", "Das ", "Der ", "Der ", "Die "];
            this.song = ["Old MacDonalds Kanibalen Farm, EI A, EIA, EI,<br> und auf der Farm da gibt\'s \' ", " EI A, EIA, EI.<br> Mit \'nem ", " hier und \'nem ", " da,<br>hier ein ", ", da ein ", ", überall ein ", ",<br>Old MacDonalds Kanibalen Farm, EI A, EIA, EI."];
            this.nameTemplate = ["Berta", "Günter", "Fred", "Maik", "Manfred"];
            this.animalTemplate = ["Kuh", "Huhn", "Hund", "Bulle", "Schwein"];
            this.foodTemplate = ["Rindersteaks", "Chickenwings", "Welpen", "Bullensteaks", "Schweinesteaks"];
            this.soundTemplate = ["Muh", "put", "wuff", "schnauf", "oink"];
            this.set(_animal);
            this.setFood();
            this.setName();
            this.setSound();
            this.setFoodAmount();
            this.setSongLyrics();
            this.setHeading();
            this.setpicture();
            this.eat();
        }
        Animal.prototype.eat = function () {
            //return this.foodAmount--;
            if (this.food == "Rindersteaks") {
                this.foodAmount = this.foodAmount - Math.floor(Math.random() * 4); //wie gesagt, er wusste nicht wie viele Tiere er noch hatte
            }
            if (this.food == "Chickenwings") {
                this.foodAmount = this.foodAmount - Math.floor(Math.random() * 9);
            }
            if (this.food == "Welpen") {
                this.foodAmount--;
            }
            if (this.food == "Bullensteaks") {
                this.foodAmount = this.foodAmount - Math.floor(Math.random() * 4);
            }
            if (this.food == "Schweinesteaks") {
                this.foodAmount = this.foodAmount - Math.floor(Math.random() * 4);
            }
        };
        Animal.prototype.getAnimal = function () {
            return this.animal;
        };
        Animal.prototype.getFood = function () {
            return this.food;
        };
        Animal.prototype.getFoodAmount = function () {
            return this.foodAmount;
        };
        Animal.prototype.getSound = function () {
            return this.sound;
        };
        Animal.prototype.getName = function () {
            return this.name;
        };
        Animal.prototype.getSongLyrics = function () {
            return this.songlyrics;
        };
        Animal.prototype.getHeading = function () {
            return this.heading;
        };
        Animal.prototype.getPicture = function () {
            return this.picture;
        };
        Animal.prototype.setNewHeading = function () {
            return this.heading = this.item[this.index] + " " + this.animal + " " + this.headingSentence[0] + this.name + this.headingSentence[1] + " " + this.foodAmount + " " + this.food;
        };
        Animal.prototype.set = function (_animal) {
            for (var i = 0; i < this.animalTemplate.length; i++) {
                if (_animal == this.animalTemplate[i]) {
                    this.animal = _animal;
                    this.index = i;
                }
            }
        };
        Animal.prototype.setFoodAmount = function () {
            if (this.food == "Rindersteaks") {
                this.foodAmount = Math.floor(Math.random() * 10) + 1; //wie gesagt, er wusste nicht wie viele Tiere er noch hatte
            }
            if (this.food == "Chickenwings") {
                this.foodAmount = Math.floor(Math.random() * 50) + 1;
            }
            if (this.food == "Welpen") {
                this.foodAmount = Math.floor(Math.random() * 5) + 1;
            }
            if (this.food == "Bullensteaks") {
                this.foodAmount = Math.floor(Math.random() * 10) + 1;
            }
            if (this.food == "Schweinesteaks") {
                this.foodAmount = Math.floor(Math.random() * 15) + 1;
            }
        };
        Animal.prototype.setFood = function () {
            this.food = this.foodTemplate[this.index];
        };
        Animal.prototype.setSound = function () {
            this.sound = this.soundTemplate[this.index];
        };
        Animal.prototype.setName = function () {
            this.name = this.nameTemplate[Math.floor(Math.random() * 5) + 0];
        };
        Animal.prototype.setSongLyrics = function () {
            this.songlyrics = this.song[0] + this.otherGrammar[this.index] + this.animal + this.song[1] + this.sound + "-" + this.sound + this.song[2] + this.sound + "-" + this.sound + this.song[3] + this.sound + this.song[4] + this.sound + this.song[5] + this.sound + "-" + this.sound + this.song[6];
        };
        Animal.prototype.setpicture = function () {
            this.picture = "<img src=img/" + this.animal + ".svg heigth=50% width=50%><br>";
        };
        Animal.prototype.setHeading = function () {
            this.heading = this.item[this.index] + " " + this.animal + " " + this.headingSentence[0] + this.name + this.headingSentence[1] + " " + this.foodAmount + " " + this.food;
        };
        return Animal;
    }());
    Mcdonalds_Farm.Animal = Animal;
})(Mcdonalds_Farm || (Mcdonalds_Farm = {}));
//# sourceMappingURL=animal.js.map