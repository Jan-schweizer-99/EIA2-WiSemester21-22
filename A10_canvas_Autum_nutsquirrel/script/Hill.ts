namespace canvas_Autum_animated {
    export class Hill {
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
        setrandomPosition(_x: number, _y: number): void {
            this.position.x = _x;
            this.position.y = _y;
        }
        setScale(_scale: number): void {
            this.scale = _scale;
        }
        
        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.position.x - 250 + 0, 1080 / 2);
            crc2.lineTo(this.position.x - 250 + 250, this.position.y);
            crc2.lineTo(this.position.x - 250 + 500, 1080 / 2);
            crc2.closePath();
        
            crc2.shadowColor = "#252850";
            crc2.shadowBlur = 120;
            crc2.strokeStyle = "grey";
            crc2.lineWidth = 5;
            crc2.fillStyle = "#6b695f";
            crc2.fill();
            crc2.stroke();
            crc2.shadowColor = "#FFFFFF00";
            crc2.shadowBlur = 0;
        
            if (this.position.y <= 300) {
              crc2.beginPath();
              crc2.moveTo(this.position.x + 125 - 250, 1080 / 4 + this.position.y / 2);
              crc2.lineTo(this.position.x + 250 - 250, this.position.y);
              crc2.lineTo(this.position.x + 375 - 250, 1080 / 4 + this.position.y / 2);
              crc2.lineTo(this.position.x + 325 - 250, 1080 / 4 + 50 + this.position.y / 2);
              crc2.lineTo(this.position.x + 250 - 250, 1080 / 4 - 50 + this.position.y / 2);
              crc2.closePath();
        
              crc2.strokeStyle = "grey";
              crc2.lineWidth = 5;
              crc2.fillStyle = "white";
              crc2.stroke();
              crc2.fill();
            }
            crc2.setTransform(1, 0, 0, 1, 0, 0); //reset scale
            crc2.strokeStyle = "black";
            crc2.fillStyle = "white";
            crc2.lineWidth = 1;
        
          }
        }
}