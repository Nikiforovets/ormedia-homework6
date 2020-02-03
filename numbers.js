let input = document.getElementById("textfield");

let numbers = document.getElementsByClassName("number");
for(let number of numbers){
    number.addEventListener("click", ()=>{
        input.value +=  number.innerHTML;
    });
}

let point = document.getElementById("point");
point.addEventListener("click", ()=>{
    if(input.value.indexOf(".",0) == -1){
        input.value +=  point.innerHTML;
    }
});

let plusMinus = document.getElementById("plusMinus");
plusMinus.addEventListener("click", ()=>{
    if(input.value.indexOf("-",0) == -1){
        input.value = "-" + input.value;
    }
    else{
        let [minus, ...enother] = input.value;
        input.value = enother.join('');
    }
});


    
