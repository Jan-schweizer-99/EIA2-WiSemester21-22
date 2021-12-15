namespace canvas_Autum_animated {
    export class Star {
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
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y);
            crc2.arc(this.position.x, this.position.y, this.scale, 0, 2 * Math.PI, false);
            //crc2.lineTo(_x, _y + 70);
            //crc2.lineTo(_x + 80, _y + 35);
            crc2.closePath();
            crc2.shadowColor = "white";
            crc2.shadowBlur = 15;
        
            crc2.fillStyle = "#FFFFFFFF";
            crc2.fill();
            crc2.strokeRect(0, 0, 0, 0);
            crc2.shadowColor = "#FFFFFF00";
            crc2.shadowBlur = 0;
            crc2.setTransform(1, 0, 0, 1, 0, 0); //reset scale
        }
    }
}