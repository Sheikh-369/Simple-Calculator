const one=document.querySelector('#one');
const two=document.querySelector('#two');
const three=document.querySelector('#three');
const four=document.querySelector('#four');
const five=document.querySelector('#five');
const six=document.querySelector('#six');
const seven=document.querySelector('#seven');
const eight=document.querySelector('#eight');
const nine=document.querySelector('#nine');
const dot=document.querySelector('#dot');
const clear=document.querySelector('#clear');
const division=document.querySelector('#division');
const times=document.querySelector('#times');
const minus=document.querySelector('#minus');
const plus=document.querySelector('#plus');
const openBracket=document.querySelector('#open');
const closeBracket=document.querySelector('#close');
const zero=document.querySelector('#zero')
const back=document.querySelector('#back')
const equal=document.querySelector('.equal');
const display=document.querySelector('.display')


let currentDisplay="";

division.addEventListener('click',()=>{
    currentDisplay+="/"
    display.innerHTML=currentDisplay;
});

times.addEventListener('click',()=>{
    currentDisplay+="*"
    display.innerHTML=currentDisplay;
});
minus.addEventListener('click',()=>{
    currentDisplay+="-"
    display.innerHTML=currentDisplay;
});
seven.addEventListener('click',()=>{
    currentDisplay+="7"
    display.innerHTML=currentDisplay;
});
eight.addEventListener('click',()=>{
    currentDisplay+="8"
    display.innerHTML=currentDisplay;
});
nine.addEventListener('click',()=>{
    currentDisplay+="9"
    display.innerHTML=currentDisplay;
});
plus.addEventListener('click',()=>{
    currentDisplay+="+"
    display.innerHTML=currentDisplay;
});
four.addEventListener('click',()=>{
    currentDisplay+="4"
    display.innerHTML=currentDisplay;
});
five.addEventListener('click',()=>{
    currentDisplay+="5"
    display.innerHTML=currentDisplay;
});
six.addEventListener('click',()=>{
    currentDisplay+="6"
    display.innerHTML=currentDisplay;
});
openBracket.addEventListener('click',()=>{
    currentDisplay+="("
    display.innerHTML=currentDisplay;
});
one.addEventListener('click',()=>{
    currentDisplay+="1"
    display.innerHTML=currentDisplay;
});
two.addEventListener('click',()=>{
    currentDisplay+="2"
    display.innerHTML=currentDisplay;
});
three.addEventListener('click',()=>{
    currentDisplay+="3"
    display.innerHTML=currentDisplay;
});
closeBracket.addEventListener('click',()=>{
    currentDisplay+=")"
    display.innerHTML=currentDisplay;
});
zero.addEventListener('click',()=>{
    currentDisplay+="0"
    display.innerHTML=currentDisplay;
});
dot.addEventListener('click',()=>{
    currentDisplay+="."
    display.innerHTML=currentDisplay;
});

equal.addEventListener('click', () => {
    try {
        currentDisplay = eval(currentDisplay).toString();
        display.innerHTML = currentDisplay;
    } catch {
        display.innerHTML = "Error";
    }
});


back.addEventListener('click', () => {
    currentDisplay = currentDisplay.substring(0, currentDisplay.length - 1);
    display.innerHTML = currentDisplay;
});
clear.addEventListener('click', () => {
    currentDisplay = "";
    display.innerHTML = currentDisplay;
});


