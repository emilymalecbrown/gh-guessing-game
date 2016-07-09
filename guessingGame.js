$('document').ready(function() {
  var winningNumber = generateWinningNumber(); 
  var playerGuess = playerGuessSubmission(); 
  var guessArray = []; 

  function generateWinningNumber() {
    return Math.floor((Math.random() * 100) + 1);
  }
  alert(winningNumber);


  function playerGuessSubmission() {
    $('#submitGuess').on("click", function() {
      playerGuessValue = document.getElementById('playerGuess').value; 
      
      //guiding functions
      var absDiff = checkGuess(playerGuessValue, winningNumber);
      var upOrDown = lowerOrHigher(playerGuessValue, winningNumber);
      feedback(absDiff, upOrDown);
      
      //guesses 
      guessArray.push(playerGuessValue);
      var showGuesses = guesses(guessArray + " ");

      });
  }


    function checkGuess(playerGuess, winningNumber) {
      if (playerGuessValue > 100 || playerGuessValue < 0) {
        return "Plase enter a valid number!";
      } else if (playerGuessValue == winningNumber && guessArray.length < 5) {
        return "WINNER!";
      } else if (Math.abs(playerGuessValue-winningNumber) > 20 && guessArray.length < 5) {
        return "Ice cold... Brrrrr.";
      } else if (Math.abs(playerGuessValue-winningNumber) < 20 && guessArray.length < 5) {
        return "Getting warmer!";
      } else if (Math.abs(playerGuessValue-winningNumber) < 10 && guessArray.length < 5) {
        return "Very hot. Ouch!";
      } else if (guessArray.length >= 5) {
        return "You lose!"
      }
    }

    function lowerOrHigher(playerGuess, winningNumber) {
      if ((playerGuessValue > 100 || playerGuessValue < 0)) {
        return "That's gonna count (for now)";
      } else if (playerGuessValue == winningNumber && guessArray.length < 5) {
        return "Play again?";
      } else if (playerGuessValue < winningNumber && guessArray.length < 5) {
        return "Guess higher next time!";
      } else if (playerGuessValue > winningNumber && guessArray.length < 5) {
        return "Guess lower next time!";
      } else if (guessArray.length >= 5) {
        return "Restart?";
      }
    }

    function feedback(theAbsDiff, theUpOrDown) {
      $('#hint').text(theAbsDiff + "\n" + theUpOrDown);
    }

    function guesses(guessArray) {
      $('#guesses').text(guessArray);
    }


});