namespace EventInspector {
    let xmouse: number;
    let ymouse: number;
    window.addEventListener("load", function(): void {      //Habe dich garnicht vermisst schoen das du wieder da bist. Werde dich nie wieder vergessen (= Ab heute bist du mein bester Freund und wir geniesen zusammen den Sonnenaufgang.
        function handleLoad(_event: Event): void {
            // create button and add to DOM
            let button: HTMLButtonElement = document.createElement("button");
            button.textContent = "Click";
            document.body.appendChild(button);
    
            // install listeners to all ancestors of button in DOM
            installListenersInDOM(button);
    
            // window is not a member of the DOM-tree, so install listeners separately  
            window.addEventListener("click", handleClick);
            window.addEventListener("click", handleClick, true);
        }
    

