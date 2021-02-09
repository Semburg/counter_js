let num = Number(document.getElementById("numberResult").innerHTML);


function plusOne(){
    num++;
    document.getElementById("numberResult").innerHTML=num;
    console.log(num);
}
function minusOne(){
    num--;
    document.getElementById("numberResult").innerHTML=num;
    console.log(num);
}
function plusTen(){
    num+=10;
    document.getElementById("numberResult").innerHTML=num;
    console.log(num);
}
function minusTen(){
    num-=10;
    document.getElementById("numberResult").innerHTML=num;
    console.log(num);
}
function plus100(){
    num+=100;
    document.getElementById("numberResult").innerHTML=num;
    console.log(num);
}
function minus100(){
    num-=100;
    document.getElementById("numberResult").innerHTML=num;
    console.log(num);
}
function resetNum(){
    num=0;
    document.getElementById("numberResult").innerHTML=num;
    console.log(num);
}
function multiTwo(){
    num*=2;
    document.getElementById("numberResult").innerHTML=num;
    console.log(num);
}