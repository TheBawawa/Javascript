const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'scissors' || userInput === 'paper' || userInput === 'rock' || userInput === 'bomb') {
      return userInput
    }
    else {
      console.log('This is not a valid input')
    }
  }
  
  const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random()*3)
    switch (randomNum) {
      case 0:
        return 'scissors'
        break;
      case 1:
        return 'paper'
        break;
      case 2:
        return 'rock'
        break;
    }
  }
  
  const determineWinner = (usersChoice, computerChoice) => {
    if (usersChoice === computerChoice) {
      return "It's a tie!";
    }
    if (usersChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Unlucky, Computer wins!';
      }
      else {
        return 'Nice, You win!';
      }
    }
    if (usersChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Unlucky, Computer wins!';
      }
      else {
        return 'Nice, You win!';
      }
    }
    if (usersChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Unlucky, Computer wins!';
      }
      else {
        return 'Nice, You win!';
      }
    }
    if (usersChoice === 'bomb') {
      return 'You destroyed the computer! Congratulations!'
    }
  }
  
  const startGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
  
    console.log(`You picked: ${userChoice}`)
    console.log(`Computer picked: ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice))
  }
  startGame()