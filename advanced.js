let rad = false;

let radBtn = document.getElementById("rad");
radBtn.addEventListener("click",()=>{
    if(rad==true){
        rad = false;
        radBtn.innerHTML = "Rad";
    }
    else{
        rad = true;
        radBtn.innerHTML = "Deg";
    }
});

document.getElementById("sin").addEventListener("click",()=>{
    if(rad == false)
        result.value = Math.sin(parseFloat(input.value)*(Math.PI/180));
    else
        result.value = Math.sin(parseFloat(input.value));
    input.value = "";
});

document.getElementById("cos").addEventListener("click",()=>{
    if(rad == false)
        result.value = Math.cos(parseFloat(input.value)*(Math.PI/180));
    else
        result.value = Math.cos(parseFloat(input.value));
    input.value = "";
});

document.getElementById("tg").addEventListener("click",()=>{
    if(rad == false)
        result.value = Math.tan(parseFloat(input.value)*(Math.PI/180));
    else
        result.value = Math.tan(parseFloat(input.value));
    input.value = "";
});

document.getElementById("ctg").addEventListener("click",()=>{
    if(rad == false)
        result.value = Math.atan(parseFloat(input.value)*(Math.PI/180));
    else
        result.value = Math.atan(parseFloat(input.value));
    input.value = "";
});


document.getElementById("fact").addEventListener("click",()=>{
    if(parseFloat(input.value)%1==0){
        if(input.value == 1 || input.value == 0)
            result.value = 1;
        else{
            let value = parseFloat(input.value);
            let fact = 1; 
            while(value > 1){
                fact *= value;
                value--;
            }
            result.value = fact;
        }
    }
    else
        result.value = "¯\_(ツ)_/¯";
    input.value = "";
});

document.getElementById("pow").addEventListener("click", ()=>{
    let arr = input.value.split(/[+%\-*/^]/);
    if(arr[0]!=""){
        input.value = arr[0];
        input.value += "^";
        lastPressedAction = "^";
    }
    else{
        if(input.value[0]== "-"){
            input.value = "-" + arr[1];
            input.value += "^";
            lastPressedAction = "^";
        }
    }
});

let history = ["","",""];

document.getElementById("hist").addEventListener("click", ()=>{
    let histFields = document.getElementsByClassName("histField");
    histFields[0].innerHTML = history[history.length-1];
    histFields[1].innerHTML = history[history.length-2];
    histFields[2].innerHTML = history[history.length-3];
})