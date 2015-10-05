$(document).ready(function() {
var $boxes = $('.box');
  var turn = "O"; // Let's switch things up and give O the advantage of choosing first
  var moves = 0;
  var resetGame = function() {
    $boxes.text("");
    $boxes.removeClass("X");
    $boxes.removeClass("O");
    turn = "X";   
    moves = 0;
  };

  var changeTurn = function() {
    if (turn === "O") {
      turn = "X";
    } else {
      turn = "O";
    }
  };

  
  var allThree = function($firstBox, $secondBox, $thirdBox) {
   var firstBoxOwner = $firstBox.text(),
        secondBoxOwner = $secondBox.text(),
        thirdBoxOwner = $thirdBox.text();

    if ((firstBoxOwner === secondBoxOwner) && (secondBoxOwner === thirdBoxOwner)){
      if (firstBoxOwner === "X"){
        return "X";
      } else if (firstBoxOwner === "O"){
        return "O";
      }
    }
    return null;
  };

  var diagonalWinner = function() {
    // the eq method is how we "index into" a jQuery collection!
    var leftDownDiag = allThree($boxes.eq(0), $boxes.eq(4), $boxes.eq(8));
    var rightUpDiag = allThree($boxes.eq(2), $boxes.eq(4), $boxes.eq(6));

    return leftDownDiag || rightUpDiag;
  };

  var columnWinner = function() {
    var leftCol = allThree($boxes.eq(0), $boxes.eq(3), $boxes.eq(6));
    var middleCol = allThree($boxes.eq(1), $boxes.eq(4), $boxes.eq(7));
    var rightCol = allThree($boxes.eq(2), $boxes.eq(5), $boxes.eq(8));

    return leftCol || (middleCol || rightCol);
  };

  var rowWinner = function() {
    var topRow = allThree($boxes.eq(0), $boxes.eq(1), $boxes.eq(2));
    var middleRow = allThree($boxes.eq(3), $boxes.eq(4), $boxes.eq(5));
    var bottomRow = allThree($boxes.eq(6), $boxes.eq(7), $boxes.eq(8));

    return topRow || (middleRow || bottomRow);
  };

  var getWinner = function() {
    return diagonalWinner() || (rowWinner() || columnWinner());
  };

  $('#reset').on('click', function() {
    resetGame();
  });

  $boxes.on('click', function() {
    if ($(this).text() === "") {
      $(this).text(turn);
      $(this).addClass(turn);
      moves += 1;
      
      var winner = getWinner();
      if (winner) {
        alert("Player " + winner + " won!");
        resetGame();
      } else if (moves < 9) {
        changeTurn();
      } else {
        alert("Neither player won!");
        resetGame();
      }
    }
  });
});