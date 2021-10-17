var RandomPoem;
(function (RandomPoem) {
    //console.log("expecto patronum");
    //Array
    var subjekte = Array("Klaus", "Peter", "Marc", "Monika", "Alfred", "Kai");
    var praedikate = Array("lernt", "studiert", "hat es kapiert in", "kapiert es nicht in", "ist komplett hilflos in", "macht nichts in");
    var objekte = Array("Blender", "Photoshop", "VSC", "Illustrator", "Typescript", "Mathe");
    //gebe 6 unterschiedliche sätze aus
    for (var index = 0; index <= 6; index++) {
        var verse = getVerse(subjekte, praedikate, objekte);
        console.log(verse);
    }
    //Funktion
    function getVerse(_subjekte, _pradikate, _objekte) {
        var verse = " ";
        var randomSubjekte = Math.floor(Math.random() * subjekte.length);
        verse += subjekte.splice(randomSubjekte, 1) + " ";
        var randomPraedikate = Math.floor(Math.random() * praedikate.length);
        verse += praedikate.splice(randomPraedikate, 1) + " ";
        var randomObjekte = Math.floor(Math.random() * objekte.length);
        verse += objekte.splice(randomObjekte, 1) + " ";
        return verse;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=RandomPoem.js.map