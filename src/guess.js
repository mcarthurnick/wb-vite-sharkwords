const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function setupGuesses(element, handleGuess) {
  alphabet.split('').forEach((letter) => { //This is splitting up the alphabet string and then looping over each letter using forEach
    const btn = document.createElement('button'); //creating an button element and setting it to btn
    btn.innerText = letter; //Setting the innerText of the button to the current letter
    btn.addEventListener('click', (e) => handleGuess(e, letter)); //adding an eventListener when the letter is clicked it passes the element and the letter
    element.append(btn); //no idea what this is doing to be honest.
  });
}

export default setupGuesses;
