var colors = generateRandomColors(6);
var messageDisplay = document.querySelector("#message")
var colorDisplay = document.querySelector("h1 #winColor")
var squares = document.querySelectorAll(".container .square");
var pickedColor = pickColor();
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");
var numSquares = 6;

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for(let i = 0; i < modeButtons.length; ++i) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            numSquares =  this.textContent == 'Easy' ? 3 : 6; 
            reset();
            
        });
    }
}

function setupSquares() {
    for(let i = 0; i < squares.length; ++i) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click",() =>{
            let clickedColor = squares[i].style.backgroundColor;
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            }
            else {
                messageDisplay.textContent = "Try again";
                squares[i].style.backgroundColor = "black";
            }
            console.log(clickedColor, pickedColor);
        });
    }
}

function reset(){
    console.log()
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    h1.style.backgroundColor = "deepskyblue";
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; ++i) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click",reset)


function changeColors(color){
    for(let i = 0; i < squares.length; ++i) {
        squares[i].style.backgroundColor = color;   
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    let arr = [];
    // add num random colors
    for(let i = 0; i < num; ++i) {
        //make random color and push to array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g + ", " + b + ")";
}