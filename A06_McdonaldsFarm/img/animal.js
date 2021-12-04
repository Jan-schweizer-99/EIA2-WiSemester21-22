var Mcdonalds_Farm;
(function (Mcdonalds_Farm) {
    var Animal = /** @class */ (function () {
        function Animal(_animal, _vector) {
            this.nameTemplate = ["Berta", "Günter", "Fred", "Maik", "Manfred"];
            this.animalTemplate = ["Kuh", "Hünchen", "Hund", "Bulle", "Schwein"];
            this.foodTemplate = ["Rindersteaks", "Chickenwings", "Katzenfutter", "Pferdesteaks", "Schweinesteaks"];
            this.soundTemplate = ["Muh", "put", "wuff", "schnauf", "oink"];
            this.vector = _vector;
            this.set(_animal);
            this.setFood();
            this.setName();
            this.setSound();
            this.setFoodAmount();
        }
        Animal.prototype.getAnimal = function () {
            return this.animal;
        };
        Animal.prototype.getFood = function () {
            return this.food;
        };
        Animal.prototype.getFoodAmount = function () {
            return this.foodAmount;
        };
        Animal.prototype.getVector = function () {
            return this.vector;
        };
        Animal.prototype.getSound = function () {
            return this.vector;
        };
        Animal.prototype.getName = function () {
            return this.name;
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
                this.foodAmount = Math.floor(Math.random() * 10) + 1;
            }
            if (this.food == "Chickenwings") {
                this.foodAmount = Math.floor(Math.random() * 50) + 1;
            }
            if (this.food == "Katzenfutter") {
                this.foodAmount = Math.floor(Math.random() * 100) + 1;
            }
            if (this.food == "Pferdesteaks") {
                this.foodAmount = Math.floor(Math.random() * 10) + 1;
            }
            if (this.food == "Schweinesteaks") {
                this.foodAmount = Math.floor(Math.random() * 10) + 1;
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
        return Animal;
    }());
    Mcdonalds_Farm.Animal = Animal;
})(Mcdonalds_Farm || (Mcdonalds_Farm = {}));
//# sourceMappingURL=animal.js.map