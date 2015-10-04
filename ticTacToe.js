// wait for the DOM to finish loading
$(document).ready(function(){

var gameBoard = [[[null], [null], [null]],
				[[null], [null], [null]],
				[[null], [null], [null]]];
var x = 1;
var o = 2;
var turn = x;
var winner = "none";

//a function that sets all the squares to null
function clearBoard() {
	//loop through the rows
    for(i = 0; i < gameBoard.length; i++) {
    	//loop through each spot in the row
        for(a = 0; a < gameBoard[i].length; a++) {
        	//set the square to null
            gameBoard[i][a] = null;

        }
    }
    //clear all the squares
    $('#board .row').children().text(' ');
}

//a function to check if the game is over and to end it
function isGameOver() {
	checkWinner();
	//what to do if a player has won to announce the win and get ready for a new game
	if(winner === "player X") {
		clearBoard();
		winner = "none";
		turn = x;
		alert("Player X has won the game!");
		
	} else if(winner === "player O") {
		clearBoard();
		winner = "none";
		turn = x;
		alert("Player O has won the game!");
		
	}
}

//a function to determine if there is a winner
function checkWinner() {
	if(gameBoard[0][0] === 1 && gameBoard[0][1] === 1 && gameBoard[0][2] === 1) {
		winner = "player X";
	} else if(gameBoard[1][0] === 1 && gameBoard[1][1] === 1 && gameBoard[1][2] === 1) {
		winner = "player X";
	} else if(gameBoard[2][0] === 1 && gameBoard[2][1] === 1 && gameBoard[2][2] === 1) {
		winner = "player X";
	} else if(gameBoard[0][0] === 1 && gameBoard[1][0] === 1 && gameBoard[2][0] === 1) {
		winner = "player X";
	} else if(gameBoard[0][1] === 1 && gameBoard[1][1] === 1 && gameBoard[2][1] === 1) {
		winner = "player X";
	} else if(gameBoard[0][2] === 1 && gameBoard[1][2] === 1 && gameBoard[2][2] === 1) {
		winner = "player X";
	} else if(gameBoard[0][0] === 1 && gameBoard[1][1] === 1 && gameBoard[2][2] === 1) {
		winner = "player X";
	} else if(gameBoard[0][2] === 1 && gameBoard[1][1] === 1 && gameBoard[2][0] === 1) {
		winner = "player X";
	} else if(gameBoard[0][0] === 2 && gameBoard[0][1] === 2 && gameBoard[0][2] === 2) {
		winner = "player O";
	} else if(gameBoard[1][0] === 2 && gameBoard[1][1] === 2 && gameBoard[1][2] === 2) {
		winner = "player O";
	} else if(gameBoard[2][0] === 2 && gameBoard[2][1] === 2 && gameBoard[2][2] === 2) {
		winner = "player O";
	} else if(gameBoard[0][0] === 2 && gameBoard[1][0] === 2 && gameBoard[2][0] === 2) {
		winner = "player O";
	} else if(gameBoard[0][1] === 2 && gameBoard[1][1] === 2 && gameBoard[2][1] === 2) {
		winner = "player O";
	} else if(gameBoard[0][2] === 2 && gameBoard[1][2] === 2 && gameBoard[2][2] === 2) {
		winner = "player O";
	} else if(gameBoard[0][0] === 2 && gameBoard[1][1] === 2 && gameBoard[2][2] === 2) {
		winner = "player O";
	} else if(gameBoard[0][2] === 2 && gameBoard[1][1] === 2 && gameBoard[2][0] === 2) {
		winner = "player O";
	} 

}

	//set up all the squares with null
	clearBoard();
	alert("Player X, it's your turn first!");

	//what to do when the top-right square is clicked
	$('#one').click(function() {
		//check to make sure the square is still null
		if(gameBoard[0][0] === null) {
			//check to see if it's player X's turn
			if(turn === x) {
				//place an x in the square
				$(this).text('x');
				//set the gameBoard array to var x
				gameBoard[0][0] = x;
				//change to player O's turn
				turn = o;
				//what to do if it was not player X's turn
			} else {
				//place an O in the square
				$(this).text('o');
				//set the gameBoard array to var o
				gameBoard[0][0] = o;
				//change to player X's turn
				turn = x;
			}
			//if the square is not null let the player know
		} else {
			alert("That square is already taken");
		}
		// console.log(gameBoard);
		//check to see if the game is over
		isGameOver();
		//alert the next player it's their turn
		if(turn === x) {
			alert("Player X, it's your turn next!");
		} else {
			alert("Player O, it's your turn next!");
		}
	});
	
	//repeat same as above for when each square is clicked
	$('#two').click(function() {
		if(gameBoard[0][1] === null) {
				if(turn === x) {
				$(this).text('x');
				gameBoard[0][1] = x;
				turn = o;
			} else {
				$(this).text('o');
				gameBoard[0][1] = o;
				turn = x;
			}
		} else {
			alert("That square is already taken");
		}
		
		isGameOver();
		if(turn === x) {
			alert("Player X, it's your turn next!");
		} else {
			alert("Player O, it's your turn next!");
		}
	});

	$('#three').click(function() {
		if(gameBoard[0][2] === null) {
			if(turn === x) {
				$(this).text('x');
				gameBoard[0][2] = x;
				turn = o;
			} else {
				$(this).text('o');
				gameBoard[0][2] = o;
				turn = x;
			}
		} else {
			alert("That square is already taken");
		}
		isGameOver();
		if(turn === x) {
			alert("Player X, it's your turn next!");
		} else {
			alert("Player O, it's your turn next!");
		}
	});
	
	$('#four').click(function() {
		if(gameBoard[1][0] === null) {
			if(turn === x) {
				$(this).text('x');
				gameBoard[1][0] = x;
				turn = o;
			} else {
				$(this).text('o');
				gameBoard[1][0] = o;
				turn = x;
			}
		} else {
			alert("That square is already taken");
		}
		isGameOver();
		if(turn === x) {
			alert("Player X, it's your turn next!");
		} else {
			alert("Player O, it's your turn next!");
		}
	});
	
	$('#five').click(function() {
		if(gameBoard[1][1] === null) {
			if(turn === x) {
				$(this).text('x');
				gameBoard[1][1] = x;
				turn = o;
			} else {
				$(this).text('o');
				gameBoard[1][1] = o;
				turn = x;
			}
		} else {
			alert("That square is already taken");
		}
		isGameOver();
		if(turn === x) {
			alert("Player X, it's your turn next!");
		} else {
			alert("Player O, it's your turn next!");
		}
	});
	
	$('#six').click(function() {
		if(gameBoard[1][2] === null) {
			if(turn === x) {
				$(this).text('x');
				gameBoard[1][2] = x;
				turn = o;
			} else {
				$(this).text('o');
				gameBoard[1][2] = o;
				turn = x;
			}
		} else {
			alert("That square is already taken");
		}
		isGameOver();
		if(turn === x) {
			alert("Player X, it's your turn next!");
		} else {
			alert("Player O, it's your turn next!");
		}
	});
	
	$('#seven').click(function() {
		if(gameBoard[2][0] === null) {
			if(turn === x) {
				$(this).text('x');
				gameBoard[2][0] = x;
				turn = o;
			} else {
				$(this).text('o');
				gameBoard[0][2] = o;
				turn = x;
			}
		} else {
			alert("That square is already taken");
		}
		isGameOver();
		if(turn === x) {
			alert("Player X, it's your turn next!");
		} else {
			alert("Player O, it's your turn next!");
		}
	});
	
	$('#eight').click(function() {
		if(gameBoard[2][1] === null) {
			if(turn === x) {
				$(this).text('x');
				gameBoard[2][1] = x;
				turn = o;
			} else {
				$(this).text('o');
				gameBoard[2][1] = o;
				turn = x;
			}
		} else {
			alert("That square is already taken");
		}
		isGameOver();
		if(turn === x) {
			alert("Player X, it's your turn next!");
		} else {
			alert("Player O, it's your turn next!");
		}
	});
	
	$('#nine').click(function() {
		if(gameBoard[2][2] === null) {
			if(turn === x) {
				$(this).text('x');
				gameBoard[2][2] = x;
				turn = o;
			} else {
				$(this).text('o');
				gameBoard[2][2] = o;
				turn = x;
			}
		} else {
			alert("That square is already taken");
		}
		isGameOver();
		if(turn === x) {
			alert("Player X, it's your turn next!");
		} else {
			alert("Player O, it's your turn next!");
		}
	});
	
	//reset all the squares to null when reset button is click
	$('#reset').click(function() {
		clearBoard();
		console.log(gameBoard);
	});

});


