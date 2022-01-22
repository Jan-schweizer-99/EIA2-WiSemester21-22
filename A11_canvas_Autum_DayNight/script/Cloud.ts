namespace canvas_Autum_animated {
    export class Cloud {
        position: Vector;
        scale: number;

        constructor(_scale: number) {
            this.position = new Vector(0, 0);
            this.setScale(_scale);
        }

        setPosition(_x: number, _y: number): void {
            this.position.x = _x;
            this.position.y = _y;
        }
        setScale(_scale: number): void {
            this.scale = _scale;
        }
        slideright(): void {
            this.position.x++;
            
        }
        
        draw(): void {
            crc2.translate(this.position.x, this.position.y); //erst verschieben
            crc2.scale(this.scale * 5 , this.scale * 5 );   //scale
            crc2.beginPath();
            drawcloud();
            crc2.fill();
            crc2.stroke();
            crc2.setTransform(1, 0, 0, 1, 0, 0); //reset scale
        }
    }
}