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


  let hill: Hill [] = [];
  let cloud: Cloud[] = [];
  let tree: Tree[] = [];
  let sky: Sky;
  //let sky: Sky = new Sky(2);
  window.addEventListener("load", hndLoad);



  function hndLoad(_event: Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    crc2 = canvas.getContext("2d")!;
    //let blatt: Leaf = new Leaf(1, 3); //leaf with scale, type, color
    //let tree: Tree = new Tree(0.5, Math.floor(Math.random() * 3) + 1);

    sky = new Sky(2);
    sky.setStars();
    drawmoon();


    for (let i: number = 0; i < 10; i++) {                      //draw clouds and hills

      hill[i] = new Hill(1);                                    //erzeuge hills mit indexwerten 1-10
      hill[i].setPosition(Math.random() * 1920, Math.random() * 1080 / 2);
      hill[i].draw();

      cloud[i] = new Cloud(1);
      cloud [i].setPosition(Math.random() * 1920, Math.random() * 300);
      cloud[i].draw();
    }
    for (let i: number = 0; i < 15; i++) {
      tree[i] = new Tree(1, 1); //Math.floor(Math.random() * 3 ) + 1
      tree[i].setPosition(Math.random() * 1920, 600);
      tree[i].setRandomRotation();
    }


    drawfloor();                                                //draw grass and floor
    //drawforrest();


    for (let i: number = 0; i < 4; i++) {                         //draw campfire
      let transX: number = Math.random() * 1920 / 2 + 20;
      let transY: number = 500 - (Math.random() * 120);
      let scale: number = 2;
      drawsquirrel(transX, transY, scale);
    }


    //tree[1].drawForrest();                 //draw trees background


    for (let i: number = 0; i < 10; i++) {                        //draw blätter im Vordergrund
      // drawleave1(Math.random() * 1920, Math.random() * 1080, 1.5, 0, 0);
      // drawleave2(Math.random() * 1920, Math.random() * 1080, 1.5, 0, 0);
      // drawleave3(Math.random() * 1920, Math.random() * 1080, 1.5, 0, 0);
    }
    setInterval(update, 10);
    update();
  }

  function drawForrest(tree: Tree[]): void {
    let scalefactor: number = 0.5;
    let layer: number = 600;
    for (let index: number = 0; index <= 2; index++) {    //draw forrest
      for (let i: number = 0; i < 5; i++) {
          //let treeForrest: Tree = new Tree(scalefactor, Math.floor(Math.random() * 3) + 1);     //musste blatt 3 wegen der performance nehmen
        tree[i * index].draw();
      }
      scalefactor += 0.1;
      layer += 20;
    }
  }
  function update(): void {
    sky.draw();
    //drawstars(Math.random() * 1920, Math.random() * 1080, 5);
    drawfloor(); 
    drawmoon();
    for (let i: number = 0; i < hill.length; i++) {
      hill[i].draw();
      cloud[i].slideright();
      if (cloud[i].position.x > 2120 ) {
        cloud[i].position.x = -200;
      }
      cloud[i].draw();
    }
    drawForrest(tree);
  }

  function drawsquirrel(_transX: number, _transY: number, _scale: number): void {
    drawarm(_transX, _transY, _scale);
    drawleg(_transX, _transY, _scale);
    drawbody(_transX, _transY, _scale);
    drawarm(_transX, _transY, _scale);
    drawleg(_transX, _transY, _scale);
    //drawlegfront

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
}