namespace A08_McdonaldsFarm_Heritage {
    export class Lyrics {

        animal: string;
        songlyrics: string;
        heading: string;

        private song: string[] = ["Old MacDonalds Kanibalen Farm, EI A, EIA, EI,<br> und auf der Farm da gibt\'s \' ", " EI A, EIA, EI.<br> Mit \'nem ", " hier und \'nem ", " da,<br>hier ein ", ", da ein ", ", überall ein ", ",<br>Old MacDonalds Kanibalen Farm, EI A, EIA, EI."];
        private headingSentence: string[] = [" namens " , " hat heute noch "];

        constructor (_animal: string, _otherGrammar: string, _item: string, _sound: string, _name: string, _foodamount: number, _food: string) {
            _animal = this.animal;
            this.setSongLyrics(_animal, _otherGrammar, _item, _food, _sound);
            this.setHeading(_item, _name, _foodamount, _food);
        }
        getSongLyrics(): string {
            return this.songlyrics;
        }
        
        
        getHeading(): string {
            return this.heading;
        }

        private setHeading(_item: string, _name: string, _foodamout: number, _food: string): void {
            this.heading = _item + " " + this.animal + " " + this.headingSentence[0] + _name + this.headingSentence[1] + " "  + _foodamout + " " + _food;
        }
        private setSongLyrics(_animal: string, _otherGrammar: string, _item: string, _food: string, _sound: string): void {
            this.songlyrics = this.song[0] + _otherGrammar + this.animal + this.song[1] + _sound + "-" + _sound + this.song[2]  + _sound + "-" + _sound + this.song[3] + _sound + this.song[4] + _sound + this.song[5] + _sound + "-" + _sound + this.song[6];
        }

    }
}