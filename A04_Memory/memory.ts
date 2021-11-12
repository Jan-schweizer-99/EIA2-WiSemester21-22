namespace random_test {
    //let list: string[] = ["klaus", "peter", "Dieta", "HÄRBERT"];
    //list = list.sort(() => Math.random() - 0.5);
    //console.log(list);

    //  window.addEventListener("load", handleLoad); //starte die handleload funktion
    //  function handleLoad(_event: Event): void {
    window.prompt.call.addEventListener("click", Load);
    let codeword: string = prompt("Please enter your name", "EIA-2-stinkt");
    let chars: string[] = codeword.split("");
    console.log(chars);
    let counter: number = 0;
    //  }
    function Load(): void {
        console.log("hat geklapt");
    }
}