//all the junk I didn't use :)

// function playerXMove() {
// 	alert("player X pick your square.");
	//wait for a click

// 	switch(gameBoard) {
// 		case($('#one').click(function() {
// 			$(this).text('x');
// 			gameBoard[0][0] = x;
// 			console.log(gameBoard);
// 			turn = o;
// 			isGameOver();
// 		})):
// 		break;
// 		case($('#two').click(function() {
// 			$(this).text('x');
// 			gameBoard[0][1] = x;
// 			console.log(gameBoard);
// 			turn = o;
// 			isGameOver();
// 		})):
// 		break;
// 		case($('#three').click(function() {
// 			$(this).text('x');
// 			gameBoard[0][2] = x;
// 			console.log(gameBoard);
// 			turn = o;
// 			isGameOver();
// 		})):
// 		break;
// 		case($('#four').click(function() {
// 			$(this).text('x');
// 			gameBoard[1][0] = x;
// 			console.log(gameBoard);
// 			turn = o;
// 			isGameOver();
// 		})):
// 		break;
// 		case($('#five').click(function() {
// 			$(this).text('x');
// 			gameBoard[1][1] = x;
// 			console.log(gameBoard);
// 			turn = o;
// 			isGameOver();
// 		})):
// 		break;
// 		case($('#six').click(function() {
// 			$(this).text('x');
// 			gameBoard[1][2] = x;
// 			console.log(gameBoard);
// 			turn = o;
// 			isGameOver();
// 		})):
// 		break;
// 		case($('#seven').click(function() {
// 			$(this).text('x');
// 			gameBoard[2][0] = x;
// 			console.log(gameBoard);
// 			turn = o;
// 			isGameOver();
// 		})):
// 		break;
// 		case($('#eight').click(function() {
// 			$(this).text('x');
// 			gameBoard[2][1] = x;
// 			console.log(gameBoard);
// 			turn = o;
// 			isGameOver();
// 		})):
// 		break;
// 		case($('#nine').click(function() {
// 			$(this).text('x');
// 			gameBoard[2][2] = x;
// 			console.log(gameBoard);
// 			turn = o;
// 			isGameOver();
// 		})):
// 		break;
// 	}
// }


