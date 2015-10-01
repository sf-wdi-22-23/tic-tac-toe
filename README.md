# Tic Tac Toe - Weekend Lab

**Objective:** Build a tic-tac-toe game in HTML, CSS, and JavaScript.


This week, we've been learning about working with conditionals and loops, as well as writing functions. We've also learned about the structure of the DOM and how we can interact with it using CSS and JavaScript. We've looked at Bootstrap's CSS library and at the JavaScript library jQuery.

For your first weekend lab, we'll be making a tic-tac-toe game using your knowledge and skills from this week.

## Minimum Requirements
* A user should be able to click on different squares to make a move.
* Every click should alternate between marking an `X` and `O`.
* When marking an individual cell, use jQuery to add a class to the cell to display separate colors for `X`'s and `O`'s.
* A cell should not be able to replayed once marked.
* Add a reset button that clears the contents of the board.

## How to Get Started
1. Fork this repository, and clone it onto your local computer.

2. Use `index.html` as your starting point on this project. There is already some starter code in `index.html`, `style.css`, and `ticTacToe.js`. Make sure you link your CSS and JavaScript files to your `index.html`.

3. Test that your CSS and JavaScript files are linked to your `index.html` by adding an alert to `ticTacToe.js` and opening `index.html` in the browser. You should see an empty tic-tac-toe game board, and you should also see your alert message pop up.

4. The next step is to create the tic-tac-toe gameplay with jQuery:
	* First locate DOM elements before trying to use them in your app. Use the `$()` jQuery function with CSS selectors to locate each of your target elements. Try this in your console to make sure your selection works.
	* After finding the elements, start writing logic using `.on` to set up `click` events for those elements.
	* You will also need a variable to keep track of moves. This will be used to indicate whether to draw an `X` or an `O`.

5. Submit the link to your GitHub repo.

## Bonus
* Display a message to indicate which turn is about to be played.
* If a player wins (by drawing three of their mark in a row), stop the game and alert the winner.
	* **Hint:** Determine a set of winning combinations. Check those combinations against the board contents after every move.
