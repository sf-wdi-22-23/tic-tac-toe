// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

//save result in a variable
var $boxes = $('.box');


  // player "X" always goes first, and player "O" always goes second
  var move = "X";

function nextMove() {
  if (move==="X") {
    move = "O";
  } else {
    turn = "X";
  }

  }
});

// check for winner

function allThreeBoxes($boxOne, $boxTwo, $boxThree) {
  var boxOneOwner = $boxOne.text();
  var boxTwoOwner = $boxTwo.text();
  var boxThreeOwner = $boxThree.text();


}
