namespace canvas_Autum_poly {
    export class Sky {
        position: Vector;
        scale: number;
        star: Star [] = [];

        constructor(_scale: number) {
            this.position = new Vector(0, 0);
            this.setScale(_scale);
            //this.setStars();
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
        setStars(): void {
            for (let i: number = 0; i < 150; i++) {
            this.star[i] = new Star(1);
            this.star[i].position.x = Math.random() * 1920;
            this.star[i].position.y = Math.random() * 540;
            this.star[i].scale = Math.random() * 3;
        }
        }
        draw(): void {
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(1920, 0);
            crc2.lineTo(1920, 1080);
            crc2.lineTo(0, 1080);
            crc2.closePath();
            crc2.fillStyle = "#252850";
            crc2.fill();
            for (let i: number = 0; i < 150; i++) {
                this.star[i].draw();
            }
        }
    }
}