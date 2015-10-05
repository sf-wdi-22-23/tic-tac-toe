// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

  // select all the boxes
  // we speed up the site a little by using the $() selector once 
  // and saving the result in a variable instead of selecting over and over
  var $boxes = $('.box');
  var $board = $('#board'); // we'll use this for event delegation below

  
  // create a new game
  // the constructor sets the game's moves to 0 and turn to 'X'
  var game = new Game();


  /**** EVENT LISTENERS ****/

  // listen for clicks on reset button to reset the game
  $('#reset').on('click', function() {
    resetAll();
  });

  var resetAll = function() {
    // reset the board
    $boxes.text('');
    $boxes.removeClass('X');
    $boxes.removeClass('O');
    // create a new game
    game = new Game();
  };

  // listen for clicks on the boxes to play the game
  $boxes.on('click', function() {
    // console.log(game.moves);
    var $clickedBox = $(this);
    // console.log("clickedBox: ", $clickedBox);
    // console.log("board.children.children: ", $board.children().children());
    var clickedIndex = $board.children().children().index($clickedBox);


    game.move(clickedIndex, function(errorMsg){
      if (errorMsg !== null){
        // something went wrong!
        alert(errorMsg);
      } else {
        // the move worked, and the data has been updated.
        // mark this box in the display
        $clickedBox.text(game.turn);
        $clickedBox.addClass(game.turn);

        // change the turn
        game.changeTurn();

        // check for a winner 
        var winner = game.getWinner();
        if (winner === 'neither') {
          // there is no winner, and there are no empty spaces
          // alert the result and reset the game
          alert('Neither player won!');
          resetAll();
        } else if (winner !== null){
          // there is a winner! 
          // alert the win and reset the game
          alert('Player ' + winner + ' won!');
          resetAll();
        }
      }
    });
  });
});

var Game = function(player1, player2) {
  this.moves = 0;
  this.turn = 'X';
  this.board = new Board();
};


Game.prototype.changeTurn = function() {
  if (this.turn === 'X') {
    this.turn = 'O';
  } else {
    this.turn = 'X';
  }
};


Game.prototype.move = function(boxIndex, callback) {
  if (this.board.boxData[boxIndex] === '') {
    this.board.boxData[boxIndex] = this.turn;
    this.moves++;
    callback(null);
  } else if (this.moves < 9) {
    callback('Box already claimed. Try again!');
  } else {
    callback('No more possible moves!');
  }
};

// wrapper over board's getWinner method
// returns winning player if there is one, 
// 'neither' if the game is over without a winner,
// null if no winner yet
Game.prototype.getWinner = function() {
  var winningPlayer = this.board.getWinner();
  if (winningPlayer){
    return winningPlayer;
  } else if (this.moves < 9){
    return null; // play on!
  } else {
    return 'neither';
  }
};


var Board = function() {
  this.boxData = ['', '', '',
                  '', '', '',
                  '', '', ''];
};




// returns 'X' if player X owns the boxes at all three indices passed in, 
//   'O' if player O owns all three boxes passed in, or 
//   null otherwise
Board.prototype.allThree = function(firstIndex, secondIndex, thirdIndex) {
    var firstBoxOwner = this.boxData[firstIndex];
    var secondBoxOwner = this.boxData[secondIndex];
    var thirdBoxOwner = this.boxData[thirdIndex];

    if ((firstBoxOwner === secondBoxOwner) && (secondBoxOwner === thirdBoxOwner)){
      if (firstBoxOwner === 'X'){
        return 'X';
      } else if (firstBoxOwner === 'O'){
        return 'O';
      }
    }
    // we will only get to this point if we haven't returned
    // a player mark yet
    return null;
  };

  // check for wins across both diagonals
  // returns a player mark if one player owns all three boxes in one of the diagonals
  // returns null otherwise
Board.prototype.diagonalWinner = function() {
    var leftDownDiag = this.allThree(0, 4, 8);
    var rightUpDiag = this.allThree(2, 4, 6);

    // Using a special property of JS's OR (||) to return the winning mark
    // remember, as soon as JS finds a truthy side of an OR, 
    // it returns the *value* of that side.  So null || 'O' will give us 'O'.
    return leftDownDiag || rightUpDiag;
  };

  // check for wins on columns
  // returns a player mark if one player owns all three boxes in one of the columns
  // returns null otherwise
Board.prototype.columnWinner = function() {
    var leftCol = this.allThree(0, 3, 6);
    var middleCol = this.allThree(1, 4, 7);
    var rightCol = this.allThree(2, 5, 8);

    // using the || trick again
    return leftCol || (middleCol || rightCol);
  };

  // check for wins on rows
  // returns a player mark if one player owns all three boxes in one of the row
  // returns null otherwise
Board.prototype.rowWinner = function() {
    var topRow = this.allThree(0, 1, 2);
    var middleRow = this.allThree(3, 4, 5);
    var bottomRow = this.allThree(6, 7, 8);

    return topRow || (middleRow || bottomRow);
  };

  // helper function to check for winner
Board.prototype.getWinner = function() {
    return this.diagonalWinner() || (this.rowWinner() || this.columnWinner());
  };
