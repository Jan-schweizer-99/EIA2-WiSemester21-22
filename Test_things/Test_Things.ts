namespace random_test {

    let element: HTMLElement = document.getElementsByClassName("test")[0] as HTMLElement;
    
    window.addEventListener("load", handleLoad); //starte die handleload funktion
    let time: number = 5;
    function handleLoad(_event: Event): void {
        let buttonstart: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#starttimer");
        
        buttonstart.addEventListener("click", startTimer);
    }

    function startTimer(): void {
        setInterval(updatetimer, 1000);
    }
    function updatetimer(): void {
        if (time == 0) {
            clearInterval();
            alert("you lost");
            window.location.reload();
        }
        else {
            time--;
            document.getElementById("time").innerText = time.toString();
        }
        }
    function myFunction(cardnuber: number): void {
        console.log(cardnuber);
    }

}
