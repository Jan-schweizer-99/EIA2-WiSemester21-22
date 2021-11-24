var Canvas_Autum;
(function (Canvas_Autum) {
    var cloud = new Image();
    cloud.src = "SVG/cloud.svg";
    var forrest = new Image();
    forrest.src = "SVG/tree_1.svg";
    var XX;
    var crc2;
    //var img: HTMLImageElement = new Image();
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        var canvas = document.querySelector("canvas");
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawsky();
        //stars
        for (var i = 0; i < 150; i++) {
            var x_1 = Math.random() * 1920;
            var y_1 = Math.random() * 540;
            var radius = Math.random() * 3;
            drawstars(x_1, y_1, radius);
        }
        cloud.onload = function () {
            for (var i = 0; i < 5; i++) {
                var x_2 = Math.random() * 1920;
                var y_2 = Math.random() * 300;
                crc2.drawImage(cloud, x_2 - 230, y_2, 460, 320);
            }
        };
        cloud.src = "SVG/cloud.svg";
        drawmoon();
        for (var i = 0; i < 10; i++) {
            var x_3 = Math.random() * 1920;
            var y_3 = Math.random() * 1080 / 2;
            drawhils(x_3, y_3);
        }
        drawfloor();
        drawforrest();
        for (var i = 0; i < 10000; i++) {
            var x_4 = Math.random() * 1920;
            var y_4 = Math.random() * 1080 / 2;
            drawgrass(x_4, y_4);
        }
        var x = Math.random() * 1920;
        var y = Math.random() * 1;
        campfire(x, y);
        for (var i = 0; i < 4; i++) {
            var transX = Math.random() * 1920 / 2 + 20;
            var transY = 500 - (Math.random() * 120);
            var scale = 2;
            drawsquirrel(transX, transY, scale);
        }
    }
    function drawforrest() {
        forrest.src = "SVG/tree_1.svg";
        forrest.onload = function () {
            var scalefactor = 0.5;
            var layer = 400;
            for (var index = 0; index <= 2; index++) {
                for (var i = 0; i < 30; i++) {
                    XX = Math.random() * 1920;
                    crc2.drawImage(forrest, XX - 100 * scalefactor, layer, 239 * 1.5 * scalefactor, 268 * 1.5 * scalefactor);
                    crc2.shadowColor = "black";
                    crc2.shadowBlur = 120;
                    //drawtree(XX, scalefactor, layer);
                }
                var transX = Math.random() * 1920 + 20;
                var transY = 600;
                var scale = 1;
                drawsquirrel(transX, transY, scale);
                scalefactor += 0.1;
                layer += 10;
            }
            crc2.shadowColor = "#FFFFFF00";
            crc2.shadowBlur = 0;
        };
    }
    function drawsquirrel(_transX, _transY, _scale) {
        drawarm(_transX, _transY, _scale);
        drawleg(_transX, _transY, _scale);
        drawbody(_transX, _transY, _scale);
        drawarm(_transX, _transY, _scale);
        drawleg(_transX, _transY, _scale);
        //drawlegfront
    }
    function drawbody(_transX, _transY, _scale) {
        crc2.save();
        crc2.scale(_scale, _scale);
        crc2.translate(_transX - 48, _transY - 25);
        crc2.rotate((0 * Math.PI / 180));
        //ctx.clearRect(0,0,canvas.width,canvas.height);
        crc2.beginPath();
        crc2.moveTo(54.736342, 18.720917);
        crc2.bezierCurveTo(54.736342, 18.720917, 52.916009, 12.741333, 49.891822, 10.423583);
        crc2.bezierCurveTo(46.867635, 8.105833, 46.965530, 9.243542, 46.965530, 9.243542);
        crc2.bezierCurveTo(46.965530, 9.243542, 46.285551, 1.536229, 43.261364, 0.218604);
        crc2.bezierCurveTo(40.237176, -1.099021, 41.486010, 12.365625, 41.486010, 12.365625);
        crc2.bezierCurveTo(41.486010, 12.365625, 39.726530, 16.268229, 35.532885, 16.299979);
        crc2.bezierCurveTo(31.339239, 16.331729, 22.282550, 32.069146, 28.460571, 35.807708);
        crc2.bezierCurveTo(28.460571, 35.807708, 20.504550, 33.225375, 19.993904, 26.917708);
        crc2.bezierCurveTo(19.676404, 23.001875, 5.074051, 22.816667, 0.885697, 31.865417);
        crc2.bezierCurveTo(-3.302658, 40.914167, 11.294404, 43.771667, 11.294404, 43.771667);
        crc2.lineTo(7.936842, 38.284208);
        crc2.bezierCurveTo(7.558488, 37.667729, 6.809717, 34.786417, 7.323009, 34.275771);
        crc2.bezierCurveTo(8.466009, 33.132771, 12.416238, 29.653500, 18.366717, 38.019625);
        crc2.bezierCurveTo(22.544488, 43.888083, 28.881259, 41.819042, 31.963655, 41.586208);
        crc2.bezierCurveTo(33.492947, 41.469792, 35.776301, 34.707042, 36.755260, 33.524354);
        crc2.lineTo(45.370093, 29.478875);
        crc2.lineTo(47.857176, 27.960167);
        crc2.bezierCurveTo(49.127176, 27.034125, 51.069217, 26.425583, 51.643363, 25.528646);
        crc2.bezierCurveTo(51.643363, 25.528646, 53.307592, 21.753042, 49.180093, 20.800542);
        crc2.bezierCurveTo(48.674739, 20.684125, 51.296759, 20.231687, 51.296759, 20.231687);
        crc2.lineTo(51.090384, 19.702521);
        crc2.lineTo(53.016550, 19.660191);
        crc2.bezierCurveTo(53.016550, 19.660191, 52.632904, 18.567462, 54.019321, 19.395608);
        crc2.bezierCurveTo(55.405738, 20.223754, 54.736342, 18.720921, 54.736342, 18.720921);
        crc2.closePath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "brown";
        crc2.stroke();
        crc2.fill();
        crc2.translate(0, 0);
        crc2.restore();
        crc2.setTransform(1, 0, 0, 1, 0, 0);
        crc2.beginPath();
    }
    function drawarm(_transX, _transY, _scale) {
        crc2.scale(_scale, _scale);
        crc2.translate(_transX, _transY);
        crc2.rotate(((Math.random() * 90) * Math.PI / 180));
        //ctx.clearRect(0,0,canvas.width,canvas.height);
        crc2.beginPath();
        crc2.moveTo(4.421410, -0.000007);
        crc2.bezierCurveTo(4.172701, 1.058326, 1.849660, 4.918597, -1.798944, 2.939513);
        crc2.bezierCurveTo(-5.055965, 1.174743, -3.688069, -2.603507, -1.608444, -3.635382);
        crc2.bezierCurveTo(-0.648007, -4.108986, 0.659035, -3.524257, 1.730597, -3.524257);
        crc2.lineTo(4.019243, -4.000507);
        crc2.bezierCurveTo(4.108122, -4.000006, 4.196807, -4.008875, 4.283826, -4.026967);
        crc2.bezierCurveTo(4.908243, -4.156613, 7.794848, -4.616988, 9.162743, -2.344217);
        crc2.bezierCurveTo(9.657514, -1.521363, 9.615181, -0.865196, 9.332077, -0.351905);
        crc2.lineTo(8.622993, -1.333509);
        crc2.lineTo(8.540973, -0.166696);
        crc2.lineTo(7.686368, -1.111259);
        crc2.lineTo(7.630808, -0.105842);
        crc2.lineTo(7.075183, -1.042467);
        crc2.bezierCurveTo(7.075183, -1.042467, 4.852683, -1.833571, 4.421412, -0.000009);
        crc2.closePath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "brown";
        crc2.stroke();
        crc2.fill();
        crc2.translate(0, 0);
        crc2.restore();
        crc2.setTransform(1, 0, 0, 1, 0, 0);
    }
    function drawleg(_transX, _transY, _scale) {
        //crc2.restore();
        crc2.scale(_scale, _scale);
        crc2.translate(_transX - 10, _transY + 8);
        crc2.rotate(((Math.random() * 40) * -1 * Math.PI / 180));
        //ctx.clearRect(0,0,canvas.width,canvas.height);
        crc2.beginPath();
        crc2.lineWidth = 2;
        crc2.moveTo(4.406565, 12.746717);
        crc2.bezierCurveTo(4.889021, 12.744424, 5.336148, 12.493353, 5.589252, 12.082613);
        crc2.bezierCurveTo(6.084023, 11.270342, 6.160752, 9.910384, 1.911544, 9.233050);
        crc2.bezierCurveTo(-3.014998, 8.439300, 1.969754, 3.713842, 4.361585, 1.697717);
        crc2.bezierCurveTo(5.351423, 0.874615, 5.882613, -0.375997, 5.787690, -1.659846);
        crc2.bezierCurveTo(5.634231, -3.559554, 4.313960, -5.549221, -1.377227, -3.485471);
        crc2.bezierCurveTo(-1.439934, -3.462456, -1.500939, -3.435048, -1.559790, -3.403451);
        crc2.bezierCurveTo(-2.170977, -3.075368, -5.562936, -1.125388, -5.081394, 2.094591);
        crc2.bezierCurveTo(-4.718915, 4.552570, -5.478269, 8.788549, -5.975686, 11.153924);
        crc2.bezierCurveTo(-6.064178, 11.573267, -5.957172, 12.010097, -5.684884, 12.341063);
        crc2.bezierCurveTo(-5.412596, 12.672030, -5.004577, 12.861214, -4.576040, 12.855195);
        crc2.closePath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "brown";
        crc2.stroke();
        crc2.fill();
        crc2.restore();
        crc2.setTransform(1, 0, 0, 1, 0, 0);
    }
    function drawhils(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x - 250 + 0, 1080 / 2);
        crc2.lineTo(_x - 250 + 250, _y);
        crc2.lineTo(_x - 250 + 500, 1080 / 2);
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
        if (_y <= 300) {
            crc2.beginPath();
            crc2.moveTo(_x + 125 - 250, 1080 / 4 + _y / 2);
            crc2.lineTo(_x + 250 - 250, _y);
            crc2.lineTo(_x + 375 - 250, 1080 / 4 + _y / 2);
            crc2.lineTo(_x + 325 - 250, 1080 / 4 + 50 + _y / 2);
            crc2.lineTo(_x + 250 - 250, 1080 / 4 - 50 + _y / 2);
            crc2.closePath();
            crc2.strokeStyle = "grey";
            crc2.lineWidth = 5;
            crc2.fillStyle = "white";
            crc2.stroke();
            crc2.fill();
        }
    }
    function drawsky() {
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(1920, 0);
        crc2.lineTo(1920, 1080);
        crc2.lineTo(0, 1080);
        crc2.closePath();
        crc2.fillStyle = "#252850";
        crc2.fill();
    }
    function drawfloor() {
        crc2.beginPath();
        crc2.moveTo(0, 1080 / 2);
        crc2.lineTo(1920, 1080 / 2);
        crc2.lineTo(1920, 1080);
        crc2.lineTo(0, 1080);
        crc2.closePath();
        crc2.fillStyle = "#35682d";
        crc2.fill();
    }
    function drawstars(_x, _y, _radius) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, _radius, 0, 2 * Math.PI, false);
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
    }
    function drawmoon() {
        crc2.beginPath();
        crc2.arc(60, 60, 150, 0, Math.PI * 2, false);
        //crc2.lineTo(_x, _y + 70);
        //crc2.lineTo(_x + 80, _y + 35);
        crc2.closePath();
        crc2.shadowColor = "#FFFFFF"; //drop shadow sieht kacke aus
        //crc2.shadowOffsetX = 0;
        //crc2.shadowOffsetY = 0;
        crc2.shadowBlur = 800;
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.shadowColor = "#FFFFFF00";
        crc2.shadowBlur = 0;
    }
    function campfire(_x, _y) {
        var img = new Image();
        //var img: HTMLImageElement = new Image();
        img.onload = function () {
            crc2.drawImage(img, _x - 115, _y + 700, 460 / 2, 640 / 2);
        };
        //img.src = "SVG/campfire.svg";
    }
    function drawgrass(_x, _y) {
        var grassdirection = Math.random() * 20;
        crc2.beginPath();
        crc2.moveTo(_x, _y + 1080 / 2);
        crc2.lineTo(_x, _y + grassdirection + 1080 / 2 + 25);
        crc2.closePath();
        crc2.strokeStyle = "green";
        crc2.lineWidth = 2;
        crc2.stroke();
    }
})(Canvas_Autum || (Canvas_Autum = {}));
//# sourceMappingURL=Canvas_Autum.js.map