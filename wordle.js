function darkMode() {
    var element = document.body;
    element
        .classList
        .toggle("dark-mode");
};

document.getElementById("questionmark").addEventListener("click", function () {
        var hintText = document.getElementById("hint-text");
        hintText.innerHTML = gameState.hint; // Set the hint text from the gameState.hint variable
        if (hintText.style.display === "block") {
            hintText.style.display = "none";

        } else {
            hintText.style.display = "block";
        }
    });
const infoToggle = document.getElementById("info");

infoToggle.addEventListener("click", () => {
    var panel = document.getElementById("information");
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }

});
const wordDictionary = [
    { word: "ache", hint: "A dull persistent pain" },
    { word: "acne", hint: "A skin condition with pimples" },
    { word: "acre", hint: "A measure of land" },
    { word: "adze", hint: "A cutting tool similar to an axe" },
    { word: "aero", hint: "Relating to aviation or aircraft" },
    { word: "aged", hint: "Having advanced in age" },
    { word: "agog", hint: "Very eager or curious" },
    { word: "ails", hint: "To cause physical or emotional discomfort" },
    { word: "able", hint: "Capable of doing something" },
    { word: "acid", hint: "A corrosive substance" },
    { word: "aged", hint: "Having advanced in age" },
    { word: "ajar", hint: "Partially open" },
    { word: "ally", hint: "A friend or associate" },
    { word: "amid", hint: "Surrounded by" },
    { word: "ante", hint: "A poker term for placing a bet" },
    { word: "arch", hint: "A curved structure" },
    { word: "army", hint: "A military organization" },
    { word: "arts", hint: "Creative endeavors" },
    { word: "avid", hint: "Enthusiastic" },
    { word: "away", hint: "Not present" },
    { word: "axis", hint: "A central line around which something rotates" },
    { word: "baby", hint: "A very young child" },
    { word: "back", hint: "The rear part of something" },
    { word: "bake", hint: "To cook in an oven" },
    { word: "bald", hint: "Having no hair on the head" },
    { word: "band", hint: "A group of musicians" },
    { word: "bare", hint: "Without covering or clothing" },
    { word: "bark", hint: "The protective outer layer of a tree trunk" },
    { word: "base", hint: "The bottom or foundation of something" },
    { word: "bash", hint: "To strike violently" },
    { word: "beam", hint: "A long, sturdy piece of wood or metal" },
    { word: "bear", hint: "A large, furry mammal" },
    { word: "beat", hint: "To strike repeatedly" },
    { word: "beer", hint: "An alcoholic beverage made from fermented grains" },
    { word: "bell", hint: "A musical instrument or warning device" },
    { word: "belt", hint: "A strip of leather or other material worn around the waist" },
    { word: "bend", hint: "To curve or flex" },
    { word: "best", hint: "Of the highest quality or excellence" },
    { word: "beta", hint: "A testing phase of software development" },
    { word: "bias", hint: "A tendency or preference towards something" },
    { word: "bike", hint: "A two-wheeled vehicle powered by pedals" },
    { word: "bill", hint: "A statement of money owed" },
    { word: "bind", hint: "To tie or fasten together" },
    { word: "bird", hint: "A feathered animal that lays eggs" },
    { word: "bite", hint: "To use the teeth to cut or pierce" },
    { word: "blow", hint: "To force air out of the mouth" },
    { word: "blue", hint: "A color between green and violet" },
    { word: "cage", hint: "A structure for confining animals" },
    { word: "call", hint: "To communicate by phone" },
    { word: "calf", hint: "A young cow or bull" },
    { word: "came", hint: "Past tense of 'come'" },
    { word: "cape", hint: "A type of coat with a hood" },
    
    { word: "dare", hint: "To have the courage to do something" },
    { word: "dark", hint: "Having little or no light" },
    { word: "date", hint: "A social or romantic appointment" },
    { word: "dawn", hint: "The time of day when light first appears" },
    { word: "dead", hint: "No longer alive" },
    { word: "each", hint: "Every one of a group" },
    { word: "earn", hint: "To make money through work or investment" },
    { word: "easy", hint: "Not difficult" },
    { word: "echo", hint: "A repetition of sound" },
    { word: "edge", hint: "The outer or furthest point of something" },
    
    { word: "face", hint: "The front part of the head" },
    { word: "fact", hint: "A true piece of information" },
    { word: "fade", hint: "To gradually disappear" },
    { word: "fail", hint: "To be unsuccessful" },
    { word: "fair", hint: "Treating people equally" },
    
    { word: "gasp", hint: "To take a sudden, sharp breath" },
    { word: "gate", hint: "A movable barrier used to block an opening" },
    { word: "gave", hint: "Past tense of 'give'" },
    { word: "gear", hint: "A mechanical device for transmitting power" },
    { word: "gift", hint: "Something given to someone without payment" },
    { word: "hail", hint: "To greet enthusiastically" },
  { word: "hair", hint: "A thread-like structure that grows from the skin" },
  { word: "half", hint: "One of two equal parts" },
  { word: "halt", hint: "To stop or pause" },
  { word: "hand", hint: "The body part at the end of the arm" },
  { word: "idea", hint: "A thought or concept" },
  { word: "idle", hint: "Not active or in use"},
    { word: "inch", hint: "A unit of length equal to 1/12 of a foot" },
    { word: "into", hint: "Inside of" },
    { word: "iron", hint: "A heavy metal used to make tools" },
    { word: "item", hint: "A single part of a larger whole" },
    {word: "jail", hint: "A place of confinement for criminals"},
    { word: "jerk", hint: "To move suddenly and violently" },
    { word: "join", hint: "To become part of a group" },
    { word: "joke", hint: "Something said or done to cause laughter" },
    { word: "jump", hint: "To move upward or forward" },
    { word: "just", hint: "Fair or right" },
    { word: "keep", hint: "To maintain or continue" },
    { word: "kick", hint: "To strike with the foot" },
    { word: "kill", hint: "To cause the death of" },
    { word: "kind", hint: "Having a good or generous nature" },
    {word: "kite", hint: "A toy that flies in the air"},
    { word: "knee", hint: "The joint between the leg and the thigh" },
    { word: "knew", hint: "Past tense of 'know'" },
    { word: "knit", hint: "To make fabric by interlocking loops of yarn" },
    { word: "knob", hint: "A round handle" },
    {word:"lord", hint: "A man of high rank"},
    {word:"lamp",hint:"shines bright like a diamond but in a room"} ,   
  ];
  
