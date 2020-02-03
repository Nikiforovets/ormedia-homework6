let clear = document.getElementById("clear");

clear.addEventListener("click", ()=>{
    input.value = "";
});

let baseActs = document.getElementsByClassName("base_action");
for(let baseAct of baseActs){
    baseAct.addEventListener("click", ()=>{
        let arr = input.value.split("+");
        input.value = arr[0];
        input.value += baseAct.innerHTML;
        console.log(input.value);
    });
}

let equality = document.getElementById("equality");
