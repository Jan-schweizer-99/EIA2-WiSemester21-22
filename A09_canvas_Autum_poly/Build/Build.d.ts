declare namespace canvas_Autum_poly {
    let crc2: CanvasRenderingContext2D;
}
declare namespace canvas_Autum_poly {
    class Cloud {
        position: Vector;
        scale: number;
        constructor(_scale: number);
        setPosition(_x: number, _y: number): void;
        setScale(_scale: number): void;
        slideright(): void;
        draw(): void;
    }
}
declare namespace canvas_Autum_poly {
    class Hill {
        position: Vector;
        scale: number;
        constructor(_scale: number);
        setPosition(_x: number, _y: number): void;
        setrandomPosition(_x: number, _y: number): void;
        setScale(_scale: number): void;
        draw(): void;
    }
}
declare namespace canvas_Autum_poly {
    class Leaf {
        position: Vector;
        scale: number;
        type: number;
        color: string;
        leaf: Leaf;
        originx: number;
        rotation: number;
        constructor(_scale: number, _type: number);
        setType(_type: number): void;
        setRotation(_rotation: number): void;
        setPosition(_x: number, _y: number): void;
        setScale(_scale: number): void;
        setColor(_color: string): void;
        setRandomOrigin(): void;
        leafSlide(): void;
        draw(): void;
    }
}
declare namespace canvas_Autum_poly {
    abstract class Moveable {
        position: Vector;
        velocity: Vector;
        rotation: number;
        scale: number;
        constructor(_position: Vector, _rotation: number, _scale: number);
        move(): void;
    }
}
declare namespace canvas_Autum_poly {
    function drawleave1(_originX: number, _originY: number): void;
    function drawleave4(_originX: number, _originY: number): void;
    function drawleave2(_originX: number, _originY: number): void;
    function drawleave3(_originX: number, _originY: number): void;
    function drawbody(_transX: number, _transY: number, _scale: number): void;
    function drawarm(_transX: number, _transY: number, _scale: number): void;
    function drawleg(_transX: number, _transY: number, _scale: number): void;
    function drawTreewood(): void;
    function drawcloud(): void;
}
declare namespace canvas_Autum_poly {
    class Squirrel {
        position: Vector;
        scale: number;
        type: number;
        rotation: number[];
        constructor(_scale: number, _type: number);
        setType(_type: number): void;
        setPosition(_x: number, _y: number): void;
        setScale(_scale: number): void;
        setColor(_color: string): void;
        setRandomOrigin(): void;
        leafSlide(): void;
        draw(): void;
    }
}
declare namespace canvas_Autum_poly {
    class Tree {
        position: Vector;
        scale: number;
        type: number;
        color: string;
        leaf: Leaf[];
        origin: number[];
        rotation: number[];
        tree: Tree[];
        constructor(_scale: number, _type: number);
        setType(_type: number): void;
        setPosition(_x: number, _y: number): void;
        setScale(_scale: number): void;
        setRandomRotation(): void;
        draw(): void;
    }
}
declare namespace canvas_Autum_poly {
    class Vector {
        x: number;
        y: number;
        constructor(_x: number, _y: number);
        set(_x: number, _y: number): void;
        scale(_factor: number): void;
        add(_addend: Vector): void;
        copy(): Vector;
    }
}
declare namespace canvas_Autum_poly {
    class Sky {
        position: Vector;
        scale: number;
        star: Star[];
        constructor(_scale: number);
        setPosition(_x: number, _y: number): void;
        setScale(_scale: number): void;
        slideright(): void;
        setStars(): void;
        draw(): void;
    }
}
declare namespace canvas_Autum_poly {
    class Star {
        position: Vector;
        scale: number;
        constructor(_scale: number);
        setPosition(_x: number, _y: number): void;
        setScale(_scale: number): void;
        slideright(): void;
        draw(): void;
    }
}
