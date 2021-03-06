namespace Canvas {
  let crc2: CanvasRenderingContext2D;
  var img: HTMLImageElement = new Image();

  window.addEventListener("load", hndLoad);

  function hndLoad(_event: Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    console.log(canvas);

    crc2 = canvas.getContext("2d")!;
    console.log(crc2);
    drawsky();
    //stars
    for (let i: number = 0; i < 150; i++) {
      let x: number = Math.random() * 1920;
      let y: number = Math.random() * 540;
      let radius: number = Math.random() * 3;
      drawstars(x, y, radius);
    }
    drawmoon();
    for (let i: number = 0; i < 10; i++) {
      let x: number = Math.random() * 1920;
      let y: number = Math.random() * 1080 / 2;
      drawhils(x, y);
    }
    drawfloor();

    for (let i: number = 0; i < 30; i++) {
      let scalefactor: number = 0.5;
      let layer: number = 400;
      let x: number = Math.random() * 1920;
      drawtree1(x, scalefactor, layer);
    }
    for (let i: number = 0; i < 30; i++) {
      let scalefactor: number = 0.7;
      let layer: number = 420;
      let x: number = Math.random() * 1920;
      drawtree2(x, scalefactor, layer);
    }
    for (let i: number = 0; i < 30; i++) {
      let scalefactor: number = 0.8;
      let layer: number = 430;
      let x: number = Math.random() * 1920;
      drawtree3(x, scalefactor, layer);
    }
    for (let i: number = 0; i < 30; i++) {
      let scalefactor: number = 0.9;
      let layer: number = 440;
      let x: number = Math.random() * 1920;
      drawtree4(x, scalefactor, layer);
    }
    for (let i: number = 0; i < 10000; i++) {
      let x: number = Math.random() * 1920;
      let y: number = Math.random() * 1080 / 2;
      drawgrass(x, y);
    }
    let x: number = Math.random() * 1920;
    let y: number = Math.random() * 1;
    campfire(x, y);
    //Rahmen();
    Rahmengenarativ();
  }
  function drawhils(_x: number, _y: number): void {    //blauer Abendhintergrund
    crc2.beginPath();
    crc2.moveTo(_x - 250 + 0, 1080 / 2 );
    crc2.lineTo(_x - 250 + 250, _y);
    crc2.lineTo(_x - 250 + 500, 1080 / 2 );
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
      crc2.moveTo(_x + 125 - 250 , 1080 / 4 + _y / 2);
      crc2.lineTo(_x + 250 - 250 , _y);
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

  function drawsky(): void {    //blauer Abendhintergrund
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(1920, 0);
    crc2.lineTo(1920, 1080);
    crc2.lineTo(0, 1080);
    crc2.closePath();

    crc2.fillStyle = "#252850";
    crc2.fill();
  }
  function drawfloor(): void {    //blauer Abendhintergrund
    crc2.beginPath();
    crc2.moveTo(0, 1080 / 2);
    crc2.lineTo(1920, 1080 / 2);
    crc2.lineTo(1920, 1080);
    crc2.lineTo(0, 1080);
    crc2.closePath();

    crc2.fillStyle = "#35682d";
    crc2.fill();
  }
  function drawstars(_x: number, _y: number, _radius: number): void {
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
  function drawmoon(): void {
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
  function drawtree1(_x: number, _scalefactor: number, _layer: number): void {
    var img: HTMLImageElement = new Image();
    img.onload = function (): void {
      crc2.drawImage(img, _x - 100 * _scalefactor, _layer, 455 / 2 * _scalefactor , 781 / 2 * _scalefactor );
      crc2.shadowColor = "black";
      crc2.shadowBlur = 120;
    };
    img.src = "SVG/tree_1.svg";
    crc2.shadowColor = "#FFFFFF00";
    crc2.shadowBlur = 0;
  }
  function drawtree2(_x: number, _scalefactor: number, _layer: number): void {
    var img: HTMLImageElement = new Image();
    img.onload = function (): void {
      crc2.drawImage(img, _x - 100 * _scalefactor, _layer, 455 / 2 * _scalefactor , 781 / 2 * _scalefactor );
      crc2.shadowColor = "black";
      crc2.shadowBlur = 120;
    };
    img.src = "SVG/tree_2.svg";
    crc2.shadowColor = "#FFFFFF00";
    crc2.shadowBlur = 0;
  }
  function drawtree3(_x: number, _scalefactor: number, _layer: number): void {
    var img: HTMLImageElement = new Image();
    img.onload = function (): void {
      crc2.drawImage(img, _x - 100 * _scalefactor, _layer, 455 / 2 * _scalefactor , 781 / 2 * _scalefactor );
      crc2.shadowColor = "black";
      crc2.shadowBlur = 120;
    };
    img.src = "SVG/tree_3.svg";
    crc2.shadowColor = "#FFFFFF00";
    crc2.shadowBlur = 0;
  }
  function drawtree4(_x: number, _scalefactor: number, _layer: number): void {
    var img: HTMLImageElement = new Image();
    img.onload = function (): void {
      crc2.drawImage(img, _x - 100 * _scalefactor, _layer, 455 / 2 * _scalefactor , 781 / 2 * _scalefactor );
      crc2.shadowColor = "black";
      crc2.shadowBlur = 120;
    };
    img.src = "SVG/tree_4.svg";
    crc2.shadowColor = "#FFFFFF00";
    crc2.shadowBlur = 0;
  }
  function campfire(_x: number, _y: number): void {
    var img: HTMLImageElement = new Image();
    img.onload = function (): void {
      crc2.drawImage(img, _x - 115, _y + 700, 460 / 2, 640 / 2);
    };
    img.src = "SVG/campfire.svg";
  }
  function drawgrass (_x: number, _y: number): void {
    let grassdirection: number = Math.random() * 20;

    crc2.beginPath();
    crc2.moveTo(_x , _y + 1080 / 2);
    crc2.lineTo(_x  , _y + grassdirection + 1080 / 2 + 25);
    crc2.closePath();

    crc2.strokeStyle = "green";
    crc2.lineWidth = 2;
    crc2.stroke();
  }
  function Rahmen(): void {
    var img: HTMLImageElement = new Image();
    img.onload = function (): void {
      crc2.shadowColor = "#FFFFFF00";
      crc2.shadowBlur = 0;
      crc2.drawImage(img, 0, 0, 1920, 1080);
    };
    img.src = "SVG/Rahmen.svg";
  }
  function Rahmengenarativ(): void {
    for (let index: number = 1; index <= 24; index++) {
      crc2.beginPath();
      crc2.arc(80 * index - 40, 1080 , 40, 0, Math.PI * 2, false);
      //crc2.lineTo(_x, _y + 70);
      //crc2.lineTo(_x + 80, _y + 35);
      crc2.fillStyle = "yellow";
      crc2.strokeStyle = "black";
      crc2.lineWidth = 5;
      crc2.fill();
      crc2.stroke();
      crc2.closePath();
    }
    for (let index: number = 1; index <= 24; index++) {
      crc2.beginPath();
      crc2.arc(80 * index - 40, 0, 40, 0, Math.PI * 2, false);
      //crc2.lineTo(_x, _y + 70);
      //crc2.lineTo(_x + 80, _y + 35);
      crc2.fillStyle = "yellow";
      crc2.strokeStyle = "black";
      crc2.lineWidth = 5;
      crc2.fill();
      crc2.stroke();
      crc2.closePath();
      
    }

  }

}