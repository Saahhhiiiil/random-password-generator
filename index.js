let callBoxOne = document.querySelector(".boxOne")
let callBoxTwo = document.querySelector(".boxTwo")
let userInput = document.querySelector(".user-input")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function randomNumber(){
    let getRandom = characters[Math.floor(Math.random()*characters.length)]
    return getRandom
}

function clickButton(){
    if(userInput.value < 8){
        alert("Provide a password length between 8 to 20");
    } else {
        callBoxOne.textContent = ""
        callBoxTwo.textContent = ""
        for (let i = 1; i <= userInput.value ; i++){
            callBoxOne.textContent += randomNumber();
            callBoxTwo.textContent += randomNumber();
        }
    }
}

function validateInput(input) {
    const value = parseFloat(input.value);
    const min = parseFloat(input.min);
    const max = parseFloat(input.max);
  
    if (value < min) {
      input.value = min;
    } else if (value > max) {
      input.value = max;
    }
  }
  