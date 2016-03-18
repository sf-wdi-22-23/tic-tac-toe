# Tic Tac Toe - Weekend Lab

**Objective:** Build a tic-tac-toe game in HTML, CSS, and JavaScript.


This week, we've been learning about working with conditionals and loops, as well as writing functions. We've also learned about the structure of the DOM and how we can interact with it using CSS and JavaScript. We've looked at Bootstrap's CSS library and at jQuery, a JavaScript library for front end web development.

For your first weekend lab, we'll be making a tic-tac-toe game using your knowledge and skills from this week.

## Baseline Requirements
* Users should be able to click on any empty box to make a move.   
* Every move should alternate between marking an `X` and `O` (the two players).  
* A user should not be able to claim a box that has already been claimed for `X` or `O`.
* Users should be able to click a "reset" button to clear all `X`'s and `O`'s from the board and restart the game.


## Further Challenge Ideas

* Display a message to indicate which player's turn is about to be played (`X` or `O`).    

* If a player wins, show a message with the mark of the winner.  Separate your code that finds the winner (if any) into its own function.

* If the board fills up before anyone wins, show a message that it was a draw.

* Display separate colors for `X`'s and `O`'s.

* Creatively style your tic-tac-toe game!  

* Research "event delegation," and attach your event listeners to the whole board instead of individual boxes.

## How to Get Started

**Play Tic-Tac-Toe**

Remind yourself how tic-tac-toe works by playing a few games with a classmate.

**Set up repository, files, and basic structure.**

1. Fork this repository to create a copy on your GitHub account.

1. Clone the tic-tac-toe repository from *your GitHub account* into your `wdi` folder to create a local copy on your computer.

2. Use `index.html` as your starting point on this project. There is already some starter code in `index.html`, `css/style.css`, and `js/app.js`.

1. Make sure that jQuery and Bootstrap's CSS are linked in your `index.html`. Also link your custom CSS and JavaScript files to your `index.html`.

3. Test that your CSS and JavaScript files are linked to your `index.html`. Add an alert to `app.js`, and change the color of the body in `style.css`. Then open `index.html` in the browser. You should see part of an empty tic-tac-toe game board with your background color, and you should also see your alert message pop up.

1. There's part of a board in `index.html` already. Use Bootstrap's grid system to create the rest of the empty tic-tac-toe game board. The empty board should look like this:

    <img src="board.png" width="300px" alt="empty tic tac toe board">

1. Add a reset button below the board.

**Target DOM elements for gameplay**

1. Use the `$()` jQuery function with CSS selectors to locate each of the DOM elements your user will click. Try this in your console to make sure your selection works. Set up variables for them in your `app.js`.

1. After you find the element(s), use `.on` to set up a simple `click` event listener for each of those elements. Start by having your event handler just log a message that the element was clicked.  

1. Most of your game logic will happen when a user clicks inside the board, on one of the boxes.


## Hints and Tips:

* The jQuery API docs are a great source of information on what jQuery can do (and how)!  Two categories you might find particularly useful are <a href="https://api.jquery.com/category/manipulation/">DOM Manipulation</a> and <a href="https://api.jquery.com/category/css/">CSS</a>. **When you're looking at jQuery docs for a method, scroll down a little to find the examples!**

* When the jQuery selector returns an "array" of elements, it's actually giving us a special jQuery collection. Use the  [`.eq`](https://api.jquery.com/eq/) method with regular array indices to get the jQuery elements out of the collection:

   ```
   var paragraphs = $('p');
   var firstParagraph = paragraphs.eq(0); // returns a jQuery element (so jQuery functions work on it)
   var vanillaVersion = paragraphs[0]; // returns the JavaScript version of the element (most jQuery functions won't work on it)
   ```


<details><summary>Track Turns</summary><p>You need to keep track of whose turn it is. This will be important when deciding whether to draw an `X` or an `O`. Try storing the turn as a variable.</p></details>

<details><summary>Claim a Box</summary><p>You'll need a way for your code to check whether a box is empty. When a box is claimed, use jQuery to change the box's DOM element somehow. Then you can check that feature of the box later! Test your ideas in the console.</p></details>

<details><summary>Reset Everything</summary><p>Your reset button should change the board back to its initial configuration. Make sure you empty all the boxes and reset all other variables to their starting values. Don't forget the starting turn variable!</p></details>


<details><summary>Style `X`s and `O`s</summary><p>Use jQuery to add a CSS class to the box when a player makes a move. (Not sure how? Google "jQuery add class", choose the jQuery API Documentation result, and find some examples!)</p></details>


<details><summary>Detect a Draw</summary><p>The game can end when someone wins or when the board fills up. How can you check whether the board is full or still has space for the players to move?</p></details>


<details><summary>Win!</summary>
    <details><summary>Hint: what is winning?</summary><p>Start by listing all the ways to win at tic-tac-toe. There are 8 winning combinations of boxes!<p></details>
    <details><summary>Big Hint: when to check for winner?</summary>Check for your winning combinations every time someone could win -- after every move!</p></details>  
    <details><summary>Hint: showing a message</summary>Try an `alert`. For an extra challenge, put a message directly onto the page using jQuery!</details>
</details>



## Submission

* As you make code changes, frequently commit and push to GitHub.
* Once you've finished the assignment and pushed your work to GitHub, make a pull request from your fork to the original repo.
* When we come back, you'll show off your tic-tac-toe game in a "science fair" style open presentation!
