var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
    
];

var squares = document.querySelectorAll('.square');
var pickedColor = colors[3];
var colorDisplay = document.querySelector('#colorDisplay');

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
            alert(`You've guessed correctly!`);
        } else {
            alert('Incorrect, try again!');
        }
    });
};