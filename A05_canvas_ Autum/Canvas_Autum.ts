namespace Canvas {

  var cloud: HTMLImageElement = new Image();
  cloud.src = "SVG/cloud.svg";
  var forrest: HTMLImageElement = new Image();
  forrest.src = "SVG/tree_1.svg";
  let XX: number;
  let crc2: CanvasRenderingContext2D;
  //var img: HTMLImageElement = new Image();
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
    cloud.onload = function (): void {
      for (let i: number = 0; i < 5; i++) {
      let x: number = Math.random() * 1920;
      let y: number = Math.random() * 300;
      crc2.drawImage(cloud, x - 230, y, 460 , 320 );
      }
    };
    cloud.src = "SVG/cloud.svg";
    drawmoon();
    for (let i: number = 0; i < 10; i++) {
      let x: number = Math.random() * 1920;
      let y: number = Math.random() * 1080 / 2;
      drawhils(x, y);
    }
    drawfloor();
    //forrest.addEventListener("load", drawforrest);
    drawforrest();

    //img.src = "SVG/tree_1.svg";
   

    for (let i: number = 0; i < 10000; i++) {
      let x: number = Math.random() * 1920;
      let y: number = Math.random() * 1080 / 2;
      drawgrass(x, y);
    }
    let x: number = Math.random() * 1920;
    let y: number = Math.random() * 1;
    campfire(x, y);
  }
  function drawforrest(): void {
  forrest.src = "SVG/tree_1.svg";
  forrest.onload = function (): void {
    let scalefactor: number = 0.5;
    let layer: number = 400;
    for (let index: number = 0; index <= 2; index++) {
      for (let i: number = 0; i < 30; i++) {
        XX = Math.random() * 1920;
        crc2.drawImage(forrest, XX - 100 * scalefactor, layer, 239 * 1.5 * scalefactor , 268 * 1.5 * scalefactor );
        crc2.shadowColor = "black";
        crc2.shadowBlur = 120;
        //drawtree(XX, scalefactor, layer);
      }
      scalefactor += 0.1;
      layer += 10;
    }

    crc2.shadowColor = "#FFFFFF00";
    crc2.shadowBlur = 0;
  };
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

  
  function campfire(_x: number, _y: number): void {
    var img: HTMLImageElement = new Image();
    //var img: HTMLImageElement = new Image();
    img.onload = function (): void {
      crc2.drawImage(img, _x - 115, _y + 700, 460 / 2, 640 / 2);
    };
    //img.src = "SVG/campfire.svg";
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

}