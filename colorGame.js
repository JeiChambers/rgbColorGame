var numSquares = 6; 
var colors = [];
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// Initialize
init();

// Initialization Function 

function init(){
    // mode buttons event listeners
    setModeButtons();
    setupSquares();
    reset();
}

// Seting up Mode Buttons
function setModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            // Ternary Operator for numSquared if|else
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++){
        //Added click listener to squares
        squares[i].addEventListener("click", function(){
            //Getting background color of clicked square
            var clickedColor = this.style.backgroundColor;
            //Verifying selected color
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.background = clickedColor; 
                resetButton.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    };
}

// Reset Function

function reset(){
    // Generate numSquares of new colors
    colors = generateRandomColors(numSquares);
    // Pick a new color from color array
    pickedColor = pickColor();
    // Change color display to match pickedColor
    colorDisplay.textContent = pickedColor;
    // Change 'Play Again' button back to 'New Colors' button
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    // Change color of squares on page
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else{
            squares[i].style.display = "none";
        }
        //  Change h1 back to the default background color
        h1.style.backgroundColor = "steelblue"
    }
    resetButton.addEventListener("click", function(){
        reset();
    });
};

// Color Changing Function 

function changeColors(color){
    // loop through all squares 
    for (var i = 0; i < squares.length; i++ ) {
        // change each color to match given color
        squares[i].style.background = color;
    }
}

// Color Picker

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Color Randomizer

function randomColor(){
    // pick a red from 0 to 255
    let r = Math.floor(Math.random() * 256);
    // pick a green from 0 to 255
    let g = Math.floor(Math.random() * 256);
    // pick a blue from 0 to 255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Color Generator 

function generateRandomColors(num) {
    var arr = []
    // add num random colors to array
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}


