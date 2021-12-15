declare namespace canvas_Autum_animated {
    let crc2: CanvasRenderingContext2D;
}
declare namespace canvas_Autum_animated {
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
declare namespace canvas_Autum_animated {
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
declare namespace canvas_Autum_animated {
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
        draw(): void;
    }
}
declare namespace canvas_Autum_animated {
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
declare namespace canvas_Autum_animated {
    class Squirrel {
    }
}
declare namespace canvas_Autum_animated {
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
declare namespace canvas_Autum_animated {
    class Vector {
        x: number;
        y: number;
        constructor(_x: number, _y: number);
        set(_x: number, _y: number): void;
        scale(_factor: number): void;
        add(_addend: Vector): void;
    }
}
declare namespace canvas_Autum_animated {
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
declare namespace canvas_Autum_animated {
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
