namespace canvas_Autum_poly {
    export abstract class Moveable {
    position: Vector;
    velocity: Vector;
    rotation: number;
    scale: number;


    constructor(_position: Vector, _rotation: number, _scale: number) {
        this.position = _position;
        this.velocity = new Vector (0, 0);
        this.rotation = _rotation;
        this.scale = _scale;
    }
    move(): void {
        let offset: Vector = this.velocity.copy();
    }

}