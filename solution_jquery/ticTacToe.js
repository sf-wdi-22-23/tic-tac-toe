// wait for the DOM to finish loading
$(function() {

  // select all the necessary elements
  var $board = $('#board'),
      $boxes = $('.box'),
      $reset = $('#reset');
  
  // player X always goes first
  var turn = "X";

  // keep track of moves count
  var moves = 0;
  
  // helper function to change turn based on current turn
  var changeTurn = function() {
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  };

  // helper function to reset board
  var resetBoard = function() {
    $boxes.text("");
    $boxes.removeClass("X").removeClass("O");

    // player X always goes first
    turn = "X";
    
    // reset moves count
    moves = 0;
  };

  // helper function to check for wins in three boxes
  var allThree = function(player, box1, box2, box3) {
    return (box1.innerText === player) && (box2.innerText === player) && (box3.innerText === player);
  };

  // check for wins across both diagonals
  var winsDiagonal = function(player) {
    return allThree(player, $boxes[0], $boxes[4], $boxes[8]) ||
           allThree(player, $boxes[2], $boxes[4], $boxes[6]);
  };

  // check for wins down all columns
  var winsColumn = function(player) {
    return allThree(player, $boxes[0], $boxes[3], $boxes[6]) ||
           allThree(player, $boxes[1], $boxes[4], $boxes[7]) ||
           allThree(player, $boxes[2], $boxes[5], $boxes[8]);
  };

  // check for wins across all rows
  var winsRow = function(player) {
    return allThree(player, $boxes[0], $boxes[1], $boxes[2]) ||
           allThree(player, $boxes[3], $boxes[4], $boxes[5]) ||
           allThree(player, $boxes[6], $boxes[7], $boxes[8]);
  };

  // player is winner if wins row, column, or diagonal
  var winnerIs = function(player) {
    return winsRow(player) || winsColumn(player) || winsDiagonal(player);
  };

  // helper function to check for winner
  var getWinner = function() {
    if (winnerIs("X")) {
      return "X";
    }
    else if (winnerIs("O")) {
      return "O";
    }
    else {
      return null;
    }
  };

  // listen for clicks on boxes to play the game
  $boxes.on('click', function() {
    // only allow move if box is blank
    if ($(this).text() === "") {
      $(this).text(turn);
      $(this).addClass(turn);
      moves += 1;
      
      // check for a winner if 5 or more moves have been played
      if (moves >= 5) {
        var winner = getWinner();
    
        // if there is a winner, alert the winner and reset the game
        if (winner) {
          alert("Player " + winner + " won!");
          resetBoard();
        } else {
          changeTurn();
        }
      } else {
        changeTurn();
      }
    }
  });

  // listen for clicks on `reset` button to reset the board
  $reset.on('click', function () {
    resetBoard();
  });

});