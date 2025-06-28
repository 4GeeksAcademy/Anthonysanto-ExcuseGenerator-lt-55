import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

//can get a random number 
function getRandom(arr){
  return arr[Math.floor(Math.random()* arr.length)];
}

//once i have a random number by previous function, then...generate
function ExcuseGenerator(){
  let excuse = `${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}.`;
              
  document.getElementById("excuse").innerText= excuse;
} 

window.onload = function () {
  ExcuseGenerator();
};