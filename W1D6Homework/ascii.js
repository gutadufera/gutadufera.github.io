"use strict";

let i=0;
let timer1=0;
let animationSelect = null;
let sizeSelect = null;
let initialText = null;
let delay=250;

function start() {
    i=0;

    if(timer1===null){

        timer1=setInterval(jugglers,delay);
    }
    else {
        clearInterval(timer1);
        timer1=null;
        start();

    }

}
function getDelay() {
    const checkbox = document.getElementById("myCheckbox");
    if(checkbox.checked===true)
    {
        delay= 50;
    }
    else {
        delay= 250;
    }
    clearInterval(timer1);
    timer1=null;
    start();

}
function jugglers() {
    animationSelect=document.getElementById("animations").value;
    sizeSelect=document.getElementById("size").value;
    document.getElementById("stop").disabled=false;
    let array = ANIMATIONS[animationSelect].split("=====\n");
    if(i>=array.length){
        i=0;
    }
    document.getElementById("mytextarea").value=array[i];
    if(sizeSelect==="tiny")
    {
        document.getElementById("mytextarea").style.fontSize="7pt";
    }
    else if(sizeSelect==="small"){
        document.getElementById("mytextarea").style.fontSize="10pt";
    }
    else if(sizeSelect==="medium"){
        document.getElementById("mytextarea").style.fontSize="12pt";
    }
    else if(sizeSelect==="large"){
        document.getElementById("mytextarea").style.fontSize="16pt";
    }
    else if(sizeSelect==="extralarge"){
        document.getElementById("mytextarea").style.fontSize="24pt";
    }
    else if(sizeSelect==="xxl"){
        document.getElementById("mytextarea").style.fontSize="32pt";
    }
    else{
    }
    i++;
}
function stopper(){
    clearInterval(timer1);
    timer1=null;document.getElementById("stop").disabled=true;
    document.getElementById("mytextarea").value=initialText;
}
window.onload=function(){
    initialText=document.getElementById("mytextarea").value;
    document.getElementById("stop").disabled=true;
    document.getElementById("myCheckbox").onclick=getDelay;
    document.getElementById("start").onclick=start;
    document.getElementById("stop").onclick=stopper;
};
