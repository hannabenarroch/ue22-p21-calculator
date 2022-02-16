// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

function printTargetContentToConsole(event) {
    console.log(event.target.textContent+"!");
}

window.addEventListener('load', ()=> {
    let buttons = document.getElementsByTagName("button");
    let screen = document.getElementsByClassName("calculator__display")[0]
    for (let button of buttons) {
        button.addEventListener("click", (event)=> { 
            console.log(event.target.textContent); 
let operators = document.getElementsByClassName("key--operator")

            if (screen.textContent=='0') {
            screen.textContent = event.target.textContent}
            else {screen.textContent += event.target.textContent}
        })
    }
})