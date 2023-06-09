function calculator(){
    let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.forEach( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'C':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
}

window.addEventListener("load",calculator,false);