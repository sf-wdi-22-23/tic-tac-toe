# Tic Tac Toe - Weekend Lab

**Objective:** Build a tic-tac-toe game in HTML, CSS, and JavaScript.


This week, we've been learning about working with conditionals and loops, as well as writing functions. We've also learned about the structure of the DOM and how we can interact with it using CSS and JavaScript. We've looked at Bootstrap's CSS library and at jQuery, a JavaScript library for front end web development.

For your first weekend lab, we'll be making a tic-tac-toe game using your knowledge and skills from this week.

## Minimum Requirements
* Users should be able to click on any empty square to make a move.
* Every move should alternate between marking an `X` and `O` (the two players).
* A cell should not be able to changed once marked.
* Users should be able to click a "reset" button to clear all the `X`s and `O`s from the board.

## Suggested Workflow

**Project setup**

1. Fork this repository to create a copy on your GitHub account.
1. Clone the tic-tac-toe repository from *your GitHub account* into your `dev` folder to create a local copy on your computer.

2. Use `index.html` as your starting point on this project. There is already some starter code in `index.html`, `styles.css`, and `ticTacToe.js`. 

1. Make sure that jQuery and Bootstrap's CSS are linked in your `index.html`. Also link your custom CSS and JavaScript files to your `index.html`.

3. Test that your CSS and JavaScript files are linked to your `index.html` by adding an alert to `ticTacToe.js` and opening `index.html` in the browser. You should see part of an empty tic-tac-toe game board, and you should also see your alert message pop up.

1. Use Bootstrap's grid system to create the rest of the empty tic-tac-toe game board. The empty board should look a like this:

![empty tic tac toe board](board.png)

4. The next step is to create the tic-tac-toe gameplay with jQuery:
	* First locate DOM elements before trying to use them in your app. Use the `$()` jQuery function with CSS selectors to locate each of your target elements. Try this in your console to make sure your selection works.  
	* After finding the elements, start writing logic using `.on` to set up `click` events for those elements.  
	* You will also need a variable to keep track of moves. This will be used to indicate whether to draw an `X` or an `O`.  
	* When marking an individual cell, use jQuery to add a class to the cell to display separate colors for `X`'s and `O`'s.

5. **Submission**: 
	* Create a `tic-tac-toe` directory inside your homework directory.  
	* Copy over your `index.html`, `styles.css`, and `ticTacToe.js` from your `dev/tic-tac-toe` directory to your `22-homework/tic-tac-toe` or `23-homework/tic-tac-toe` directory.

	* Change directories into the new `tic-tac-toe` directory inside your homework directory. List all the files with `ls -a`. 

	* If you are *sure* that you are inside your new homework `tic-tac-toe` directory and you see a `.git` directory listed there, run `rm -rf .git` to remove the `.git` file. (We don't want a whole tic-tac-toe repository nested inside your homework repository -- that would get too complicated!)

## Bonus
* Display a message to indicate which turn is about to be played.
* If a player wins (by drawing three of their mark in a row, column, or diagonal), stop the game and alert the winner.
	* **Hint:** Determine a set of winning combinations. Check those combinations against the board contents after every move.
