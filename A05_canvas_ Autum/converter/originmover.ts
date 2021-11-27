namespace oringmover {
    window.addEventListener("load", handleLoad); //starte die handleload funktion

    function handleLoad(_event: Event): void {

        let apply: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#start");
        apply.addEventListener("click", Load);
    }
    function Load(): void {
        let codeword: HTMLInputElement = <HTMLInputElement>document.querySelector("#codename");
        //let codeword2: string = codeword.value.replace(/crc2.moveTo(/gi, "_");
        let codeword2: string = codeword.innerText;
        let result: string = codeword2.replace(/dsdsaafsd\() /g, "<");
        console.log(result);
    }
}