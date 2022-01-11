namespace canvas_Autum_poly {
    export class Tree {
        position: Vector;
        scale: number;
        type: number;
        color: string;
        leaf: Leaf [] = [];
        origin: number [] = [];
        rotation: number[] = [];
        tree: Tree[] = [];
        

        constructor(_scale: number, _type: number) {
            this.position = new Vector(0, 0);
            this.setType(_type);
            this.setScale(_scale);
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
        setRandomRotation(): void {
            for (let i: number = 0; i < 10; i++) {
            this.leaf[i] = new Leaf(1 * this.scale, this.type); //leaf with scale, type, color
            this.leaf[i].setRotation((Math.random() * 360) * -1 * Math.PI / 180);
            this.leaf[i].setRandomOrigin();
            }
        }

        draw(): void {
            crc2.translate(this.position.x, this.position.y); //erst verschieben
            crc2.scale(this.scale * 5 , this.scale * 5 );   //scale

            crc2.beginPath();
            crc2.fillStyle = "rgb(83, 38, 16)";
            crc2.lineWidth = 0.070004;

            drawTreewood();
            crc2.setTransform(1, 0, 0, 1, 0, 0); //reset scale
            for (let i: number = 0; i < 10; i++) {               //draw leave 
                this.leaf[i].setPosition(this.position.x, this.position.y - 240 * this.scale);
                this.leaf[i].setType(this.type);
                //this.leaf[i].setRotation((Math.random() * 360) * -1 * Math.PI / 180);
                this.leaf[i].draw();
                // drawleave1(this.position.x, this.position.y - (142 * 1), 0.5 * 1, Math.random() * 200, 0);
            }
        }
    }
}