// function play(){
//   const homeSection = document.getElementById('home-screen');
//   homeSection.classList.add('hidden');

//   const playgroundSection = document.getElementById('play-ground');
//   playgroundSection.classList.remove('hidden');
// }

function handleKeyboarKeyUpEvent(event){
  const playerPressed = event.key;


  // get the expected to press
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  // check matched or not
if(playerPressed === expectedAlphabet){
  console.log('you get a point');
  // update score:
  //1 get the current score

  // const currentScoreElement = document.getElementById('current-score');
  // const currentScoreText = currentScoreElement.innerText;
  // const currentScore = parseInt(currentScoreText)
  // console.log(currentScore);
  // const updatedScore = currentScore + 1;
  // // new score
  // currentScoreElement.innerText = updatedScore;


  const currentScore = getTextElementValueById('current-score');
  console.log(currentScore)
  const updatedScore = currentScore + 1;
  setTextElementValueById('current-score', updatedScore)


  // start a new round
  removeBackgroundColorById(expectedAlphabet);
  continueGame();
}
else{
  console.log('you missed. you lost a life');

  // const currentLifeElement = document.getElementById('current-life');
  // const currentLifeText = currentLifeElement.innerText;
  // const currentLife = parseInt(currentLifeText);
  // const newLife = currentLife -1;

  // currentLifeElement.innerText = newLife;

  const currentLife = getTextElementValueById('current-life')
  const updatedLife = currentLife - 1;
  setTextElementValueById('current-life', updatedLife);

  if(updatedLife === 0){
    gameOver();
  }
}
};



// capture keyboard key press
document.addEventListener('keyup', handleKeyboarKeyUpEvent);


function continueGame(){
  // step 1: generate a random alphabet
  const alphabet = getRandomAlphabet();
  console.log('Your random alphabet', alphabet)

  // set randomly generate alphabet to the screen show it 
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;

  // set bankground color
  setBackgroundColorById(alphabet)
}

function play(){
  hideElementById('home-screen');
  hideElementById('score')
  showElementById('play-ground');
  continueGame();
}

function gameOver(){
  hideElementById('play-ground');
  showElementById('score')
}
