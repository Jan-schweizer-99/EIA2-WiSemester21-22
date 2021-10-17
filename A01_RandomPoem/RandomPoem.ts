namespace RandomPoem {
    //console.log("expecto patronum");
    //Array
    let subjekte: string[] = Array("Klaus", "Peter", "Marc", "Monika", "Alfred", "Kai");
    let praedikate: string[] = Array("lernt", "studiert", "hat es kapiert in", "kapiert es nicht in", "ist komplett hilflos in", "macht nichts in");
    let objekte: string[] = Array("Blender", "Photoshop", "VSC", "Illustrator", "Typescript", "Mathe");
    //gebe 6 unterschiedliche sätze aus
    for (let index: number = 0; index <= 6; index++) {
        let verse: string = getVerse(subjekte, praedikate, objekte);
        console.log(verse);
    }
    //Funktion
    function getVerse(_subjekte: string[], _pradikate: string[], _objekte: string[]): string {
        let verse: string = " ";

        let randomSubjekte: number = Math.floor(Math.random() * subjekte.length);
        verse += subjekte.splice(randomSubjekte, 1) + " ";

        let randomPraedikate: number = Math.floor(Math.random() * praedikate.length);
        verse += praedikate.splice(randomPraedikate, 1) + " ";

        let randomObjekte: number = Math.floor(Math.random() * objekte.length);
        verse += objekte.splice(randomObjekte, 1) + " ";

        return verse;
    }
}
