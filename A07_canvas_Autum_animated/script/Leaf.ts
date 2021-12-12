namespace canvas_Autum_animated {
    export class Leaf {
        position: Vector;
        scale: number;
        type: number;
        color: string;
        leaf: Leaf;
        originx: number;
        rotation: number;

        constructor(_scale: number, _type: number) {
            this.originx = 0;
            this.rotation = 0;
            this.color = "rgb(243," + Math.random() * 255 + ", 0)";
            this.position = new Vector(0, 0);
            this.setType(_type);
            this.setScale(_scale);
            // this.setSizetree();
            // this.sizeTree();
        }

        setType(_type: number): void {
            this.type = _type;
        }

        setRotation(_rotation: number): void {
            this.rotation = _rotation;
        }

        setPosition(_x: number, _y: number): void {
            this.position.x = _x;
            this.position.y = _y;
        }

        setScale(_scale: number): void {
            this.scale = _scale;

        }

        setColor(_color: string): void {
            this.color = _color;
        }
        setRandomOrigin(): void {                   //function für baumkrone
            this.originx = Math.random() * 130;
        }

        draw(): void {
            crc2.translate(this.position.x, this.position.y); //erst verschieben
            crc2.scale(this.scale, this.scale);   //scale
            crc2.rotate(this.rotation); //zufällige ausrichtung
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.lineWidth = 0.070004;
            crc2.shadowBlur = 0;
            
            if (this.type == 1) {
                drawleave1(this.originx, 0); //path with moveable origin
            }
            if (this.type == 2) {
                drawleave2(this.originx, 0); //path with moveable origin
            }
            if (this.type == 3) {
                drawleave3(this.originx, 0); //path with moveable origin
            }
            crc2.setTransform(1, 0, 0, 1, 0, 0); //reset scale
        }
    }
}