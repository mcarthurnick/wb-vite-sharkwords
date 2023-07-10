import './style.css';
import getRandomWord from './src/randomWord.js';
import setSharkImage from './src/sharkImage.js';
import setupWord from './src/word.js';
import { isLetterInWord , revealLetterInWord} from './src/word.js';
import setupGuesses from './src/guess.js'


document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();
  setSharkImage(document.getElementById("shark-img"), 0);
  setupWord(document.querySelector('#word-container'), word);

  //revealLetterInWord(word[0]);
  const gameStatus = document.getElementById("game-status")
  const handleGuess = (guessEvent, letter) => {
    const button = guessEvent.target;
    button.setAttribute('disabled', '');

  let isWordComplete = true;
  for (const el of document.querySelectorAll('.letter-box')) {
    if (el.innerText === '') {
      isWordComplete = false;
      break; // break will exit the loop
    }
  }

    if(isLetterInWord(letter)){
      revealLetterInWord(letter)
      
    } else {
      numWrong ++;
      setSharkImage(document.getElementById("shark-img"), numWrong)
      if(numWrong === 5){
        gameStatus.innerText = "You lose!"
        
        const allbtns = document.querySelectorAll("button")
  
        for(let i = 0; i < allbtns.length; i++){
          allbtns[i].setAttribute('disabled', '')
        }
      }
      if(isWordComplete){
        gameStatus.innerText = "You win!"
      }
    }
  }
  
  setupGuesses(document.querySelector('#letter-buttons'), handleGuess);

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);

};

initSharkwords();
