import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

//can get a random number 
function getRandomElement(arr){
  return arr[Math.floor(Math.random()* arr.length)];
}

//once i have a random number by previos function, generate then 
function ExcuseGenerator(){
  let excuse = `${getRandomElement(who)} ${getRandomElement(action)} ${getRandomElement(what)} ${getRandomElement(when)}.`;
              
  document.getElementById("excuse").innerHTML= excuse;
}

window.onload = function () {
  ExcuseGenerator();
};