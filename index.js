
let compare = document.getElementById("comparebtn");
let res = document.getElementById("result");

compare.addEventListener('click',comparenum);

function comparenum(){
    let number1 = parseInt( document.getElementById("num1").value);
    let number2 = parseInt(document.getElementById("num2").value);
    if(number1 === number2){
        res.innerHTML="Equal";
    }
    else
        res.innerHTML="Not Equal";
    
}
