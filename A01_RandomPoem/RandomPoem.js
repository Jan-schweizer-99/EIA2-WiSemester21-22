"use strict";
var RandomPoem;
(function (RandomPoem) {
    //console.log("expecto patronum");
    //Array
    let subjekte = Array("Klaus", "Peter", "Marc", "Monika", "Alfred", "Kai");
    let praedikate = Array("lernt", "studiert", "hat es kapiert in", "kapiert es nicht in", "ist komplett hilflos in", "macht nichts in");
    let objekte = Array("Blender", "Photoshop", "VSC", "Illustrator", "Typescript", "Mathe");
    //gebe 6 unterschiedliche sätze aus
    for (let index = 0; index <= 6; index++) {
        let verse = getVerse(subjekte, praedikate, objekte);
        console.log(verse);
    }
    //Funktion
    function getVerse(_subjekte, _pradikate, _objekte) {
        let verse = " ";
        let randomSubjekte = Math.floor(Math.random() * subjekte.length);
        verse += subjekte.splice(randomSubjekte, 1) + " ";
        let randomPraedikate = Math.floor(Math.random() * praedikate.length);
        verse += praedikate.splice(randomPraedikate, 1) + " ";
        let randomObjekte = Math.floor(Math.random() * objekte.length);
        verse += objekte.splice(randomObjekte, 1) + " ";
        return verse;
    }
})(RandomPoem || (RandomPoem = {}));
