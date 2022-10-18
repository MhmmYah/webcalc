const display = document.getElementById("answer");
const funcdict = ["add", "subtract", "multiply", "divide"];

let funcselect = null;
let inputmem = null;
let inputuser = '';
let lastbuttonpressed = null;

const functionbuttons = document.querySelectorAll("div.functions button");
functionbuttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        document.getElementById("dot").disabled = false;
        if(lastbuttonpressed == null){
        } else if (lastbuttonpressed == 0){
            if(inputmem && funcselect){
                inputmem = operate(inputmem, inputuser, funcselect);
                inputuser = "";
                display.value = inputmem;
            }else{
                inputmem = inputuser;
                inputuser="";
            }
            funcselect = funcdict.indexOf(button.id);
        } else if (lastbuttonpressed == 1){
            funcselect = funcdict.indexOf(button.id);
        } else{
            alert("Wut in Tarnation!")
        }
        lastbuttonpressed = 1;
    })
});

const valselect = document.querySelectorAll("div.inputs button");
valselect.forEach((button)=>{
    button.addEventListener('click', ()=>{
        if(button.id == "dot"){
            button.disabled = true;
            inputuser += "."
        }else{
            inputuser += button.id
        }
        display.value = inputuser
        lastbuttonpressed = 0;
    })
});

const evalselect = document.querySelectorAll("div.evaluate button");
evalselect.forEach((button)=>{
    button.addEventListener('click', ()=>{
        switch (button.id) {
            case "equal":
                lastbuttonpressed = 1;
                inputmem = operate(inputmem, inputuser, funcselect);
                inputuser = "";
                display.value = inputmem;
                funcselect = null
                break;
            
            case "clear":
                lastbuttonpressed = null
                inputmem = null
                inputuser = ''
                display.value = inputuser
                funcselect = null
                break;

            default:
                alert("not Implemented Yet")
                break;
        }
    })
});

function operate(a, b, funcselect){
    let answer = null;
    switch (funcselect) {
        case 0:
            answer = parseFloat(a) + parseFloat(b);
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
            answer = a;
            break;
    }
    return answer;
}