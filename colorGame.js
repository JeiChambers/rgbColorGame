var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click", function(){
    //no need to add a '.' if using .classList()
    easyBtn.classList.add("selected") 
    hardBtn.classList.remove("selected")
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.background = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected") 
    easyBtn.classList.remove("selected")
})

resetButton.addEventListener("click", function(){
    //  Change h1 back to the default background color
    h1.style.backgroundColor = "#232323"
    // Change 'Play Again' button back to 'New Colors' button
    resetButton.textContent = "New Colors"
    // Generate 6 new colors
    colors = generateRandomColors(6);
    // Pick a new color from color array
    pickedColor = pickColor();
    // Change color display to match pickedColor
    colorDisplay.textContent = pickedColor;
    // Change color of squares on page
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    //Getting initial square color
    squares[i].style.backgroundColor = colors[i];

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

function changeColors(color){
    // loop through all squares 
    for (var i = 0; i < squares.length; i++ ) {
        // change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = []
    // add num random colors to array
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    // pick a red from 0 to 255
    let r = Math.floor(Math.random() * 256);
    // pick a green from 0 to 255
    let g = Math.floor(Math.random() * 256);
    // pick a blue from 0 to 255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