/* Set the width of the sidebar to 0 (hide it) */
let gameState = {
    gameGrid: Array(4)
        .fill()
        .map(() => Array(4).fill('')),
    currentRow: 0,
    currentCol: 0,
    hiddenWord: '',
    hint: ''
}

function word_generator(){
    let word = wordDictionary[Math.floor(Math.random()*wordDictionary.length)];
    gameState.hiddenWord = word.word.toUpperCase();
    gameState.hint = word.hint;
}
// var getWord = {
//     word: '',
//     hint: ''
// };
// // in case you want to use the API
// const listOfWords = async () => {
//     var startButton = document.getElementById("startButton");
//     startButton.innertext = '';
//     var text = "Loading..."
//     startButton.innerHTML = text;
//     startButton.disabled = true;

//     const res = await fetch("https://api.masoudkf.com/v1/wordle", {
//         headers: {
//             "x-api-key": "sw0Tr2othT1AyTQtNDUE06LqMckbTiKWaVYhuirv"
//         }
//     });
//     let json = await res.json();
//     let {dictionary} = json;
//     getWord = dictionary[Math.floor(Math.random() * dictionary.length)];
//     getWord.word = getWord
//         .word
//         .toUpperCase()
//     getWord.hint = getWord.hint;
//     startButton.innerHTML = '';
//     var text = "Start Over"
//     startButton.innerHTML = text;
//     startButton.disabled = false;
//     return getWord.word
// }

// listOfWords()
//     .then((words) => {
//         gameState.hiddenWord = words;
//         gameState.hint = getWord.hint;

//     })
//     .catch((err) => {
//         console.log("Error", err);
//     });

function init() {
    const gameContainer = document.getElementById("gameContainer");
    word_generator();
    makeGameGrid(gameContainer);
    keyboardpresses();
}
function makeGameGrid(gameContainer) {
    const gameGrid = document.createElement("div");
    gameGrid.className = 'gameGrid';
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            makeBox(gameGrid, i, j);
        }
    }
    gameContainer.appendChild(gameGrid);

}
function makeBox(gameGrid, i, j, letter = '') {
    const charBox = document.createElement("div");
    charBox.className = "charBox";
    charBox.id = 'charBox.' + i + '' + j;
    charBox.textContent = letter;
    gameGrid.appendChild(charBox);
    return charBox;
}

function keyboardpresses() {
    currentbox = document.getElementById('charBox.' + gameState.currentRow + '' + gameState.currentCol);
    currentbox.classList.add('highlight');
    document.body.onkeydown = (e) => {
        let key = e.key;
        key = key.toUpperCase();
        if (key === "ENTER") {
            while (gameState.currentCol < 4) {
                alert("Please enter a word of 4 letters")
                return;
            }
            let word = getEnteredWord();
            checkletters();
            checkTurn(word);
            gameState.currentRow++;
            gameState.currentCol = 0;
            currentbox = document.getElementById('charBox.' + gameState.currentRow + '' + gameState.currentCol);
            currentbox.classList.add('highlight');
        }
        if (key === "BACKSPACE") {
            deleteletter();
        }
        if (isAlpha(key)) {
            addLetter(key);
        }
        updateGameGrid();
    }
}

