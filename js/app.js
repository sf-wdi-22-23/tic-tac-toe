console.log("this is a sanity check");

$(document).ready(function() {
  var $boxes = $('.box');
  var turn = "X";

  function resetGame() {
    $boxes.text("");
    $boxes.removeClass("X");
    $boxes.removeClass("O");
    turn = "X";
  }

  function changeTurn() {
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  }


  function allThree($firstBox, $secondBox, $thirdBox) {
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
  }

  function diagonalWinner() {

    var leftDownDiag = allThree($boxes.eq(0), $boxes.eq(4), $boxes.eq(8));
    var rightUpDiag = allThree($boxes.eq(2), $boxes.eq(4), $boxes.eq(6));
    return leftDownDiag || rightUpDiag;
  }


  function columnWinner() {
    var leftCol = allThree($boxes.eq(0), $boxes.eq(3), $boxes.eq(6));
    var middleCol = allThree($boxes.eq(1), $boxes.eq(4), $boxes.eq(7));
    var rightCol = allThree($boxes.eq(2), $boxes.eq(5), $boxes.eq(8));

    return leftCol || (middleCol || rightCol);
  }

  function rowWinner() {
    var topRow = allThree($boxes.eq(0), $boxes.eq(1), $boxes.eq(2));
    var middleRow = allThree($boxes.eq(3), $boxes.eq(4), $boxes.eq(5));
    var bottomRow = allThree($boxes.eq(6), $boxes.eq(7), $boxes.eq(8));

    return topRow || (middleRow || bottomRow);
  }

  function getWinner() {
    return diagonalWinner() || (rowWinner() || columnWinner());
  }

  function boardHasEmptyBoxes() {
    var hasEmptyBoxes = false;
    for (var i=0; i<$boxes.length; i++){
      if ($boxes.eq(i).text() === ''){
        hasEmptyBoxes = true;
      }
    }
    return hasEmptyBoxes;
  }

  $('#reset').on('click', function() {
    resetGame();
  });

  $boxes.on('click', function() {
    if ($(this).text() === "") {
      $(this).text(turn);
      $(this).addClass(turn);

      var winner = getWinner();
      if (winner) {
        alert("Player " + winner + " won!");
        resetGame();
      } else if (boardHasEmptyBoxes()) {
        changeTurn();
      } else {
        alert("Neither player won!");
        resetGame();
      }
    }
  });


});
