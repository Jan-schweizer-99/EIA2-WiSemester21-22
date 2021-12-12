"use strict";
/*
Aufgabe: Aufgabe 08 Canvas
Name: Jan Schweizer
Matrikel: 268365
Datum: 27.01.2021
Quellen: Artur Erlich (MIB) hat mir empfolen ein skript zu schreiben damit ich das generierte Canvas Element (aus inkskape)
vom uhrsprung verschieben kann. Dies Tat ich dann und machte ich auch ins Projekt. Es befindet sich im Ordner OriginMover im projekt canvas_atum
*/
var canvas_Autum_animated;
/*
Aufgabe: Aufgabe 08 Canvas
Name: Jan Schweizer
Matrikel: 268365
Datum: 27.01.2021
Quellen: Artur Erlich (MIB) hat mir empfolen ein skript zu schreiben damit ich das generierte Canvas Element (aus inkskape)
vom uhrsprung verschieben kann. Dies Tat ich dann und machte ich auch ins Projekt. Es befindet sich im Ordner OriginMover im projekt canvas_atum
*/
(function (canvas_Autum_animated) {
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        canvas_Autum_animated.crc2 = canvas.getContext("2d");
        let blatt = new canvas_Autum_animated.Leaf(1, 3); //leaf with scale, type, color
        drawsky(); //draw sky and stars and moon
        for (let i = 0; i < 150; i++) {
            let x = Math.random() * 1920;
            let y = Math.random() * 540;
            let radius = Math.random() * 3;
            drawstars(x, y, radius);
        }
        drawmoon();
        for (let i = 0; i < 10; i++) { //draw clouds and hills
            let x = Math.random() * 1920;
            let y = Math.random() * 1080 / 2;
            drawhils(x, y);
            canvas_Autum_animated.drawcloud(Math.random() * 1920, Math.random() * 300, 5);
        }
        drawfloor(); //draw grass and floor
        //drawforrest();
        for (let i = 0; i < 10000; i++) {
            let x = Math.random() * 1920;
            let y = Math.random() * 1080 / 2;
            drawgrass(x, y);
        }
        for (let i = 0; i < 4; i++) { //draw campfire
            let transX = Math.random() * 1920 / 2 + 20;
            let transY = 500 - (Math.random() * 120);
            let scale = 2;
            drawsquirrel(transX, transY, scale);
        }
        drawforrest(); //draw trees background
        for (let i = 0; i < 10; i++) { //draw blätter im Vordergrund
            // drawleave1(Math.random() * 1920, Math.random() * 1080, 1.5, 0, 0);
            // drawleave2(Math.random() * 1920, Math.random() * 1080, 1.5, 0, 0);
            // drawleave3(Math.random() * 1920, Math.random() * 1080, 1.5, 0, 0);
        }
        blatt.setPosition(500, 500);
        blatt.draw();
    }
    function drawforrest() {
        let scalefactor = 0.5;
        let layer = 600;
        for (let index = 0; index <= 2; index++) { //draw forrest
            for (let i = 0; i < 5; i++) {
                let bauum = new canvas_Autum_animated.Tree(scalefactor, Math.floor(Math.random() * 3) + 1); //musste blatt 3 wegen der performance nehmen
                bauum.setPosition(Math.random() * 1920, layer);
                bauum.draw();
            }
            scalefactor += 0.1;
            layer += 20;
        }
    }
    function drawsquirrel(_transX, _transY, _scale) {
        canvas_Autum_animated.drawarm(_transX, _transY, _scale);
        canvas_Autum_animated.drawleg(_transX, _transY, _scale);
        canvas_Autum_animated.drawbody(_transX, _transY, _scale);
        canvas_Autum_animated.drawarm(_transX, _transY, _scale);
        canvas_Autum_animated.drawleg(_transX, _transY, _scale);
        //drawlegfront
    }
    function drawhils(_x, _y) {
        canvas_Autum_animated.crc2.beginPath();
        canvas_Autum_animated.crc2.moveTo(_x - 250 + 0, 1080 / 2);
        canvas_Autum_animated.crc2.lineTo(_x - 250 + 250, _y);
        canvas_Autum_animated.crc2.lineTo(_x - 250 + 500, 1080 / 2);
        canvas_Autum_animated.crc2.closePath();
        canvas_Autum_animated.crc2.shadowColor = "#252850";
        canvas_Autum_animated.crc2.shadowBlur = 120;
        canvas_Autum_animated.crc2.strokeStyle = "grey";
        canvas_Autum_animated.crc2.lineWidth = 5;
        canvas_Autum_animated.crc2.fillStyle = "#6b695f";
        canvas_Autum_animated.crc2.fill();
        canvas_Autum_animated.crc2.stroke();
        canvas_Autum_animated.crc2.shadowColor = "#FFFFFF00";
        canvas_Autum_animated.crc2.shadowBlur = 0;
        if (_y <= 300) {
            canvas_Autum_animated.crc2.beginPath();
            canvas_Autum_animated.crc2.moveTo(_x + 125 - 250, 1080 / 4 + _y / 2);
            canvas_Autum_animated.crc2.lineTo(_x + 250 - 250, _y);
            canvas_Autum_animated.crc2.lineTo(_x + 375 - 250, 1080 / 4 + _y / 2);
            canvas_Autum_animated.crc2.lineTo(_x + 325 - 250, 1080 / 4 + 50 + _y / 2);
            canvas_Autum_animated.crc2.lineTo(_x + 250 - 250, 1080 / 4 - 50 + _y / 2);
            canvas_Autum_animated.crc2.closePath();
            canvas_Autum_animated.crc2.strokeStyle = "grey";
            canvas_Autum_animated.crc2.lineWidth = 5;
            canvas_Autum_animated.crc2.fillStyle = "white";
            canvas_Autum_animated.crc2.stroke();
            canvas_Autum_animated.crc2.fill();
        }
        canvas_Autum_animated.crc2.setTransform(1, 0, 0, 1, 0, 0); //reset scale
        canvas_Autum_animated.crc2.strokeStyle = "black";
        canvas_Autum_animated.crc2.fillStyle = "white";
        canvas_Autum_animated.crc2.lineWidth = 1;
    }
    function drawsky() {
        canvas_Autum_animated.crc2.beginPath();
        canvas_Autum_animated.crc2.moveTo(0, 0);
        canvas_Autum_animated.crc2.lineTo(1920, 0);
        canvas_Autum_animated.crc2.lineTo(1920, 1080);
        canvas_Autum_animated.crc2.lineTo(0, 1080);
        canvas_Autum_animated.crc2.closePath();
        canvas_Autum_animated.crc2.fillStyle = "#252850";
        canvas_Autum_animated.crc2.fill();
    }
    function drawfloor() {
        canvas_Autum_animated.crc2.beginPath();
        canvas_Autum_animated.crc2.moveTo(0, 1080 / 2);
        canvas_Autum_animated.crc2.lineTo(1920, 1080 / 2);
        canvas_Autum_animated.crc2.lineTo(1920, 1080);
        canvas_Autum_animated.crc2.lineTo(0, 1080);
        canvas_Autum_animated.crc2.closePath();
        canvas_Autum_animated.crc2.fillStyle = "#35682d";
        canvas_Autum_animated.crc2.fill();
    }
    function drawstars(_x, _y, _radius) {
        canvas_Autum_animated.crc2.beginPath();
        canvas_Autum_animated.crc2.moveTo(_x, _y);
        canvas_Autum_animated.crc2.arc(_x, _y, _radius, 0, 2 * Math.PI, false);
        //crc2.lineTo(_x, _y + 70);
        //crc2.lineTo(_x + 80, _y + 35);
        canvas_Autum_animated.crc2.closePath();
        canvas_Autum_animated.crc2.shadowColor = "white";
        canvas_Autum_animated.crc2.shadowBlur = 15;
        canvas_Autum_animated.crc2.fillStyle = "#FFFFFFFF";
        canvas_Autum_animated.crc2.fill();
        canvas_Autum_animated.crc2.strokeRect(0, 0, 0, 0);
        canvas_Autum_animated.crc2.shadowColor = "#FFFFFF00";
        canvas_Autum_animated.crc2.shadowBlur = 0;
    }
    function drawmoon() {
        canvas_Autum_animated.crc2.beginPath();
        canvas_Autum_animated.crc2.arc(60, 60, 150, 0, Math.PI * 2, false);
        //crc2.lineTo(_x, _y + 70);
        //crc2.lineTo(_x + 80, _y + 35);
        canvas_Autum_animated.crc2.closePath();
        canvas_Autum_animated.crc2.shadowColor = "#FFFFFF"; //drop shadow sieht kacke aus
        //crc2.shadowOffsetX = 0;
        //crc2.shadowOffsetY = 0;
        canvas_Autum_animated.crc2.shadowBlur = 800;
        canvas_Autum_animated.crc2.fillStyle = "#FFFFFF";
        canvas_Autum_animated.crc2.fill();
        canvas_Autum_animated.crc2.shadowColor = "#FFFFFF00";
        canvas_Autum_animated.crc2.shadowBlur = 0;
    }
    function drawgrass(_x, _y) {
        let grassdirection = Math.random() * 20;
        canvas_Autum_animated.crc2.beginPath();
        canvas_Autum_animated.crc2.moveTo(_x, _y + 1080 / 2);
        canvas_Autum_animated.crc2.lineTo(_x, _y + grassdirection + 1080 / 2 + 25);
        canvas_Autum_animated.crc2.closePath();
        canvas_Autum_animated.crc2.strokeStyle = "green";
        canvas_Autum_animated.crc2.lineWidth = 2;
        canvas_Autum_animated.crc2.stroke();
    }
})(canvas_Autum_animated || (canvas_Autum_animated = {}));
var canvas_Autum_animated;
(function (canvas_Autum_animated) {
    class Cloud {
    }
    canvas_Autum_animated.Cloud = Cloud;
})(canvas_Autum_animated || (canvas_Autum_animated = {}));
var canvas_Autum_animated;
(function (canvas_Autum_animated) {
    class Leaf {
        position;
        scale;
        type;
        color;
        leaf;
        originx;
        rotation;
        constructor(_scale, _type) {
            this.originx = 0;
            this.rotation = 0;
            this.color = "rgb(243," + Math.random() * 255 + ", 0)";
            this.position = new canvas_Autum_animated.Vector(0, 0);
            this.setType(_type);
            this.setScale(_scale);
            // this.setSizetree();
            // this.sizeTree();
        }
        setType(_type) {
            this.type = _type;
        }
        setRotation(_rotation) {
            this.rotation = _rotation;
        }
        setPosition(_x, _y) {
            this.position.x = _x;
            this.position.y = _y;
        }
        setScale(_scale) {
            this.scale = _scale;
        }
        setColor(_color) {
            this.color = _color;
        }
        setRandomOrigin() {
            this.originx = Math.random() * 130;
        }
        draw() {
            canvas_Autum_animated.crc2.translate(this.position.x, this.position.y); //erst verschieben
            canvas_Autum_animated.crc2.scale(this.scale, this.scale); //scale
            canvas_Autum_animated.crc2.rotate(this.rotation); //zufällige ausrichtung
            canvas_Autum_animated.crc2.beginPath();
            canvas_Autum_animated.crc2.fillStyle = this.color;
            canvas_Autum_animated.crc2.lineWidth = 0.070004;
            canvas_Autum_animated.crc2.shadowBlur = 0;
            if (this.type == 1) {
                canvas_Autum_animated.drawleave1(this.originx, 0); //path with moveable origin
            }
            if (this.type == 2) {
                canvas_Autum_animated.drawleave2(this.originx, 0); //path with moveable origin
            }
            if (this.type == 3) {
                canvas_Autum_animated.drawleave3(this.originx, 0); //path with moveable origin
            }
            canvas_Autum_animated.crc2.setTransform(1, 0, 0, 1, 0, 0); //reset scale
        }
    }
    canvas_Autum_animated.Leaf = Leaf;
})(canvas_Autum_animated || (canvas_Autum_animated = {}));
var canvas_Autum_animated;
(function (canvas_Autum_animated) {
    //Paths
    function drawleave1(_originX, _originY) {
        canvas_Autum_animated.crc2.moveTo(_originX + 0.309382, _originY + -4.891130);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 0.309382, _originY + -9.036270, _originX + -4.364923, _originY + -10.447380, _originX + -7.804506, _originY + -11.505714);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -13.713534, _originY + -14.504326, _originX + -10.450340, _originY + -20.413353, _originX + -4.894090, _originY + -19.972380);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -2.160058, _originY + -23.059187, _originX + -8.510062, _originY + -23.147380, _originX + -10.185756, _originY + -24.470297);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -14.419090, _originY + -28.615437, _originX + -10.009367, _originY + -32.936964, _originX + -5.246868, _originY + -30.820298);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 8.070492, _originY + -32.672381, _originX + -15.565618, _originY + -37.699464, _originX + -6.040618, _originY + -43.167520);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -3.306588, _originY + -43.608492, _originX + 2.778822, _originY + -40.080714, _originX + 3.748962, _originY + -44.402242);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -0.043398, _originY + -56.220298, _originX + 18.918412, _originY + -54.720992, _originX + 12.832992, _originY + -43.343909);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 13.009382, _originY + -41.050853, _originX + 15.831602, _originY + -41.932798, _originX + 17.419102, _originY + -41.491826);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 24.651052, _originY + -38.405020, _originX + 18.036462, _originY + -31.614048, _originX + 13.009382, _originY + -30.908492);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 11.421882, _originY + -24.558493, _originX + 24.651052, _originY + -24.911270, _originX + 9.657992, _originY + -19.443214);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 7.100352, _originY + -16.091826, _originX + 12.832992, _originY + -15.121687, _originX + 12.832992, _originY + -12.123076);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 12.480212, _originY + -8.066130, _originX + 6.659382, _originY + -9.565437, _originX + 4.189942, _originY + -7.801547);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 2.867022, _originY + -6.743214, _originX + 2.161462, _originY + -3.656410, _originX + 0.309382, _originY + -4.891130);
        canvas_Autum_animated.crc2.fill();
        // #path1103
        canvas_Autum_animated.crc2.beginPath();
        canvas_Autum_animated.crc2.fillStyle = "rgb(211, 168, 62)";
        canvas_Autum_animated.crc2.lineWidth = 0.070004;
        canvas_Autum_animated.crc2.moveTo(_originX + -2.777418, _originY + -0.040437);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 1.279522, _originY + -8.771687, _originX + 6.747572, _originY + -38.934187, _originX + 7.982302, _originY + -47.577242);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 10.275352, _originY + -44.314048, _originX + 4.630912, _originY + -13.975160, _originX + 2.073272, _originY + -5.684880);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 1.632302, _originY + -2.509880, _originX + 2.778822, _originY + 0.488730, _originX + 1.985072, _originY + 1.458870);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 1.103132, _originY + 2.340813, _originX + -2.777428, _originY + 2.869980, _originX + -2.777428, _originY + -0.040437);
        canvas_Autum_animated.crc2.setTransform(1, 0, 0, 1, 0, 0); //reset scale
    }
    canvas_Autum_animated.drawleave1 = drawleave1;
    function drawleave4(_originX, _originY) {
        canvas_Autum_animated.crc2.moveTo(_originX + 0.309382, _originY + -4.891130);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 0.309382, _originY + -9.036270, _originX + -4.364923, _originY + -10.447380, _originX + -7.804506, _originY + -11.505714);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -13.713534, _originY + -14.504326, _originX + -10.450340, _originY + -20.413353, _originX + -4.894090, _originY + -19.972380);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -2.160058, _originY + -23.059187, _originX + -8.510062, _originY + -23.147380, _originX + -10.185756, _originY + -24.470297);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -14.419090, _originY + -28.615437, _originX + -10.009367, _originY + -32.936964, _originX + -5.246868, _originY + -30.820298);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 8.070492, _originY + -32.672381, _originX + -15.565618, _originY + -37.699464, _originX + -6.040618, _originY + -43.167520);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -3.306588, _originY + -43.608492, _originX + 2.778822, _originY + -40.080714, _originX + 3.748962, _originY + -44.402242);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -0.043398, _originY + -56.220298, _originX + 18.918412, _originY + -54.720992, _originX + 12.832992, _originY + -43.343909);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 13.009382, _originY + -41.050853, _originX + 15.831602, _originY + -41.932798, _originX + 17.419102, _originY + -41.491826);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 24.651052, _originY + -38.405020, _originX + 18.036462, _originY + -31.614048, _originX + 13.009382, _originY + -30.908492);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 11.421882, _originY + -24.558493, _originX + 24.651052, _originY + -24.911270, _originX + 9.657992, _originY + -19.443214);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 7.100352, _originY + -16.091826, _originX + 12.832992, _originY + -15.121687, _originX + 12.832992, _originY + -12.123076);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 12.480212, _originY + -8.066130, _originX + 6.659382, _originY + -9.565437, _originX + 4.189942, _originY + -7.801547);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 2.867022, _originY + -6.743214, _originX + 2.161462, _originY + -3.656410, _originX + 0.309382, _originY + -4.891130);
        canvas_Autum_animated.crc2.fill();
        // #path1103
        canvas_Autum_animated.crc2.beginPath();
        canvas_Autum_animated.crc2.fillStyle = "rgb(211, 168, 62)";
        canvas_Autum_animated.crc2.lineWidth = 0.070004;
        canvas_Autum_animated.crc2.moveTo(_originX + -2.777418, _originY + -0.040437);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 1.279522, _originY + -8.771687, _originX + 6.747572, _originY + -38.934187, _originX + 7.982302, _originY + -47.577242);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 10.275352, _originY + -44.314048, _originX + 4.630912, _originY + -13.975160, _originX + 2.073272, _originY + -5.684880);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 1.632302, _originY + -2.509880, _originX + 2.778822, _originY + 0.488730, _originX + 1.985072, _originY + 1.458870);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 1.103132, _originY + 2.340813, _originX + -2.777428, _originY + 2.869980, _originX + -2.777428, _originY + -0.040437);
    }
    canvas_Autum_animated.drawleave4 = drawleave4;
    function drawleave2(_originX, _originY) {
        canvas_Autum_animated.crc2.moveTo(_originX + 0.529166, _originY + -11.288888);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -21.784029, _originY + -12.699999, _originX + -20.549307, _originY + -15.874999, _originX + -18.079862, _originY + -15.345832);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -18.079862, _originY + -15.345832, _originX + -25.223612, _originY + -28.045832, _originX + -30.427085, _originY + -28.486804);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -30.427085, _originY + -28.486804, _originX + -22.401390, _originY + -30.779860, _originX + -9.877779, _originY + -26.370138);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -9.877779, _originY + -26.370138, _originX + -3.968751, _originY + -42.950693, _originX + -8.554862, _originY + -50.270832);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -8.554862, _originY + -50.270832, _originX + 9.172220, _originY + -45.949304, _originX + 8.466666, _originY + -27.428471);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 8.466666, _originY + -27.428471, _originX + 24.341666, _originY + -33.778471, _originX + 25.400000, _originY + -42.862498);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 25.400000, _originY + -42.862498, _originX + 27.781250, _originY + -19.049999, _originX + 18.168054, _originY + -16.315972);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 18.168054, _originY + -16.315972, _originX + 22.489583, _originY + -12.170832, _originX + 24.870833, _originY + -12.347222);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 24.870833, _originY + -12.347222, _originX + 10.583333, _originY + 3.968751, _originX + 0.529166, _originY + -11.288888);
        canvas_Autum_animated.crc2.fill();
        // #path14
        canvas_Autum_animated.crc2.beginPath();
        canvas_Autum_animated.crc2.fillStyle = "rgb(233, 78, 27)";
        canvas_Autum_animated.crc2.lineWidth = 0.070004;
        canvas_Autum_animated.crc2.moveTo(_originX + 25.576387, _originY + -39.952082);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 25.664587, _originY + -41.098609, _originX + 25.752777, _originY + -42.156943, _originX + 25.311804, _originY + -43.215276);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 25.752777, _originY + -37.659026, _originX + 17.991666, _originY + -27.693054, _originX + 14.111110, _originY + -26.370138);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 13.405554, _originY + -27.604860, _originX + 14.375693, _originY + -29.280554, _originX + 13.846527, _originY + -30.074304);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 12.700000, _originY + -28.398610, _originX + 13.758337, _originY + -26.546526, _originX + 13.317360, _originY + -24.959026);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 11.112500, _originY + -23.195138, _originX + 7.937500, _originY + -18.961805, _originX + 7.849304, _originY + -24.518054);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 9.172220, _originY + -31.220832, _originX + 4.762500, _originY + -19.226388, _originX + 1.234720, _originY + -19.402776);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 0.881943, _originY + -19.314586, _originX + 0.617360, _originY + -19.314586, _originX + 0.793750, _originY + -20.461109);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 0.793750, _originY + -20.813888, _originX + 0.793750, _originY + -21.166665, _originX + 0.705550, _originY + -21.431249);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 0.352773, _originY + -22.401388, _originX + 0.352773, _originY + -23.459722, _originX + -0.000004, _originY + -24.341665);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -0.000004, _originY + -24.429855, _originX + -0.000004, _originY + -25.223610, _originX + 0.088186, _originY + -25.311804);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 4.850686, _originY + -27.693054, _originX + 5.909020, _originY + -33.690276, _originX + 5.997213, _originY + -38.629165);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 4.497909, _originY + -35.630554, _originX + 4.056936, _originY + -28.574999, _originX + -0.000007, _originY + -26.105554);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -0.176390, _originY + -28.927776, _originX + -1.411113, _originY + -32.279165, _originX + -1.058334, _originY + -34.924999);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 2.734027, _originY + -36.336110, _originX + 3.792360, _originY + -48.506943, _originX + 1.234720, _originY + -40.481248);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 0.705554, _originY + -39.334721, _originX + -0.440973, _originY + -35.101388, _originX + -1.763890, _originY + -35.983332);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -2.998613, _originY + -40.393054, _originX + -3.880557, _originY + -48.683332, _originX + -8.290279, _originY + -50.094443);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -3.968751, _originY + -47.713193, _originX + -3.615973, _originY + -40.834026, _originX + -2.469446, _originY + -36.336110);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -2.293057, _originY + -34.043054, _originX + -6.085418, _originY + -37.570832, _originX + -6.879168, _originY + -37.923610);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -0.176390, _originY + -31.926388, _originX + -2.557640, _originY + -37.129860, _originX + -1.058334, _originY + -26.722915);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -3.175000, _originY + -26.281943, _originX + -6.526390, _originY + -31.309026, _originX + -8.378473, _originY + -32.014582);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -6.261807, _originY + -29.192360, _originX + -2.734030, _originY + -27.252082, _originX + -0.881946, _originY + -24.694443);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -1.058334, _originY + -23.459722, _originX + 0.176387, _originY + -20.284722, _originX + -0.881946, _originY + -19.931942);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -4.409723, _originY + -21.607638, _originX + -6.790973, _originY + -23.812499, _originX + -9.701390, _originY + -26.193749);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -6.879168, _originY + -23.371526, _originX + -4.762501, _originY + -20.284722, _originX + -0.617363, _originY + -19.579165);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 0.000000, _originY + -18.432638, _originX + -0.264584, _originY + -16.315972, _originX + -0.176390, _originY + -14.904859);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -3.086807, _originY + -17.462499, _originX + -7.849307, _originY + -18.785415, _originX + -9.965973, _originY + -21.607638);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -10.318751, _originY + -24.077082, _originX + -11.994446, _originY + -25.840971, _originX + -13.758334, _originY + -27.604860);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -14.287501, _originY + -26.811110, _originX + -9.877779, _originY + -22.930555, _originX + -11.288890, _originY + -21.695832);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -15.610418, _originY + -23.018749, _originX + -15.963196, _originY + -26.987499, _originX + -20.020140, _originY + -28.751388);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -21.607640, _originY + -28.663198, _originX + -17.286112, _originY + -25.840971, _originX + -16.933334, _originY + -24.782638);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -21.166668, _originY + -26.458332, _originX + -25.840973, _originY + -28.751388, _originX + -30.427085, _originY + -28.486804);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -29.897918, _originY + -28.310415, _originX + -29.368751, _originY + -28.222221, _originX + -28.927779, _originY + -28.222221);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -24.959029, _originY + -27.252082, _originX + -9.436807, _originY + -22.401388, _originX + -22.225001, _originY + -22.665972);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -23.371529, _originY + -21.960415, _originX + -19.314584, _originY + -21.960415, _originX + -18.609029, _originY + -22.048609);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -17.286112, _originY + -21.784026, _originX + -16.315973, _originY + -23.283332, _originX + -15.169446, _originY + -22.930555);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -7.584723, _originY + -19.490972, _originX + -17.109723, _originY + -20.196526, _originX + -20.284723, _originY + -19.138192);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -17.462501, _originY + -17.727082, _originX + -13.670140, _originY + -18.520832, _originX + -10.936112, _originY + -20.020138);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -9.436807, _originY + -20.108328, _originX + -7.672918, _originY + -18.344442, _originX + -6.438196, _originY + -17.550692);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -10.230557, _originY + -16.580555, _originX + -14.375696, _originY + -16.404165, _originX + -18.079862, _originY + -16.404165);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -14.463890, _originY + -15.081249, _originX + -9.436807, _originY + -15.081249, _originX + -5.909029, _originY + -16.845138);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -4.145140, _originY + -16.933328, _originX + -2.645834, _originY + -14.904859, _originX + -1.146530, _originY + -14.111109);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -1.234720, _originY + -12.259026, _originX + -5.820834, _originY + -12.876388, _originX + -7.496529, _originY + -12.523609);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -10.583334, _originY + -14.552082, _originX + -14.463890, _originY + -15.963192, _originX + -18.168057, _originY + -15.698609);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -15.522223, _originY + -14.552082, _originX + -11.906251, _originY + -14.552082, _originX + -9.525001, _originY + -12.523609);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -12.964584, _originY + -11.906249, _originX + -12.700001, _originY + -13.758332, _originX + -15.345834, _originY + -14.552082);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -19.579168, _originY + -15.522222, _originX + -22.313196, _originY + -15.345832, _originX + -15.963196, _originY + -13.493749);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -14.993057, _originY + -11.818055, _originX + -20.637501, _originY + -13.405559, _originX + -21.695834, _originY + -13.229165);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -19.314584, _originY + -11.818055, _originX + -14.816668, _originY + -12.435415, _originX + -11.729862, _originY + -11.906249);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -10.230557, _originY + -10.318749, _originX + -16.139584, _originY + -10.671526, _originX + -16.756946, _originY + -9.789582);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -11.729862, _originY + -7.937499, _originX + -7.849307, _originY + -12.699999, _originX + -2.822223, _originY + -12.082638);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -2.381250, _originY + -12.170828, _originX + -1.675696, _originY + -11.906249, _originX + -2.028473, _originY + -11.641665);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -8.819446, _originY + -5.115276, _originX + -2.028473, _originY + -8.554859, _originX + -0.529167, _originY + -12.699999);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 1.852083, _originY + -10.406942, _originX + 0.440970, _originY + -3.527776, _originX + 0.000000, _originY + 0.000001);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 1.587500, _originY + -2.645832, _originX + 1.499304, _originY + -7.055555, _originX + 1.587500, _originY + -10.406942);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 2.734027, _originY + -11.729859, _originX + 6.261804, _originY + -7.672915, _originX + 8.113887, _originY + -5.468055);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 6.702777, _originY + -7.143749, _originX + 10.583333, _originY + -7.143749, _originX + 10.936110, _originY + -5.115276);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 10.230554, _originY + -9.436805, _originX + 3.351387, _originY + -8.466665, _originX + 1.675693, _originY + -12.788192);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 5.820833, _originY + -11.818055, _originX + 9.965970, _originY + -11.112499, _originX + 14.287500, _originY + -11.024305);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 16.404166, _originY + -9.789582, _originX + 18.609027, _originY + -9.436805, _originX + 21.431250, _originY + -9.789582);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 19.843750, _originY + -9.613192, _originX + 18.697220, _originY + -9.877772, _originX + 17.462500, _originY + -10.318749);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 15.257637, _originY + -11.024305, _originX + 25.664583, _originY + -12.082638, _originX + 23.812500, _originY + -12.259026);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 19.931943, _originY + -12.611805, _originX + 16.227777, _originY + -11.906249, _originX + 12.170833, _originY + -12.347226);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 14.199304, _originY + -13.405559, _originX + 17.374304, _originY + -14.552086, _originX + 17.903470, _originY + -16.933336);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 13.670137, _originY + -12.964586, _originX + 6.438193, _originY + -11.818059, _originX + 1.763887, _originY + -14.375696);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 4.321527, _originY + -15.875003, _originX + 6.702777, _originY + -18.785419, _originX + 9.436804, _originY + -19.667363);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 14.552083, _originY + -17.991669, _originX + 21.078470, _originY + -20.637503, _originX + 24.253470, _originY + -24.782642);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 20.549304, _originY + -21.872226, _originX + 15.610416, _originY + -19.138196, _originX + 10.671527, _originY + -20.284726);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 9.436804, _originY + -20.637503, _originX + 14.904860, _originY + -24.959030, _originX + 15.610416, _originY + -24.518058);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 19.402777, _originY + -24.253475, _originX + 23.018750, _originY + -26.634725, _originX + 25.135416, _originY + -29.545142);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 23.195137, _originY + -29.721530, _originX + 19.138193, _originY + -25.135419, _originX + 15.786804, _originY + -25.400003);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 19.931943, _originY + -29.456947, _originX + 24.694443, _originY + -34.131253, _originX + 25.576387, _originY + -39.952086);
        canvas_Autum_animated.crc2.moveTo(_originX + 0.000000, _originY + -26.105554);
        canvas_Autum_animated.crc2.lineTo(_originX + 0.000000, _originY + -26.105554);
        canvas_Autum_animated.crc2.moveTo(_originX + 8.113887, _originY + -20.372915);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 6.879166, _originY + -19.931942, _originX + 1.411110, _originY + -13.140972, _originX + 1.146527, _originY + -16.315972);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 0.970137, _originY + -18.432638, _originX + 0.440970, _originY + -18.961805, _originX + 1.058337, _originY + -18.961805);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 4.762504, _originY + -18.344442, _originX + 7.143754, _originY + -26.546526, _originX + 8.113891, _originY + -20.372915);
        canvas_Autum_animated.crc2.fill();
        canvas_Autum_animated.crc2.setTransform(1, 0, 0, 1, 0, 0); //reset scale
    }
    canvas_Autum_animated.drawleave2 = drawleave2;
    function drawleave3(_originX, _originY) {
        canvas_Autum_animated.crc2.moveTo(_originX + 24.211038, _originY + -11.288928);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 24.211038, _originY + -11.288928, _originX + -0.307017, _originY + -12.788233, _originX + -7.009795, _originY + -9.436844);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -15.035490, _originY + -5.468094, _originX + -18.827851, _originY + 10.406906, _originX + -18.827851, _originY + 10.406906);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -18.827851, _originY + 10.406906, _originX + -2.952851, _originY + 16.845099, _originX + 6.395759, _originY + 8.378433);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 12.922148, _originY + 2.381211, _originX + 18.831175, _originY + -4.233372, _originX + 24.211038, _originY + -11.288928);
        canvas_Autum_animated.crc2.fill();
        // #g678
        canvas_Autum_animated.crc2.save();
        canvas_Autum_animated.crc2.transform(1.000000, 0.000000, 0.000000, 1.000000, -8.127450, -26.564400);
        // #path662
        canvas_Autum_animated.crc2.beginPath();
        canvas_Autum_animated.crc2.fillStyle = "rgb(104, 60, 17)";
        canvas_Autum_animated.crc2.lineWidth = 0.070004;
        canvas_Autum_animated.crc2.moveTo(_originX + 24.577375, _originY + 18.009456);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 6.321126, _originY + 26.917095, _originX + 6.321126, _originY + 26.917095, _originX + 6.321126, _originY + 26.917095);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 7.732237, _originY + 20.390706, _originX + 7.732237, _originY + 20.390706, _originX + 7.732237, _originY + 20.390706);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 5.703765, _originY + 27.181678, _originX + 5.703765, _originY + 27.181678, _originX + 5.703765, _originY + 27.181678);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -2.586512, _originY + 31.238623, _originX + -2.586512, _originY + 31.238623, _originX + -2.586512, _originY + 31.238623);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 0.588487, _originY + 21.096262, _originX + 0.588487, _originY + 21.096262, _originX + 0.588487, _originY + 21.096262);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -3.203874, _originY + 31.591401, _originX + -3.203874, _originY + 31.591401, _originX + -3.203874, _originY + 31.591401);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -11.758735, _originY + 35.736539, _originX + -11.758735, _originY + 35.736539, _originX + -11.758735, _originY + 35.736539);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -10.700401, _originY + 37.853206, _originX + -10.700401, _originY + 37.853206, _originX + -10.700401, _originY + 37.853206);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -0.822624, _originY + 32.296956, _originX + -0.822624, _originY + 32.296956, _originX + -0.822624, _originY + 32.296956);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 2.440571, _originY + 32.914317, _originX + 5.615571, _originY + 33.619873, _originX + 8.790571, _originY + 34.590012);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 8.085015, _originY + 34.325428, _originX + 8.085015, _originY + 34.325428, _originX + 8.085015, _originY + 34.325428);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 8.790571, _originY + 34.501817, _originX + 8.790571, _originY + 34.501817, _originX + 8.790571, _originY + 34.501817);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + -0.117068, _originY + 31.855984, _originX + -0.117068, _originY + 31.855984, _originX + -0.117068, _originY + 31.855984);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 10.554459, _originY + 25.858762, _originX + 10.554459, _originY + 25.858762, _originX + 10.554459, _originY + 25.858762);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 10.554459, _originY + 25.946952, _originX + 10.554459, _originY + 25.946952, _originX + 10.554459, _originY + 25.946952);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 17.610015, _originY + 26.917091, _originX + 17.610015, _originY + 26.917091, _originX + 17.610015, _originY + 26.917091);
        canvas_Autum_animated.crc2.bezierCurveTo(_originX + 11.171821, _originY + 25.505980, _originX + 11.171821, _originY + 25.505980, _originX + 11.171821, _originY + 25.505980);
        canvas_Autum_animated.crc2.fill();
        canvas_Autum_animated.crc2.restore();
        canvas_Autum_animated.crc2.setTransform(1, 0, 0, 1, 0, 0); //reset scale
    }
    canvas_Autum_animated.drawleave3 = drawleave3;
    function drawbody(_transX, _transY, _scale) {
        canvas_Autum_animated.crc2.save();
        canvas_Autum_animated.crc2.scale(_scale, _scale);
        canvas_Autum_animated.crc2.translate(_transX - 48, _transY - 25);
        canvas_Autum_animated.crc2.rotate((0 * Math.PI / 180));
        //crc2.clearRect(0,0,canvas.width,canvas.height);
        canvas_Autum_animated.crc2.beginPath();
        canvas_Autum_animated.crc2.moveTo(54.736342, 18.720917);
        canvas_Autum_animated.crc2.bezierCurveTo(54.736342, 18.720917, 52.916009, 12.741333, 49.891822, 10.423583);
        canvas_Autum_animated.crc2.bezierCurveTo(46.867635, 8.105833, 46.965530, 9.243542, 46.965530, 9.243542);
        canvas_Autum_animated.crc2.bezierCurveTo(46.965530, 9.243542, 46.285551, 1.536229, 43.261364, 0.218604);
        canvas_Autum_animated.crc2.bezierCurveTo(40.237176, -1.099021, 41.486010, 12.365625, 41.486010, 12.365625);
        canvas_Autum_animated.crc2.bezierCurveTo(41.486010, 12.365625, 39.726530, 16.268229, 35.532885, 16.299979);
        canvas_Autum_animated.crc2.bezierCurveTo(31.339239, 16.331729, 22.282550, 32.069146, 28.460571, 35.807708);
        canvas_Autum_animated.crc2.bezierCurveTo(28.460571, 35.807708, 20.504550, 33.225375, 19.993904, 26.917708);
        canvas_Autum_animated.crc2.bezierCurveTo(19.676404, 23.001875, 5.074051, 22.816667, 0.885697, 31.865417);
        canvas_Autum_animated.crc2.bezierCurveTo(-3.302658, 40.914167, 11.294404, 43.771667, 11.294404, 43.771667);
        canvas_Autum_animated.crc2.lineTo(7.936842, 38.284208);
        canvas_Autum_animated.crc2.bezierCurveTo(7.558488, 37.667729, 6.809717, 34.786417, 7.323009, 34.275771);
        canvas_Autum_animated.crc2.bezierCurveTo(8.466009, 33.132771, 12.416238, 29.653500, 18.366717, 38.019625);
        canvas_Autum_animated.crc2.bezierCurveTo(22.544488, 43.888083, 28.881259, 41.819042, 31.963655, 41.586208);
        canvas_Autum_animated.crc2.bezierCurveTo(33.492947, 41.469792, 35.776301, 34.707042, 36.755260, 33.524354);
        canvas_Autum_animated.crc2.lineTo(45.370093, 29.478875);
        canvas_Autum_animated.crc2.lineTo(47.857176, 27.960167);
        canvas_Autum_animated.crc2.bezierCurveTo(49.127176, 27.034125, 51.069217, 26.425583, 51.643363, 25.528646);
        canvas_Autum_animated.crc2.bezierCurveTo(51.643363, 25.528646, 53.307592, 21.753042, 49.180093, 20.800542);
        canvas_Autum_animated.crc2.bezierCurveTo(48.674739, 20.684125, 51.296759, 20.231687, 51.296759, 20.231687);
        canvas_Autum_animated.crc2.lineTo(51.090384, 19.702521);
        canvas_Autum_animated.crc2.lineTo(53.016550, 19.660191);
        canvas_Autum_animated.crc2.bezierCurveTo(53.016550, 19.660191, 52.632904, 18.567462, 54.019321, 19.395608);
        canvas_Autum_animated.crc2.bezierCurveTo(55.405738, 20.223754, 54.736342, 18.720921, 54.736342, 18.720921);
        canvas_Autum_animated.crc2.closePath();
        canvas_Autum_animated.crc2.strokeStyle = "black";
        canvas_Autum_animated.crc2.fillStyle = "brown";
        canvas_Autum_animated.crc2.stroke();
        canvas_Autum_animated.crc2.fill();
        canvas_Autum_animated.crc2.translate(0, 0);
        canvas_Autum_animated.crc2.restore();
        canvas_Autum_animated.crc2.setTransform(1, 0, 0, 1, 0, 0);
        canvas_Autum_animated.crc2.beginPath();
    }
    canvas_Autum_animated.drawbody = drawbody;
    function drawarm(_transX, _transY, _scale) {
        canvas_Autum_animated.crc2.scale(_scale, _scale);
        canvas_Autum_animated.crc2.translate(_transX, _transY);
        canvas_Autum_animated.crc2.rotate(((Math.random() * 90) * Math.PI / 180));
        //crc2.clearRect(0,0,canvas.width,canvas.height);
        canvas_Autum_animated.crc2.beginPath();
        canvas_Autum_animated.crc2.moveTo(4.421410, -0.000007);
        canvas_Autum_animated.crc2.bezierCurveTo(4.172701, 1.058326, 1.849660, 4.918597, -1.798944, 2.939513);
        canvas_Autum_animated.crc2.bezierCurveTo(-5.055965, 1.174743, -3.688069, -2.603507, -1.608444, -3.635382);
        canvas_Autum_animated.crc2.bezierCurveTo(-0.648007, -4.108986, 0.659035, -3.524257, 1.730597, -3.524257);
        canvas_Autum_animated.crc2.lineTo(4.019243, -4.000507);
        canvas_Autum_animated.crc2.bezierCurveTo(4.108122, -4.000006, 4.196807, -4.008875, 4.283826, -4.026967);
        canvas_Autum_animated.crc2.bezierCurveTo(4.908243, -4.156613, 7.794848, -4.616988, 9.162743, -2.344217);
        canvas_Autum_animated.crc2.bezierCurveTo(9.657514, -1.521363, 9.615181, -0.865196, 9.332077, -0.351905);
        canvas_Autum_animated.crc2.lineTo(8.622993, -1.333509);
        canvas_Autum_animated.crc2.lineTo(8.540973, -0.166696);
        canvas_Autum_animated.crc2.lineTo(7.686368, -1.111259);
        canvas_Autum_animated.crc2.lineTo(7.630808, -0.105842);
        canvas_Autum_animated.crc2.lineTo(7.075183, -1.042467);
        canvas_Autum_animated.crc2.bezierCurveTo(7.075183, -1.042467, 4.852683, -1.833571, 4.421412, -0.000009);
        canvas_Autum_animated.crc2.closePath();
        canvas_Autum_animated.crc2.strokeStyle = "black";
        canvas_Autum_animated.crc2.fillStyle = "brown";
        canvas_Autum_animated.crc2.stroke();
        canvas_Autum_animated.crc2.fill();
        canvas_Autum_animated.crc2.translate(0, 0);
        canvas_Autum_animated.crc2.restore();
        canvas_Autum_animated.crc2.setTransform(1, 0, 0, 1, 0, 0);
    }
    canvas_Autum_animated.drawarm = drawarm;
    function drawleg(_transX, _transY, _scale) {
        //crc2.restore();
        canvas_Autum_animated.crc2.scale(_scale, _scale);
        canvas_Autum_animated.crc2.translate(_transX - 10, _transY + 8);
        canvas_Autum_animated.crc2.rotate(((Math.random() * 40) * -1 * Math.PI / 180));
        //crc2.clearRect(0,0,canvas.width,canvas.height);
        canvas_Autum_animated.crc2.beginPath();
        canvas_Autum_animated.crc2.lineWidth = 2;
        canvas_Autum_animated.crc2.moveTo(4.406565, 12.746717);
        canvas_Autum_animated.crc2.bezierCurveTo(4.889021, 12.744424, 5.336148, 12.493353, 5.589252, 12.082613);
        canvas_Autum_animated.crc2.bezierCurveTo(6.084023, 11.270342, 6.160752, 9.910384, 1.911544, 9.233050);
        canvas_Autum_animated.crc2.bezierCurveTo(-3.014998, 8.439300, 1.969754, 3.713842, 4.361585, 1.697717);
        canvas_Autum_animated.crc2.bezierCurveTo(5.351423, 0.874615, 5.882613, -0.375997, 5.787690, -1.659846);
        canvas_Autum_animated.crc2.bezierCurveTo(5.634231, -3.559554, 4.313960, -5.549221, -1.377227, -3.485471);
        canvas_Autum_animated.crc2.bezierCurveTo(-1.439934, -3.462456, -1.500939, -3.435048, -1.559790, -3.403451);
        canvas_Autum_animated.crc2.bezierCurveTo(-2.170977, -3.075368, -5.562936, -1.125388, -5.081394, 2.094591);
        canvas_Autum_animated.crc2.bezierCurveTo(-4.718915, 4.552570, -5.478269, 8.788549, -5.975686, 11.153924);
        canvas_Autum_animated.crc2.bezierCurveTo(-6.064178, 11.573267, -5.957172, 12.010097, -5.684884, 12.341063);
        canvas_Autum_animated.crc2.bezierCurveTo(-5.412596, 12.672030, -5.004577, 12.861214, -4.576040, 12.855195);
        canvas_Autum_animated.crc2.closePath();
        canvas_Autum_animated.crc2.strokeStyle = "black";
        canvas_Autum_animated.crc2.fillStyle = "brown";
        canvas_Autum_animated.crc2.stroke();
        canvas_Autum_animated.crc2.fill();
        canvas_Autum_animated.crc2.restore();
        canvas_Autum_animated.crc2.setTransform(1, 0, 0, 1, 0, 0);
    }
    canvas_Autum_animated.drawleg = drawleg;
    function drawTreewood(_x, _y, _scale) {
        canvas_Autum_animated.crc2.moveTo(-24.478345, -53.935685);
        canvas_Autum_animated.crc2.bezierCurveTo(-25.795416, -54.370831, -27.030138, -55.076386, -28.176666, -55.781942);
        canvas_Autum_animated.crc2.bezierCurveTo(-26.941944, -54.899997, -25.530833, -54.106247, -24.119722, -53.400691);
        canvas_Autum_animated.crc2.bezierCurveTo(-26.589166, -53.753470, -29.058611, -53.488891, -31.351666, -52.871524);
        canvas_Autum_animated.crc2.bezierCurveTo(-27.471111, -53.312497, -20.503749, -53.136108, -20.856527, -47.844441);
        canvas_Autum_animated.crc2.bezierCurveTo(-24.296111, -50.490274, -31.087083, -49.431941, -28.264861, -52.165970);
        canvas_Autum_animated.crc2.bezierCurveTo(-29.146805, -51.636804, -29.411388, -50.402081, -28.176661, -50.049304);
        canvas_Autum_animated.crc2.bezierCurveTo(-29.499578, -49.961104, -30.910689, -49.696524, -31.969023, -48.814581);
        canvas_Autum_animated.crc2.bezierCurveTo(-28.353055, -51.107637, -23.943333, -49.079164, -20.856527, -46.874304);
        canvas_Autum_animated.crc2.bezierCurveTo(-20.680138, -45.992358, -20.239166, -44.934024, -19.621805, -44.228470);
        canvas_Autum_animated.crc2.bezierCurveTo(-20.768333, -44.316660, -28.000277, -45.551387, -26.412777, -43.081941);
        canvas_Autum_animated.crc2.bezierCurveTo(-26.412777, -43.081941, -26.412777, -43.081941, -26.412777, -42.993751);
        canvas_Autum_animated.crc2.bezierCurveTo(-26.412777, -43.081941, -26.412777, -43.081941, -26.412777, -43.081941);
        canvas_Autum_animated.crc2.bezierCurveTo(-27.823888, -45.551387, -20.062777, -43.611108, -18.916249, -43.522914);
        canvas_Autum_animated.crc2.bezierCurveTo(-17.240555, -42.199997, -15.123888, -41.670831, -13.183611, -41.141664);
        canvas_Autum_animated.crc2.bezierCurveTo(-9.126665, -40.171524, -4.275972, -39.201387, -4.364165, -34.262497);
        canvas_Autum_animated.crc2.bezierCurveTo(-4.187778, -33.204164, -4.540555, -33.733331, -5.334305, -33.909720);
        canvas_Autum_animated.crc2.bezierCurveTo(-9.303055, -34.791664, -12.301665, -34.086108, -15.917638, -36.114581);
        canvas_Autum_animated.crc2.bezierCurveTo(-18.916249, -36.820137, -19.533611, -39.730554, -20.680138, -42.199997);
        canvas_Autum_animated.crc2.bezierCurveTo(-20.239166, -40.877081, -19.709999, -39.465970, -19.180833, -38.143054);
        canvas_Autum_animated.crc2.bezierCurveTo(-20.944722, -39.730554, -22.708611, -41.318054, -24.472499, -42.905554);
        canvas_Autum_animated.crc2.bezierCurveTo(-23.149583, -41.582637, -21.826666, -40.259720, -20.591944, -38.848608);
        canvas_Autum_animated.crc2.bezierCurveTo(-22.003055, -39.113191, -23.414166, -39.024997, -24.825277, -38.936808);
        canvas_Autum_animated.crc2.bezierCurveTo(-18.563472, -39.377778, -20.062777, -36.555558, -15.564861, -34.350695);
        canvas_Autum_animated.crc2.bezierCurveTo(-23.502361, -33.645137, -33.380139, -38.143054, -29.146805, -47.579858);
        canvas_Autum_animated.crc2.bezierCurveTo(-30.205138, -45.286804, -30.734305, -42.729164, -30.205138, -40.259720);
        canvas_Autum_animated.crc2.bezierCurveTo(-31.880833, -42.111804, -33.203750, -44.316664, -34.614861, -46.433331);
        canvas_Autum_animated.crc2.bezierCurveTo(-32.586389, -41.935414, -30.205138, -37.261108, -26.059999, -34.350691);
        canvas_Autum_animated.crc2.bezierCurveTo(-28.970416, -34.791664, -39.112778, -35.497220, -40.347500, -37.966664);
        canvas_Autum_animated.crc2.bezierCurveTo(-39.730139, -36.026387, -35.761389, -35.761804, -33.997500, -35.056247);
        canvas_Autum_animated.crc2.bezierCurveTo(-36.996111, -35.232637, -39.730139, -33.115970, -37.613472, -30.117358);
        canvas_Autum_animated.crc2.bezierCurveTo(-40.523889, -36.555554, -30.910694, -34.262497, -27.559305, -33.645137);
        canvas_Autum_animated.crc2.bezierCurveTo(-30.469722, -33.380554, -33.732916, -31.616664, -33.997500, -28.353470);
        canvas_Autum_animated.crc2.bezierCurveTo(-32.145416, -35.497220, -23.325972, -32.586804, -18.210694, -31.616664);
        canvas_Autum_animated.crc2.bezierCurveTo(-13.712778, -31.175691, -9.214861, -31.704854, -4.981528, -30.293747);
        canvas_Autum_animated.crc2.bezierCurveTo(-6.304445, -23.590970, -4.011388, -17.064581, -4.540555, -10.449997);
        canvas_Autum_animated.crc2.bezierCurveTo(-4.981528, -6.393053, -4.011388, -1.630553, -7.891945, 1.015281);
        canvas_Autum_animated.crc2.bezierCurveTo(-12.830832, 1.279864, -18.651666, 1.544447, -19.445416, 7.629864);
        canvas_Autum_animated.crc2.bezierCurveTo(-19.092638, 7.188893, -18.739861, 6.747920, -18.387083, 6.395143);
        canvas_Autum_animated.crc2.lineTo(-18.387083, 6.483333);
        canvas_Autum_animated.crc2.lineTo(-18.387083, 6.483333);
        canvas_Autum_animated.crc2.bezierCurveTo(-16.446805, 4.013889, -9.744028, 6.306943, -5.598888, 3.749306);
        canvas_Autum_animated.crc2.bezierCurveTo(-6.480832, 4.631250, -7.450972, 6.924306, -5.598888, 7.277083);
        canvas_Autum_animated.crc2.bezierCurveTo(-7.450972, 5.248610, -1.365555, 5.513193, -0.659999, 3.220139);
        canvas_Autum_animated.crc2.bezierCurveTo(1.103889, 4.543056, 3.044168, 4.631250, 5.072639, 4.543056);
        canvas_Autum_animated.crc2.bezierCurveTo(7.806668, 5.425000, 10.628889, 5.865973, 13.451112, 6.130556);
        canvas_Autum_animated.crc2.bezierCurveTo(11.951805, 4.895833, 10.364305, 3.661110, 8.688612, 2.602777);
        canvas_Autum_animated.crc2.bezierCurveTo(12.480972, 3.308333, 16.449722, 3.661110, 19.801112, 5.601389);
        canvas_Autum_animated.crc2.bezierCurveTo(16.185139, 1.279860, 10.452501, -0.572223, 4.984445, -1.277777);
        canvas_Autum_animated.crc2.bezierCurveTo(2.603195, -11.243751, 4.984445, -21.386112, 3.926112, -31.440278);
        canvas_Autum_animated.crc2.bezierCurveTo(8.071251, -36.467362, 15.655972, -32.763195, 21.212222, -32.498612);
        canvas_Autum_animated.crc2.lineTo(21.212222, -32.498612);
        canvas_Autum_animated.crc2.lineTo(21.212222, -32.498612);
        canvas_Autum_animated.crc2.bezierCurveTo(19.183751, -33.115974, 17.067085, -33.733335, 15.038612, -34.262501);
        canvas_Autum_animated.crc2.bezierCurveTo(21.741389, -34.968058, 22.005972, -36.379168, 28.091389, -32.057641);
        canvas_Autum_animated.crc2.lineTo(28.091389, -32.057641);
        canvas_Autum_animated.crc2.bezierCurveTo(26.415695, -33.380554, 24.828195, -35.232637, 22.623335, -35.761804);
        canvas_Autum_animated.crc2.bezierCurveTo(26.062918, -37.525691, 29.502501, -40.347914, 33.559445, -38.936804);
        canvas_Autum_animated.crc2.bezierCurveTo(32.148335, -39.465970, 30.560835, -39.642358, 29.061528, -39.465970);
        canvas_Autum_animated.crc2.bezierCurveTo(30.913612, -40.524304, 32.765695, -41.582637, 34.617778, -42.729164);
        canvas_Autum_animated.crc2.bezierCurveTo(30.472639, -40.965274, 30.472639, -40.965274, 30.472639, -40.965274);
        canvas_Autum_animated.crc2.bezierCurveTo(30.119862, -40.877084, 30.119862, -40.877084, 30.119862, -40.877084);
        canvas_Autum_animated.crc2.bezierCurveTo(31.619168, -42.552777, 32.765695, -44.493057, 33.912222, -46.521527);
        canvas_Autum_animated.crc2.lineTo(33.912222, -46.521527);
        canvas_Autum_animated.crc2.bezierCurveTo(31.001805, -42.640973, 29.149722, -39.818750, 24.299028, -38.407640);
        canvas_Autum_animated.crc2.bezierCurveTo(24.916389, -40.788890, 22.270555, -41.759027, 20.506668, -42.288194);
        canvas_Autum_animated.crc2.bezierCurveTo(22.182362, -41.582640, 24.828195, -40.436111, 23.769862, -38.231250);
        canvas_Autum_animated.crc2.bezierCurveTo(21.653195, -37.084723, 19.095555, -36.820140, 16.626112, -36.820140);
        canvas_Autum_animated.crc2.bezierCurveTo(13.627501, -37.525694, 6.483751, -35.585417, 9.129585, -37.261111);
        canvas_Autum_animated.crc2.bezierCurveTo(12.304585, -39.201390, 15.215001, -41.494444, 18.478195, -43.258334);
        canvas_Autum_animated.crc2.bezierCurveTo(18.390005, -43.170144, 18.390005, -43.170144, 18.301805, -43.081944);
        canvas_Autum_animated.crc2.bezierCurveTo(21.917778, -45.551390, 25.533751, -44.316667, 29.149722, -42.640973);
        canvas_Autum_animated.crc2.bezierCurveTo(27.474028, -43.522917, 25.798335, -44.404861, 24.034445, -45.022223);
        canvas_Autum_animated.crc2.bezierCurveTo(26.239305, -45.551390, 28.532362, -45.727777, 30.825418, -45.904167);
        canvas_Autum_animated.crc2.bezierCurveTo(29.943472, -45.904167, 28.973335, -46.080557, 28.091389, -46.080557);
        canvas_Autum_animated.crc2.bezierCurveTo(30.119862, -46.697917, 32.060139, -47.844444, 32.589305, -49.961111);
        canvas_Autum_animated.crc2.bezierCurveTo(30.472639, -45.198611, 24.122639, -46.697917, 19.889305, -45.463194);
        canvas_Autum_animated.crc2.bezierCurveTo(18.213612, -44.934027, 15.479585, -42.993750, 17.331668, -47.227084);
        canvas_Autum_animated.crc2.bezierCurveTo(18.919168, -52.165973, 24.210835, -57.545834, 29.502501, -54.106250);
        canvas_Autum_animated.crc2.bezierCurveTo(28.091389, -55.164584, 26.239305, -55.693750, 24.475418, -55.429167);
        canvas_Autum_animated.crc2.bezierCurveTo(25.621945, -56.046528, 26.680278, -56.752084, 27.826805, -57.369445);
        canvas_Autum_animated.crc2.bezierCurveTo(25.886528, -56.575695, 24.122639, -55.517361, 22.270555, -54.723611);
        canvas_Autum_animated.crc2.bezierCurveTo(24.034445, -56.663889, 26.062918, -58.427778, 28.179585, -60.103473);
        canvas_Autum_animated.crc2.bezierCurveTo(25.269168, -58.427778, 22.446945, -56.487500, 20.065695, -54.194444);
        canvas_Autum_animated.crc2.bezierCurveTo(20.683055, -55.870139, 21.300418, -57.634028, 22.005972, -59.397917);
        canvas_Autum_animated.crc2.bezierCurveTo(21.124028, -57.457639, 20.242085, -55.517361, 19.360139, -53.488890);
        canvas_Autum_animated.crc2.bezierCurveTo(17.860835, -51.989584, 16.537918, -50.225694, 15.655972, -48.197223);
        canvas_Autum_animated.crc2.bezierCurveTo(15.391389, -48.814584, 15.038612, -49.343750, 14.685835, -49.872917);
        canvas_Autum_animated.crc2.bezierCurveTo(15.038612, -49.255557, 15.303195, -48.550000, 15.479585, -47.844444);
        canvas_Autum_animated.crc2.bezierCurveTo(14.509445, -43.081944, 14.421251, -42.111807, 9.482362, -40.259723);
        canvas_Autum_animated.crc2.bezierCurveTo(12.480972, -43.170140, 9.746945, -45.463194, 13.892085, -48.373611);
        canvas_Autum_animated.crc2.bezierCurveTo(12.657362, -47.579861, 11.334445, -46.521527, 10.805278, -45.022223);
        canvas_Autum_animated.crc2.bezierCurveTo(10.717088, -45.375000, 10.628889, -45.727777, 10.628889, -46.080557);
        canvas_Autum_animated.crc2.lineTo(10.628889, -46.080557);
        canvas_Autum_animated.crc2.bezierCurveTo(11.510835, -41.670834, 7.277501, -39.113194, 3.573335, -38.143057);
        canvas_Autum_animated.crc2.bezierCurveTo(1.368472, -37.613890, 1.280278, -36.555557, 0.927501, -38.231247);
        canvas_Autum_animated.crc2.bezierCurveTo(0.751112, -38.936804, 0.662918, -39.730554, 0.751112, -40.524304);
        canvas_Autum_animated.crc2.bezierCurveTo(0.574722, -43.522914, 2.779585, -45.286804, 5.249028, -46.433331);
        canvas_Autum_animated.crc2.bezierCurveTo(7.983055, -47.932637, 10.628889, -49.608331, 13.010139, -51.636804);
        canvas_Autum_animated.crc2.bezierCurveTo(18.037222, -55.164581, 17.508055, -62.308331, 21.388612, -60.456247);
        canvas_Autum_animated.crc2.bezierCurveTo(20.418472, -61.161803, 19.007362, -60.809025, 18.301805, -59.838886);
        canvas_Autum_animated.crc2.bezierCurveTo(18.742778, -61.779164, 18.919168, -63.719442, 18.830972, -65.747914);
        canvas_Autum_animated.crc2.bezierCurveTo(19.095555, -59.574303, 15.744168, -54.018054, 10.540695, -50.843054);
        canvas_Autum_animated.crc2.bezierCurveTo(12.921945, -53.577081, 15.303195, -57.016664, 14.597639, -60.720831);
        canvas_Autum_animated.crc2.bezierCurveTo(15.038612, -61.779164, 15.567778, -62.749303, 16.537918, -63.366664);
        canvas_Autum_animated.crc2.bezierCurveTo(15.655972, -62.837497, 15.038612, -61.955553, 14.597639, -61.073608);
        canvas_Autum_animated.crc2.bezierCurveTo(13.715695, -62.749303, 12.657362, -63.984025, 13.892085, -65.924303);
        canvas_Autum_animated.crc2.bezierCurveTo(15.920555, -69.804858, 19.360139, -72.715275, 22.711528, -75.537498);
        canvas_Autum_animated.crc2.lineTo(22.711528, -75.537498);
        canvas_Autum_animated.crc2.lineTo(22.711528, -75.537498);
        canvas_Autum_animated.crc2.bezierCurveTo(19.007362, -72.538887, 14.685835, -69.540275, 12.745555, -64.954164);
        canvas_Autum_animated.crc2.bezierCurveTo(12.745555, -68.305553, 14.421251, -71.480553, 16.096945, -74.302775);
        canvas_Autum_animated.crc2.bezierCurveTo(7.101112, -61.690970, 18.037222, -63.278470, 11.599028, -53.929858);
        canvas_Autum_animated.crc2.bezierCurveTo(12.304585, -55.340970, 7.718472, -61.779164, 7.012918, -59.309720);
        canvas_Autum_animated.crc2.bezierCurveTo(7.453889, -60.985414, 9.305972, -58.163192, 9.835139, -57.545831);
        canvas_Autum_animated.crc2.bezierCurveTo(14.068472, -52.342358, 5.866389, -48.461804, 2.074028, -46.168747);
        canvas_Autum_animated.crc2.bezierCurveTo(2.691389, -48.109024, 3.396945, -50.049304, 3.661528, -52.077774);
        canvas_Autum_animated.crc2.bezierCurveTo(4.278889, -54.459025, 3.220555, -57.193053, 4.455278, -59.397914);
        canvas_Autum_animated.crc2.bezierCurveTo(5.425418, -61.161803, 7.012918, -62.484720, 7.894862, -64.248608);
        canvas_Autum_animated.crc2.bezierCurveTo(8.953195, -66.100692, 10.540695, -65.924303, 11.422639, -64.072220);
        canvas_Autum_animated.crc2.lineTo(11.422639, -64.072220);
        canvas_Autum_animated.crc2.bezierCurveTo(11.334449, -65.306942, 10.187918, -66.806247, 8.865001, -66.453470);
        canvas_Autum_animated.crc2.bezierCurveTo(9.746945, -69.363886, 9.658751, -72.362498, 9.305972, -75.361109);
        canvas_Autum_animated.crc2.bezierCurveTo(9.305972, -73.420831, 9.129585, -71.568748, 8.688612, -69.716664);
        canvas_Autum_animated.crc2.bezierCurveTo(8.247639, -70.686803, 7.542085, -71.392359, 6.748335, -72.097914);
        canvas_Autum_animated.crc2.bezierCurveTo(10.628889, -68.658331, 6.395555, -64.777775, 3.926112, -62.043747);
        canvas_Autum_animated.crc2.bezierCurveTo(4.102501, -66.629858, 2.338612, -73.685414, 7.806668, -75.713887);
        canvas_Autum_animated.crc2.bezierCurveTo(7.189305, -75.537498, 6.571945, -75.272914, 5.954585, -75.008331);
        canvas_Autum_animated.crc2.bezierCurveTo(7.012918, -76.243053, 8.247639, -78.977081, 5.690001, -79.241664);
        canvas_Autum_animated.crc2.bezierCurveTo(9.746945, -77.918748, 4.014305, -74.302775, 3.749722, -72.186109);
        canvas_Autum_animated.crc2.bezierCurveTo(3.661532, -75.096525, 3.661532, -78.006942, 3.661532, -80.917359);
        canvas_Autum_animated.crc2.bezierCurveTo(3.308755, -78.271525, 3.044172, -75.713887, 2.691393, -73.068053);
        canvas_Autum_animated.crc2.bezierCurveTo(1.985839, -75.625692, 0.486532, -77.830553, -1.365551, -79.594442);
        canvas_Autum_animated.crc2.bezierCurveTo(0.486532, -77.301387, 1.721255, -74.479164, 1.985839, -71.480553);
        canvas_Autum_animated.crc2.bezierCurveTo(0.221949, -73.597220, -1.100968, -72.715275, -1.100968, -70.157636);
        canvas_Autum_animated.crc2.bezierCurveTo(-0.924578, -72.362498, 0.045559, -73.420831, 1.721255, -71.392359);
        canvas_Autum_animated.crc2.bezierCurveTo(2.779589, -68.658331, 1.721255, -65.483331, 1.721255, -62.661108);
        canvas_Autum_animated.crc2.bezierCurveTo(0.310143, -66.100692, -2.512078, -68.834720, -3.482218, -72.450692);
        canvas_Autum_animated.crc2.bezierCurveTo(-4.716941, -75.537498, -2.335691, -76.684025, -0.130828, -74.479164);
        canvas_Autum_animated.crc2.bezierCurveTo(-0.924578, -75.096525, -1.806524, -76.066664, -2.864857, -75.802081);
        canvas_Autum_animated.crc2.bezierCurveTo(-2.512078, -76.772220, -3.305828, -77.742359, -3.746801, -78.536109);
        canvas_Autum_animated.crc2.bezierCurveTo(-1.277357, -74.831942, -5.510691, -76.154859, -3.570411, -71.392359);
        canvas_Autum_animated.crc2.bezierCurveTo(-4.716941, -72.979859, -5.863468, -74.567359, -7.098191, -76.154859);
        canvas_Autum_animated.crc2.lineTo(-7.098191, -76.154859);
        canvas_Autum_animated.crc2.bezierCurveTo(-5.422495, -73.420831, -3.923191, -70.598608, -2.512078, -67.688192);
        canvas_Autum_animated.crc2.bezierCurveTo(-7.362774, -70.951387, -12.037078, -70.422220, -11.066941, -78.183331);
        canvas_Autum_animated.crc2.bezierCurveTo(-11.596107, -75.449303, -11.155131, -72.186109, -8.773884, -70.422220);
        canvas_Autum_animated.crc2.bezierCurveTo(-9.920411, -70.686803, -11.066941, -71.039581, -12.125274, -71.304164);
        canvas_Autum_animated.crc2.bezierCurveTo(-8.068328, -69.893053, -2.600274, -68.570136, -0.924578, -64.072220);
        canvas_Autum_animated.crc2.bezierCurveTo(-2.688468, -64.336803, -3.834995, -61.073608, -5.598884, -62.572914);
        canvas_Autum_animated.crc2.bezierCurveTo(-5.246107, -62.043747, -4.540551, -61.955553, -4.099578, -62.220136);
        canvas_Autum_animated.crc2.bezierCurveTo(-4.805134, -61.338192, -5.422495, -60.368053, -5.951661, -59.397914);
        canvas_Autum_animated.crc2.bezierCurveTo(-4.716941, -61.073608, -3.041245, -63.895831, -0.748191, -63.543053);
        canvas_Autum_animated.crc2.bezierCurveTo(1.192089, -59.221525, 1.985839, -54.547220, 0.133755, -50.049304);
        canvas_Autum_animated.crc2.bezierCurveTo(-0.659995, -52.342358, -1.894718, -55.340970, -4.364161, -56.222914);
        canvas_Autum_animated.crc2.bezierCurveTo(-5.157911, -56.222914, -5.863468, -55.605553, -6.745411, -55.517358);
        canvas_Autum_animated.crc2.lineTo(-6.745411, -55.517358);
        canvas_Autum_animated.crc2.bezierCurveTo(-3.305828, -56.840275, -2.688468, -54.459025, -1.453745, -51.724997);
        canvas_Autum_animated.crc2.bezierCurveTo(-3.394024, -52.695137, -7.450968, -53.488887, -8.068328, -55.693747);
        canvas_Autum_animated.crc2.bezierCurveTo(-7.980138, -54.018054, -5.598884, -53.400691, -4.364161, -52.518747);
        canvas_Autum_animated.crc2.bezierCurveTo(-6.216245, -52.783331, -8.509301, -52.165970, -8.862078, -50.137497);
        canvas_Autum_animated.crc2.bezierCurveTo(-7.803745, -53.400691, -3.482218, -52.254164, -1.189161, -51.019441);
        canvas_Autum_animated.crc2.bezierCurveTo(-0.571801, -49.343747, -0.483607, -47.579858, -1.453745, -46.080554);
        canvas_Autum_animated.crc2.bezierCurveTo(-1.894718, -44.140274, -2.600274, -42.111804, -2.600274, -40.083331);
        canvas_Autum_animated.crc2.bezierCurveTo(-2.423884, -38.760414, -3.482218, -40.877081, -3.746801, -41.229858);
        canvas_Autum_animated.crc2.bezierCurveTo(-7.450968, -45.904164, -13.359995, -48.638191, -16.005829, -54.018054);
        canvas_Autum_animated.crc2.bezierCurveTo(-15.035690, -57.986803, -10.449578, -58.427775, -10.361384, -53.665274);
        canvas_Autum_animated.crc2.lineTo(-10.361384, -53.665274);
        canvas_Autum_animated.crc2.bezierCurveTo(-10.361384, -55.252775, -10.890551, -57.369442, -12.742634, -57.457636);
        canvas_Autum_animated.crc2.bezierCurveTo(-10.625968, -58.780553, -7.803745, -58.427775, -6.128051, -56.487497);
        canvas_Autum_animated.crc2.bezierCurveTo(-7.274578, -57.810414, -9.038468, -58.692358, -10.714161, -58.515970);
        canvas_Autum_animated.crc2.bezierCurveTo(-8.862078, -60.279858, -8.685691, -63.190275, -8.685691, -65.659720);
        canvas_Autum_animated.crc2.bezierCurveTo(-8.862078, -57.545831, -11.772495, -59.574303, -16.623190, -55.781942);
        canvas_Autum_animated.crc2.bezierCurveTo(-17.240551, -60.897220, -15.123884, -65.836108, -12.566245, -70.157636);
        canvas_Autum_animated.crc2.bezierCurveTo(-14.771107, -67.159025, -16.975968, -64.072220, -17.857912, -60.456247);
        canvas_Autum_animated.crc2.bezierCurveTo(-20.239162, -64.954164, -23.237773, -63.719442, -21.032912, -70.422220);
        canvas_Autum_animated.crc2.lineTo(-21.032912, -70.422220);
        canvas_Autum_animated.crc2.bezierCurveTo(-21.826662, -68.393747, -22.532218, -65.836108, -21.209301, -63.807636);
        canvas_Autum_animated.crc2.bezierCurveTo(-21.914857, -64.248608, -22.532218, -64.601386, -23.149579, -65.042358);
        canvas_Autum_animated.crc2.bezierCurveTo(-17.152357, -61.073608, -18.739857, -60.456247, -18.298884, -54.282637);
        canvas_Autum_animated.crc2.bezierCurveTo(-20.591940, -56.134720, -30.293329, -56.134720, -27.294718, -60.544442);
        canvas_Autum_animated.crc2.bezierCurveTo(-26.500968, -61.514581, -25.178051, -63.895831, -23.766940, -62.925692);
        canvas_Autum_animated.crc2.bezierCurveTo(-24.560690, -63.895831, -25.795412, -62.484720, -26.412773, -61.955553);
        canvas_Autum_animated.crc2.bezierCurveTo(-25.530829, -63.895831, -26.148190, -66.277081, -27.559301, -67.864581);
        canvas_Autum_animated.crc2.bezierCurveTo(-25.442634, -65.395136, -26.148190, -62.220136, -28.176662, -60.015275);
        canvas_Autum_animated.crc2.bezierCurveTo(-29.058607, -62.484720, -32.409996, -62.396525, -34.614857, -62.043747);
        canvas_Autum_animated.crc2.lineTo(-34.614857, -62.043747);
        canvas_Autum_animated.crc2.bezierCurveTo(-32.498190, -62.220136, -29.323190, -62.308331, -28.529440, -59.927081);
        canvas_Autum_animated.crc2.bezierCurveTo(-28.264857, -59.133331, -28.882218, -58.074997, -28.088468, -57.457636);
        canvas_Autum_animated.crc2.bezierCurveTo(-25.001662, -55.076386, -21.032912, -54.635414, -17.769718, -52.695137);
        canvas_Autum_animated.crc2.bezierCurveTo(-16.270412, -48.902774, -13.183607, -46.168747, -10.361384, -43.434720);
        canvas_Autum_animated.crc2.bezierCurveTo(-13.712774, -43.787497, -16.799579, -44.669441, -18.916245, -47.491664);
        canvas_Autum_animated.crc2.bezierCurveTo(-19.092634, -49.079164, -19.357218, -51.019441, -20.856523, -51.989581);
        canvas_Autum_animated.crc2.moveTo(16.185143, -74.390970);
        canvas_Autum_animated.crc2.lineTo(16.185143, -74.390970);
        canvas_Autum_animated.crc2.lineTo(16.185143, -74.390970);
        canvas_Autum_animated.crc2.lineTo(16.185143, -74.390970);
        canvas_Autum_animated.crc2.moveTo(11.334445, -64.072220);
        canvas_Autum_animated.crc2.lineTo(11.334445, -64.072220);
        canvas_Autum_animated.crc2.lineTo(11.334445, -64.072220);
        canvas_Autum_animated.crc2.moveTo(6.924722, -59.221525);
        canvas_Autum_animated.crc2.bezierCurveTo(6.924722, -59.221525, 6.924722, -59.221525, 7.012922, -59.221525);
        canvas_Autum_animated.crc2.bezierCurveTo(6.924722, -59.221525, 6.924722, -59.221525, 6.924722, -59.221525);
        canvas_Autum_animated.crc2.moveTo(14.685835, -49.961108);
        canvas_Autum_animated.crc2.lineTo(14.685835, -49.872918);
        canvas_Autum_animated.crc2.lineTo(14.685835, -49.961108);
        canvas_Autum_animated.crc2.lineTo(14.685835, -49.961108);
        canvas_Autum_animated.crc2.moveTo(33.559445, -38.936804);
        canvas_Autum_animated.crc2.lineTo(33.559445, -38.936804);
        canvas_Autum_animated.crc2.lineTo(33.559445, -38.936804);
        canvas_Autum_animated.crc2.lineTo(33.559445, -38.936804);
        canvas_Autum_animated.crc2.fill();
        canvas_Autum_animated.crc2.setTransform(1, 0, 0, 1, 0, 0); //reset scale
    }
    canvas_Autum_animated.drawTreewood = drawTreewood;
    function drawcloud(_x, _y, _scale) {
        canvas_Autum_animated.crc2.translate(_x, _y); //erst verschieben
        canvas_Autum_animated.crc2.scale(_scale, _scale); //scale
        canvas_Autum_animated.crc2.beginPath();
        canvas_Autum_animated.crc2.moveTo(29.942321, -5.599199);
        canvas_Autum_animated.crc2.bezierCurveTo(32.323571, -6.481144, 33.734681, -7.539477, 33.734681, -8.774199);
        canvas_Autum_animated.crc2.bezierCurveTo(33.734681, -11.243643, 27.296487, -13.360310, 19.447181, -13.360310);
        canvas_Autum_animated.crc2.bezierCurveTo(16.977737, -13.360310, 14.772875, -13.183921, 12.744404, -12.831143);
        canvas_Autum_animated.crc2.bezierCurveTo(10.274958, -15.124199, 6.923571, -16.447115, 3.307598, -16.447115);
        canvas_Autum_animated.crc2.bezierCurveTo(-1.102125, -16.447115, -5.070875, -14.418643, -7.628513, -11.243643);
        canvas_Autum_animated.crc2.bezierCurveTo(-7.628513, -11.420032, -7.628513, -11.508227, -7.628513, -11.684615);
        canvas_Autum_animated.crc2.bezierCurveTo(-7.628513, -14.947810, -10.274346, -17.593643, -13.537541, -17.593643);
        canvas_Autum_animated.crc2.bezierCurveTo(-15.742402, -17.593643, -17.682680, -16.447115, -18.741013, -14.595032);
        canvas_Autum_animated.crc2.bezierCurveTo(-20.328513, -16.358921, -23.679902, -17.593643, -27.560458, -17.593643);
        canvas_Autum_animated.crc2.bezierCurveTo(-33.028514, -17.593643, -37.438236, -15.212393, -37.438236, -12.301977);
        canvas_Autum_animated.crc2.bezierCurveTo(-37.438236, -10.890865, -36.379902, -9.567949, -34.616014, -8.686004);
        canvas_Autum_animated.crc2.bezierCurveTo(-36.027125, -7.186699, -36.820875, -5.334616, -36.820875, -3.306144);
        canvas_Autum_animated.crc2.bezierCurveTo(-36.820875, 0.221634, -34.439625, 3.132051, -31.088236, 4.454968);
        canvas_Autum_animated.crc2.bezierCurveTo(-31.176426, 4.719551, -31.176426, 4.984134, -31.176426, 5.248718);
        canvas_Autum_animated.crc2.bezierCurveTo(-31.176426, 9.923022, -27.031287, 13.627189, -22.004204, 13.627189);
        canvas_Autum_animated.crc2.bezierCurveTo(-19.622954, 13.627189, -17.506287, 12.833439, -15.830593, 11.510522);
        canvas_Autum_animated.crc2.bezierCurveTo(-14.419482, 14.244552, -11.244482, 16.184829, -7.628509, 16.184829);
        canvas_Autum_animated.crc2.bezierCurveTo(-3.924342, 16.184829, -0.749342, 14.244552, 0.749962, 11.334135);
        canvas_Autum_animated.crc2.bezierCurveTo(0.926352, 11.334135, 1.102741, 11.422325, 1.279129, 11.422325);
        canvas_Autum_animated.crc2.bezierCurveTo(2.337462, 15.038298, 5.865241, 17.595935, 10.186768, 17.595935);
        canvas_Autum_animated.crc2.bezierCurveTo(13.626352, 17.595935, 16.536768, 15.920241, 18.212462, 13.450798);
        canvas_Autum_animated.crc2.bezierCurveTo(19.447185, 13.715381, 20.858295, 13.803575, 22.269408, 13.803575);
        canvas_Autum_animated.crc2.bezierCurveTo(30.736075, 13.803575, 37.527045, 9.129268, 37.527045, 3.396630);
        canvas_Autum_animated.crc2.bezierCurveTo(37.527045, -0.483925, 34.528435, -3.835314, 29.942325, -5.599203);
        canvas_Autum_animated.crc2.fill();
        canvas_Autum_animated.crc2.stroke();
        canvas_Autum_animated.crc2.setTransform(1, 0, 0, 1, 0, 0); //reset scale
    }
    canvas_Autum_animated.drawcloud = drawcloud;
})(canvas_Autum_animated || (canvas_Autum_animated = {}));
var canvas_Autum_animated;
(function (canvas_Autum_animated) {
    class Squirrel {
    }
    canvas_Autum_animated.Squirrel = Squirrel;
})(canvas_Autum_animated || (canvas_Autum_animated = {}));
var canvas_Autum_animated;
(function (canvas_Autum_animated) {
    class Tree {
        position;
        scale;
        type;
        color;
        leaf;
        origin;
        constructor(_scale, _type) {
            this.position = new canvas_Autum_animated.Vector(0, 0);
            this.setType(_type);
            this.setScale(_scale);
        }
        setType(_type) {
            this.type = _type;
        }
        setPosition(_x, _y) {
            this.position.x = _x;
            this.position.y = _y;
        }
        setScale(_scale) {
            this.scale = _scale;
        }
        draw() {
            canvas_Autum_animated.crc2.translate(this.position.x, this.position.y); //erst verschieben
            canvas_Autum_animated.crc2.scale(this.scale, this.scale); //scale
            canvas_Autum_animated.crc2.beginPath();
            canvas_Autum_animated.crc2.fillStyle = "rgb(83, 38, 16)";
            canvas_Autum_animated.crc2.lineWidth = 0.070004;
            canvas_Autum_animated.drawTreewood(0, 0, 5);
            canvas_Autum_animated.crc2.setTransform(1, 0, 0, 1, 0, 0); //reset scale
            for (let i = 0; i < 10; i++) { //draw leave 
                this.leaf = new canvas_Autum_animated.Leaf(1 * this.scale, this.type); //leaf with scale, type, color
                this.leaf.setPosition(this.position.x, this.position.y - 240 * this.scale);
                this.leaf.setRandomOrigin();
                this.leaf.setType(this.type);
                this.leaf.setRotation(((Math.random() * 360) * -1 * Math.PI / 180));
                this.leaf.draw();
                // drawleave1(this.position.x, this.position.y - (142 * 1), 0.5 * 1, Math.random() * 200, 0);
            }
        }
    }
    canvas_Autum_animated.Tree = Tree;
})(canvas_Autum_animated || (canvas_Autum_animated = {}));
var canvas_Autum_animated;
(function (canvas_Autum_animated) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    canvas_Autum_animated.Vector = Vector;
})(canvas_Autum_animated || (canvas_Autum_animated = {}));
//# sourceMappingURL=Build.js.map