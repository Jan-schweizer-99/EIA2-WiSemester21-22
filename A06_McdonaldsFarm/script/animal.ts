namespace Mcdonalds_Farm {
    export class Animal {
        
     foodAmount: number;

        private animal: string; //string klassen
        private food: string;
        private name: string;
        private sound: string;
        private index: number;
        private songlyrics: string;
        private heading: string;
        private picture: string;
        
        private headingSentence: string[] = [" namens " , " hat heute noch "];
        private otherGrammar: string[] = ["\'ne ", " ein " , " ein " , " ein ", " ein "];
        private item: string[] = ["Die ", "Das ", "Der ", "Der ", "Die "];
        private song: string[] = ["Old MacDonalds Kanibalen Farm, EI A, EIA, EI,<br> und auf der Farm da gibt\'s \' ", " EI A, EIA, EI.<br> Mit \'nem ", " hier und \'nem ", " da,<br>hier ein ", ", da ein ", ", überall ein ", ",<br>Old MacDonalds Kanibalen Farm, EI A, EIA, EI."];
        private nameTemplate: string [] = ["Berta", "Günter", "Fred", "Maik", "Manfred"]; 
        private animalTemplate: string[] = ["Kuh", "Huhn", "Hund", "Bulle", "Schwein"];
        private foodTemplate: string[] = ["Rindersteaks", "Chickenwings", "Welpen", "Bullensteaks", "Schweinesteaks"];
        private soundTemplate: string[] = ["Muh", "put", "wuff", "schnauf", "oink"];
        
        constructor(_animal: string) {
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
        eat(): void {
            //return this.foodAmount--;
            if (this.food == "Rindersteaks") {
                this.foodAmount = this.foodAmount - Math.floor(Math.random() * 4);       //wie gesagt, er wusste nicht wie viele Tiere er noch hatte
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

        }
        getAnimal(): string {
            return this.animal;
        }
        getFood(): string {
            return this.food;
        }
        getFoodAmount(): number {
            return this.foodAmount;
        }
        getSound(): string {
            return this.sound;
        }
        getName(): string {
            return this.name;
        }
        getSongLyrics(): string {
            return this.songlyrics;
        }
        getHeading(): string {
            return this.heading;
        }
        getPicture(): string {
            return this.picture;
        }

        setNewHeading(): string {
            return this.heading = this.item[this.index] + " " + this.animal + " " + this.headingSentence[0] + this.name + this.headingSentence[1] + " "  + this.foodAmount + " " + this.food;
        }

        private set(_animal: string): void {
            for (let i: number = 0; i < this.animalTemplate.length; i++) {
                if (_animal == this.animalTemplate[i]) {
                    this.animal = _animal;
                    this.index = i;
                }
            }
        }
         private setFoodAmount(): void {
             if (this.food == "Rindersteaks") {
                this.foodAmount = Math.floor(Math.random() * 10) + 1;       //wie gesagt, er wusste nicht wie viele Tiere er noch hatte
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
         }
        private setFood(): void {
            this.food = this.foodTemplate[this.index];
        }
        private setSound(): void {
            this.sound = this.soundTemplate[this.index];
        }
        private setName(): void {
            this.name = this.nameTemplate[Math.floor(Math.random() * 5) + 0];
        }
        private setSongLyrics(): void {
            this.songlyrics = this.song[0] + this.otherGrammar[this.index] + this.animal + this.song[1] + this.sound + "-" + this.sound + this.song[2]  + this.sound + "-" + this.sound + this.song[3] + this.sound + this.song[4] + this.sound + this.song[5] + this.sound + "-" + this.sound + this.song[6];
        }
        private setpicture(): void {
            this.picture = "<img src=img/" + this.animal + ".svg heigth=50% width=50%><br>";
        }
        private setHeading(): void {
            this.heading = this.item[this.index] + " " + this.animal + " " + this.headingSentence[0] + this.name + this.headingSentence[1] + " "  + this.foodAmount + " " + this.food;
        }
    }
}