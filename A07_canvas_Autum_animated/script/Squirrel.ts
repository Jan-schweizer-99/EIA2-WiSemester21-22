namespace canvas_Autum_animated {
    export class Squirrel {
        position: Vector;
        scale: number;
        type: number;
        rotation: number[] = [];       //arm -> 0 || leg -> 1 || arm -> 2 || leg -> 3


        constructor(_scale: number, _type: number) {
            this.rotation[0] = (90 * Math.PI / 180); // go to 0
            this.rotation[1] = (45 * Math.PI / 180); // go to 0
            this.rotation[2] = (0 * Math.PI / 180); //go to 90
            this.rotation[3] = (0 * Math.PI / 180); //go to 90
            this.position = new Vector(0, 0);
            this.setType(_type);
            this.setScale(_scale);
            // this.setSizetree();
            // this.sizeTree();
        }

        setType(_type: number): void {
            this.type = _type;
        }

        setPosition(_x: number, _y: number): void {
            this.position.x = _x;
            this.position.y = _y;
        }

        setScale(_scale: number): void {
            this.scale = _scale;

        }

        setColor(_color: string): void {
        //    this.color = _color;
        }
        setRandomOrigin(): void {                   //function für baumkrone
        //    this.originx = Math.random() * 130;
        }
        leafSlide(): void {
            this.position.x += 2;
            this.position.y += 2;
        //    this.rotation += 0.1;
        }

        draw(): void {
            crc2.translate(this.position.x, this.position.y); //erst verschieben
            crc2.scale(this.scale, this.scale);   //scale
            //crc2.rotate(this.rotation); //zufällige ausrichtung
            crc2.beginPath();
        //    crc2.fillStyle = this.color;
            crc2.lineWidth = 0.070004;
            crc2.shadowBlur = 0;
            
            if (this.type == 1) {
            //    drawleave1(this.originx, 0); //path with moveable origin
            }
            if (this.type == 2) {
            //    drawleave2(this.originx, 0); //path with moveable origin
            }
            if (this.type == 3) {
            //    drawleave3(this.originx, 0); //path with moveable origin
            }
            crc2.setTransform(1, 0, 0, 1, 0, 0); //reset scale
        }
    }
}