// function playerOMove() {
// 	alert("player O pick your square.");
// 	switch(gameBoard) {
// 		case($('#one').click(function() {
// 			$(this).text('o');
// 			gameBoard[0][0] = o;
// 			console.log(gameBoard);
// 			turn = x;
// 			isGameOver();
// 		})):
// 		break;
// 		case($('#two').click(function() {
// 			$(this).text('o');
// 			gameBoard[0][1] = o;
// 			console.log(gameBoard);
// 			turn = x;
// 			isGameOver();
// 		})):
// 		break;
// 		case($('#three').click(function() {
// 			$(this).text('o');
// 			gameBoard[0][2] = o;
// 			console.log(gameBoard);
// 			turn = x;
// 			isGameOver();
// 		})):
// 		break;
// 		case($('#four').click(function() {
// 			$(this).text('o');
// 			gameBoard[1][0] = o;
// 			console.log(gameBoard);
// 		})):
// 		break;
// 		case($('#five').click(function() {
// 			$(this).text('o');
// 			gameBoard[1][1] = o;
// 			console.log(gameBoard);
// 		})):
// 		break;
// 		case($('#six').click(function() {
// 			$(this).text('o');
// 			gameBoard[1][2] = o;
// 			console.log(gameBoard);
// 		})):
// 		break;
// 		case($('#seven').click(function() {
// 			$(this).text('o');
// 			gameBoard[2][0] = o;
// 			console.log(gameBoard);
// 		})):
// 		break;
// 		case($('#eight').click(function() {
// 			$(this).text('o');
// 			gameBoard[2][1] = o;
// 			console.log(gameBoard);
// 		})):
// 		break;
// 		case($('#nine').click(function() {
// 			$(this).text('o');
// 			gameBoard[2][2] = o;
// 			console.log(gameBoard);
// 		})):
// 		break;
// 	}
// }

// playerXMove(playerOMove(playerXMove(playerOMove(playerXMove(playerOMove(playerXMove(playerOMove(playerXMove))))))));

// for(var i = 0; i<9; i++) {
// 	if(turn === x) {
// 		//function to wait for a click
// 		playerXMove();
// 		//wait for a click here
		
// 		isGameOver();
// 	} else {
// 		//function to wait for a click
// 		playerOMove();
	
// 		isGameOver();
// 	}
// }
	





// });
	// var x;
	// var o;
