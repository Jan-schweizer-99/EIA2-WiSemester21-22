/*
Aufgabe: Aufgabe 08 Canvas
Name: Jan Schweizer
Matrikel: 268365
Datum: 27.01.2021
Quellen: Artur Erlich (MIB) hat mir empfolen ein skript zu schreiben damit ich das generierte Canvas Element (aus inkskape) 
vom uhrsprung verschieben kann. Dies Tat ich dann und machte ich auch ins Projekt. Es befindet sich im Ordner OriginMover im projekt canvas_atum
*/
namespace canvas_Autum_animated {

  export let crc2: CanvasRenderingContext2D;


  window.addEventListener("load", hndLoad);

  function hndLoad(_event: Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    crc2 = canvas.getContext("2d")!;
    let blatt: Leaf = new Leaf(1, 3); //leaf with scale, type, color
    let berg: Hill = new Hill(2);

    drawsky();                                  //draw sky and stars and moon
    for (let i: number = 0; i < 150; i++) {
      let x: number = Math.random() * 1920;
      let y: number = Math.random() * 540;
      let radius: number = Math.random() * 3;
      drawstars(x, y, radius);
    }
    drawmoon();


    for (let i: number = 0; i < 10; i++) {                      //draw clouds and hills
      // let x: number = Math.random() * 1920;
      // let y: number = Math.random() * 1080 / 2;
      let hill: Hill = new Hill(1);
      hill.setPosition(Math.random() * 1920, Math.random() * 1080 / 2);
      hill.draw();
      //drawcloud(Math.random() * 1920, Math.random() * 300, 5);
      let cloud: Cloud = new Cloud(1);
      cloud.setPosition(Math.random() * 1920, Math.random() * 300);
      cloud.draw();
    }


    drawfloor();                                                //draw grass and floor
    //drawforrest();
    for (let i: number = 0; i < 10000; i++) {
      let x: number = Math.random() * 1920;
      let y: number = Math.random() * 1080 / 2;
      drawgrass(x, y);
    }


    for (let i: number = 0; i < 4; i++) {                         //draw campfire
      let transX: number = Math.random() * 1920 / 2 + 20;
      let transY: number = 500 - (Math.random() * 120);
      let scale: number = 2;
      drawsquirrel(transX, transY, scale);
    }

    drawforrest();                 //draw trees background


    for (let i: number = 0; i < 10; i++) {                        //draw blätter im Vordergrund
      // drawleave1(Math.random() * 1920, Math.random() * 1080, 1.5, 0, 0);
      // drawleave2(Math.random() * 1920, Math.random() * 1080, 1.5, 0, 0);
      // drawleave3(Math.random() * 1920, Math.random() * 1080, 1.5, 0, 0);
    }

    blatt.setPosition(500, 500);
    blatt.draw();
    berg.setPosition(1080, Math.random() * 1080 / 2 );
    berg.draw();

  }
  function drawforrest(): void {
    let scalefactor: number = 0.5;
    let layer: number = 600;
    for (let index: number = 0; index <= 2; index++) {    //draw forrest
      for (let i: number = 0; i < 5; i++) {
        let bauum: Tree = new Tree(scalefactor, Math.floor(Math.random() * 3) + 1);     //musste blatt 3 wegen der performance nehmen
        bauum.setPosition(Math.random() * 1920, layer);
        bauum.draw();
      }
      scalefactor += 0.1;
      layer += 20;
    }
  }
  function drawsquirrel(_transX: number, _transY: number, _scale: number): void {
    drawarm(_transX, _transY, _scale);
    drawleg(_transX, _transY, _scale);
    drawbody(_transX, _transY, _scale);
    drawarm(_transX, _transY, _scale);
    drawleg(_transX, _transY, _scale);
    //drawlegfront

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

  function drawgrass(_x: number, _y: number): void {
    let grassdirection: number = Math.random() * 20;

    crc2.beginPath();
    crc2.moveTo(_x, _y + 1080 / 2);
    crc2.lineTo(_x, _y + grassdirection + 1080 / 2 + 25);
    crc2.closePath();

    crc2.strokeStyle = "green";
    crc2.lineWidth = 2;
    crc2.stroke();
  }

}