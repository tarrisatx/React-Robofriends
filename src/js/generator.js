var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

function setGradientOnLoad(){
    //set gradient to match input values
    setGradient()
}

function setGradient(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function getRandomHex(){
    randomPicker = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomPicker;
}

function updateGradientButton(){
    color1.value = getRandomHex()
    color2.value = getRandomHex()
    setGradient()
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", updateGradientButton);
window.addEventListener("load", setGradientOnLoad);


// too much code way
/* color1.addEventListener("input", function(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    //console.log(color1.value);
})

color2.addEventListener("input", function(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    //console.log(color2.value);
}) */