function checkTurn(word) {
    let won = gameState.hiddenWord === word
    let gameOver = gameState.currentRow === 3
    if (won) {
        const bodyvanish = document.getElementById("gameContainer");
        bodyvanish.style.display = "none";
        const game = document.getElementById("gameContainer");
        game.style.display = "none";
        const win = document.getElementById("winner");
        win.style.display = "block";
        

    } else if (gameOver) {
        var gameover = document.getElementById("hint-text");
        gameover.innerHTML = "Game Over! The word was " + gameState.hiddenWord;
        gameover.style.display = "block";
        gameover.style.background = "red";

    }
}

function checkletters() {
    for (let i = 0; i < 4; i++) {
        let charBox = document.getElementById(
            'charBox.' + gameState.currentRow + '' + i
        );
        let letter = charBox.textContent;
        if (letter == gameState.hiddenWord[i]) {
            charBox.classList.add('animated')
            charBox.classList.add('correct');
        } else if (gameState.hiddenWord.includes(letter)) {
            charBox.classList.add('animated')
            charBox
                .classList
                .add('contains');

        } else {
            charBox.classList.add('animated')
            charBox
                .classList
                .add('empty');
        }
        
        
    }
}
function getEnteredWord() {
    return gameState
        .gameGrid[gameState.currentRow]
        .reduce((previous, current) => previous + current);
}
function updateGameGrid() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let charBox = document.getElementById('charBox.' + i + '' + j);
            charBox.textContent = gameState.gameGrid[i][j];
        }
    }

}
function isAlpha(key) {
    return key.length === 1 && key.match(/[A-Z]/i);
}
function deleteletter() {
    if (gameState.currentCol === 0) {
        return;
    }
    else if (gameState.currentCol === 4 ) {
        let prev = document.getElementById('charBox.' + gameState.currentRow + '' + (gameState.currentCol-1));
        prev.classList.add('highlight');
        gameState.gameGrid[gameState.currentRow][gameState.currentCol - 1] = "";
        gameState.currentCol--;

        return;
    }
    let prev = document.getElementById('charBox.' + gameState.currentRow + '' + gameState.currentCol);
    prev.classList.remove('highlight');
    let next = document.getElementById('charBox.' + gameState.currentRow + '' + (gameState.currentCol - 1));
    next.classList.add('highlight');
    gameState.gameGrid[gameState.currentRow][gameState.currentCol - 1] = "";
    gameState.currentCol--;
}
function addLetter(key) {
    if (gameState.currentCol === 4){
        return;
    }
    if (gameState.currentCol === 3 && gameState.currentRow === 3) {
        let prev = document.getElementById('charBox.' + gameState.currentRow + '' + gameState.currentCol);
        prev.classList.remove('highlight');
        gameState.gameGrid[gameState.currentRow][gameState.currentCol] = key;
        gameState.currentCol++;
        return;
    }
    else if(gameState.currentCol === 3){
        let prev = document.getElementById('charBox.' + gameState.currentRow + '' + gameState.currentCol);
        prev.classList.remove('highlight');
        gameState.gameGrid[gameState.currentRow][gameState.currentCol] = key;
        gameState.currentCol++;
        return;

    }
    let prev = document.getElementById('charBox.' + gameState.currentRow + '' + gameState.currentCol);
    prev.classList.remove('highlight');
    let next = document.getElementById('charBox.' + gameState.currentRow + '' + (gameState.currentCol + 1));
    next.classList.add('highlight');
    gameState.gameGrid[gameState.currentRow][gameState.currentCol] = key;
    gameState.currentCol++;
}
function refresh() {
    gameState.gameGrid = Array(4)
        .fill()
        .map(() => Array(4).fill(''));
    gameState.currentRow = 0;
    gameState.currentCol = 0;
    const gameContainer = document.getElementById("gameContainer");
    const winner = document.getElementById("winner");
    winner.style.display = "none";
    gameContainer.style.display = "grid";

    // // to get a random word from the list of words
    // listOfWords()
    //     .then((words) => {
    //         gameState.hiddenWord = words;
    //         gameState.hint = getWord.hint;
    //         console.log(gameState.hiddenWord);
    //         console.log(gameState.hint);
    //     })
    //     .catch((err) => {
    //         console.log("Error", err);
    //     });

    clearGameGrid();
    updateGameGrid();
    word_generator();
    keyboardpresses();

}
function clearGameGrid() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let charBox = document.getElementById('charBox.' + i + '' + j);
            charBox.classList.remove('animated')
            charBox
                .classList
                .remove('correct');
            charBox
                .classList
                .remove('contains');
            charBox
                .classList
                .remove('empty');
            charBox.classList.remove('highlight');
        }
    }
    var gameover = document.getElementById("hint-text");
    gameover.style.display = "none";


}
init();