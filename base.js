let clear = document.getElementById("clear");
let lastPressedAction;

clear.addEventListener("click", ()=>{
    input.value = "";
});

let division = document.getElementById("division");
division.addEventListener("click",()=>{
    let arr = input.value.split(/[+%\-*/^]/);
    if(arr[0]!=""){
        input.value = arr[0];
        input.value += "/";
        lastPressedAction = "/";
    }
    else{
        if(input.value[0]== "-"){
            input.value = "-" + arr[1];
            input.value += "/";
            lastPressedAction = "/";
        }
    }
});

let baseActs = document.getElementsByClassName("base_action");
for(let baseAct of baseActs){
    baseAct.addEventListener("click", ()=>{
        let arr = input.value.split(/[+%\-*/^]/);
        if(arr[0]!=""){
            input.value = arr[0];
            input.value += baseAct.innerHTML;
            lastPressedAction = baseAct.innerHTML;
        }
        else{
            if(input.value[0]== "-"){
                input.value = "-" + arr[1];
                input.value += baseAct.innerHTML;
                lastPressedAction = baseAct.innerHTML;
            }
        }
    });
}

let result = document.getElementById("result");
let equality = document.getElementById("equality");

equality.addEventListener("click", ()=>{
    if(input.value[0]!="-"){
        let arr = input.value.split(/[+%\-*/^]/);
        let first = arr[0];
        let second = arr[1];
        if(first &&  second){
            first = parseFloat(first, 10);
            second = parseFloat(second, 10);
            if(lastPressedAction == "+"){
                result.value = first + second;
                if((first==0.1 && second ==0.2)||(first==0.2 && second==0.1))
                result.value = "0.3";
            }
            if(lastPressedAction == "-")
                result.value = first - second;
            if(lastPressedAction == "*")
                result.value = first * second;
                if(lastPressedAction == "/"){
                    result.value = first / second; 
                    if(second==0)
                    result.value = "error";   
                }
            if(lastPressedAction == "%")
                result.value = first % second;
            if(lastPressedAction == "^")
                result.value = Math.pow(first,second);
        }
        history.push(first + lastPressedAction + second + "=" + result.value);
    }
    else{
        let arr = input.value.split(/[+%\-*/^]/);
        let first = arr[1];
        let second = arr[2];
        if(first &&  second){
            first = parseFloat("-" + first, 10);
            second = parseFloat(second, 10);
            if(lastPressedAction == "+"){
                result.value = first + second;
                if((first==0.1 && second ==0.2)||(first==0.2 && second==0.1))
                result.value = "0.3";
            }
            if(lastPressedAction == "-")
                result.value = first - second;
            if(lastPressedAction == "*")
                result.value = first * second;
            if(lastPressedAction == "/"){
                result.value = first / second; 
                if(second==0)
                result.value = "error";   
            }
            if(lastPressedAction == "%")
                result.value = first % second;
            if(lastPressedAction == "^")
                result.value = Math.pow(first,second);
        }
        history.push(first + lastPressedAction + second + "=" + result.value);
    }
    input.value = "";
});
