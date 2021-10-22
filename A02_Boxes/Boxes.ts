namespace Boxes {
    let n: number = 5;
    let color: string;
    let x: number = 0;
    let y: number = 0;

    for (let i: number = 0; i < n; i++) {         //n=5 fahre die funktion 6 mal durch
        y += (i == 2) ? 20 : 50;                  //wenn i größer als 2 -->evt vergessen als 20 und 50 
        x = (x + 170) % 400;                      
        switch (i) {                            
            case 0:                             //in falle I=0
                color = "#ff0000";              //Rot
                break;                          //springe aus der switch case raus
            case 1:                             //fall I=1
            case 4:                             //Fall I=4 vor fall 3 -->zu fall 2 abändern das der Ablauf wieder normal ist und farben abändern
                color = "#00ff00";              //Grün
                break;                          //springe aus der switch case raus 
            case 3:                             //Fall I=3
                continue;                       //LUL was zur hölle ist das für ein case, das ist das unnötigste was ich jemals gesehen hab
            default:                            
                color = "#0000ff";              //Blau
        }
        
        for (let size of ["big", "medium", "small"]) {      //
            createBox(color, x, y, size);
            if (i == 4)
                break;
        }
    }


    function createBox(_color: string, _x: number, _y: number, _size: string): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
        div.classList.add(_size);
        div.style.backgroundColor = _color;   //erstze farbe
        div.style.left = _x + "px";           //verkette neues x mit px
        div.style.top = _y + "px";            //verkette neues y mit px 
    }
}