// var gameBoard = [[$('#square1'),$('#square2'),$('#square3')],
//             	[$('#square4'),$('#square5'),$('#square6')],
//             	[$('#square7'),$('#square8'),$('#square9')]];


              
// 		alert("Your turn, player X");
//  			$('#board #square').on('click', function() {
//  				$(this).text('x');
//  				console.log("i'm working");
//  			// gameBoard[0][0]=x;
//  			// $('#board #square').off();
//  			});
 		
//  			$('#board #square').one('click', function() {
//  			$(this).text('o');
//  			$('#board #square').off();
//  			});
 		

// console.log(gameBoard[0][0]);
// });

// //getWinner();
// var count = 0;
// 	function getWinner() {
// 		if(('#board'[1][1].text() && '#board'[1][2].text() && '#board'[1][3].text()) === 'x') {
// 		alert("Winner is player X");
// 		}
// 	}
// 	 	if(count%2 === 0) {
//  			$('#board #square').one('click', function() {
//  			$(this).text('x');
//  			// $('#board #square').off();
//  		});
//  		} else {
//  			$('#board #square').one('click', function() {
//  			$(this).text('o');
//  			$('#board #square').off();
//  		});
//  		}
//  });

	// // this starts the game
 // 		$('#board #square').one('click', function() {
 // 			$(this).append('<p>X</p>');
 // 			$('#board #square').off();
 // 				// alert("Player O, choose your square.");
 // 					$('#board #square').one('click', function() {
	// 		 			$(this).append('<p>O</p>');
	// 		 			$('#board #square').off();
	// 		 				$('#board #square').one('click', function() {
	// 				 			$(this).append('<p>X</p>');
	// 				 			$('#board #square').off();
	// 				 				$('#board #square').one('click', function() {
	// 						 			$(this).append('<p>O</p>');
	// 						 			$('#board #square').off();
	// 						 				$('#board #square').one('click', function() {
	// 								 			$(this).append('<p>X</p>');
	// 								 			$('#board #square').off();
	// 								 			getWinner();
	// 								 		});
	// 						 		});
 // 							});
 // 					});
 // 			});



  // all code to manipulate the DOM
  // goes inside this function

//create a function for player x turn
 // 	function playerXTurn() {
 // 		alert("Player X, choose your square.");
 // 		$('#board #square').one('click', function() {
 // 			$(this).append('<p>X</p>');
 // 			$('#board #square').off();
 // 		});

 // 	}


 // //create a function for player o turn
 // 	function playerOTurn() {
 // 		alert("Player O, choose your square.");
 // 		$('#board #square').one('click', function() {
 // 			$(this).append('<p>O</p>');
 // 			$('#board #square').off();
 // 		});
 // 	}

 //When play button is clicked game can start

//  $('#play').on('click', function(e) {
//  	for(var i=0; i<5; i++) {
 		
 	
//  		if(i%2 === 0) {
//  			$('#board #square').click(function() {
//  				$(this).text('X');
 				
//  				console.log("my if statement is working");
//  				$('#board #square').off();

//  			});
//  		} else {
//  			$('#board #square').click(function() {
//  				$(this).text('O');
//  				$('#board #square').off();
 				
//  			});
//  		}
//  	console.log(i);
//  	} 
 	 
//   });

// });

 	// var count = 1;
 	// for(i=0; i<1; i++) {
 		
 	// 	if(i%2 === 0) {
 	// 		$('#board #square').one('click', function() {
 	// 		$(this).append('<p>X</p>');
 	// 		$('#board #square').off();
 	// 	});
 	// 	} else {
 	// 		$('#board #square').one('click', function() {
 	// 		$(this).append('<p>O</p>');
 	// 		$('#board #square').off();
 	// 	});
 	// 	}
 	// 	count++;
 	// }
 	// for(i=0; i<1; i++) {
 		
 	// 	if(i%2 === 0) {
 	// 		$('#board #square').one('click', function() {
 	// 		$(this).append('<p>X</p>');
 	// 		$('#board #square').off();
 	// 	});
 	// 	} else {
 	// 		$('#board #square').one('click', function() {
 	// 		$(this).append('<p>O</p>');
 	// 		$('#board #square').off();
 	// 	});
 	// 	}
 	// 	count++;
 	// }



 // });
// write a function for round 1
	
	
 	

 	

 	//When square is clicked, append with x

 	

 		// alert("Player O, choose your square.");

 		//When square is clicked, append with o
 		// $('#board #square').click(function() {
 		// $(this).append('<p>O</p>');

 	






