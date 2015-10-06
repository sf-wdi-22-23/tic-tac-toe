$(document).ready(function(){
  // all code to manipulate the DOM
  // goes inside this function

  // select all the necessary elements
  // we speed up the site a little by using the $() selector once 
  // and saving variables instead of selecting over and over
  var $board = $('#board'),
      $boxes = $('.box'),
      $reset = $('#reset');
  
  // player "X" always goes first, and player "O" always goes second
  var turn = "X";

  // count how many moves have happened since reset
  // a full game is 9 moves
  var moves = 0;
  
  // helper function to change turn to the next player
  var changeTurn = function() {
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  };

  // helper function to reset board
  var resetGame = function() {
    // reset the board itself
    $boxes.text("");
    $boxes.removeClass("X");
    $boxes.removeClass("O");

    // reset the variables that track game progress

    // player X always goes first
    turn = "X";
    
    // reset moves count
    moves = 0;
  };

  // helper function to check for wins
  // returns true if the player passed into the function ("X" or "O")
  var allThree = function(player, box1, box2, box3) {
    // note that $boxes.get(i) returns a plain dom element
    // so all of these boxes are passed in as non-jQuery DOM elements
    // we convert them to jQuery using $()
    return ($(box1).text() === player) && ($(box2).text() === player) && ($(box3).text() === player);
  };

  // check for wins across both diagonals
  // returns true if player owns all three boxes in one of the diagonals
  var winsDiagonal = function(player) {
    return allThree(player, $boxes.get(0), $boxes.get(4), $boxes.get(8)) ||
           allThree(player, $boxes.get(2), $boxes.get(4), $boxes.get(6));
  };

  // check for wins on columns
  // returns true if player owns all three boxes in one of the columns
  var winsColumn = function(player) {
    return allThree(player, $boxes.get(0), $boxes.get(3), $boxes.get(6)) ||
           allThree(player, $boxes.get(1), $boxes.get(4), $boxes.get(7)) ||
           allThree(player, $boxes.get(2), $boxes.get(5), $boxes.get(8));
  };

  // check for wins on columns
  // returns true if player owns all three boxes in one of the rows
  var winsRow = function(player) {
    return allThree(player, $boxes.get(0), $boxes.get(1), $boxes.get(2)) ||
           allThree(player, $boxes.get(3), $boxes.get(4), $boxes.get(5)) ||
           allThree(player, $boxes.get(6), $boxes.get(7), $boxes.get(8));
  };

  // checks for wins on full board
  // returns true if player is winner of a row, column, or diagonal
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

  // listen for clicks on each box
  // ('event delegation' is a more efficient way to do this part, 
  // but we'll keep it simple for now)
  $boxes.on('click', function() {
    // check if this box is already claimed
    if ($(this).text() === "") {

      // box is empty! continue with the turn
      // mark this box
      $(this).text(turn);
      $(this).addClass(turn);
      // increase move counter
      moves += 1;
      
      // check for a winner 
      var winner = getWinner();
      if (winner) {
        // there is a winner! 
        // alert the win and reset the game
        alert("Player " + winner + " won!");
        resetGame();
      } else if (moves < 9) {
        // there is no winner, yet, 
        // but since fewer than 9 moves have been made, 
        // there are empty spaces left.  on to the next turn!
        changeTurn();
      } else {
        // there is no winner, and there are no empty spaces
        // alert the result and reset the game
        alert("Neither player wins!");
        resetGame();
      }
    }
  });

  // listen for clicks on `reset` button to reset the board
  $reset.on('click', function () {
    resetGame();
  });
});
