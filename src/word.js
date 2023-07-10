let word;

function setupWord(element, initWord) {
    word = initWord;
    word.split('').forEach(() => {
        element.insertAdjacentHTML('beforeend', `<div class="letter-box"></div>`)
    })
    
}

function isLetterInWord(letter) {
    return word.includes(letter)
}

function revealLetterInWord(letter) {
    const matches = document.querySelectorAll("div.letter-box")
    word.split('').forEach((element, index) => {
       if(element === letter){
        matches[index].innerHTML = letter;
       }
    })
}


export default setupWord;
export {isLetterInWord, revealLetterInWord};