const display = document.getElementById("answer");
const funcdict = ["add", "subtract", "multiply", "divide"];

let funcselect = null;
const functionbuttons = document.querySelectorAll("div.functions button");
functionbuttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        funcselect = funcdict.indexOf(button.id);
        document.getElementById("dot").disabled = false;
        if(inputmem){
            // operate and store back in input mem
        }else{
            inputmem = +inputuser;
            inputuser="";
        }
    })
});

let inputmem = null;
let inputuser = "";
const valselect = document.querySelectorAll("div.inouts button");
valselect.forEach((button)=>{
    button.addEventListener('click', ()=>{
        if(button.id == "dot"){
            button.disabled = true;
            inputuser.concat(".")
        }else{
            inputuser.concat(button.id)
        }
    })
});



function operate(a, b, funcselect){
    let answer = null;
    switch (funcselect) {
        case 0:
            answer = a + b;
            break;
    
        case 1:
            answer = a - b;
            break;
        
        case 2:
            answer = a * b;
            break;
        
        case 3:
            answer = a / b;    
            break;

        default:
            alert("Wut In Tarnation?!?")
            break;
    }
}