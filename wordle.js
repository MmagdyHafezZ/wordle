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
const infoToggle = document.getElem`entById("info");

infoToggle.addEventListener("click", () => {
    var panel = document.getElementById("information");
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }

});

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
var getWord = {
    word: '',
    hint: ''
};
const listOfWords = async () => {
    var startButton = document.getElementById("startButton");
    startButton.innertext = '';
    var text = "Loading..."
    startButton.innerHTML = text;
    startButton.disabled = true;

    const res = await fetch("https://api.masoudkf.com/v1/wordle", {
        headers: {
            "x-api-key": "sw0Tr2othT1AyTQtNDUE06LqMckbTiKWaVYhuirv"
        }
    });
    let json = await res.json();
    let {dictionary} = json;
    getWord = dictionary[Math.floor(Math.random() * dictionary.length)];
    getWord.word = getWord
        .word
        .toUpperCase()
    getWord.hint = getWord.hint;
    startButton.innerHTML = '';
    var text = "Start Over"
    startButton.innerHTML = text;
    startButton.disabled = false;
    return getWord.word
}

listOfWords()
    .then((words) => {
        gameState.hiddenWord = words;
        gameState.hint = getWord.hint;

    })
    .catch((err) => {
        console.log("Error", err);
    });

function init() {
    const gameContainer = document.getElementById("gameContainer");
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
    listOfWords()
        .then((words) => {
            gameState.hiddenWord = words;
            gameState.hint = getWord.hint;
            console.log(gameState.hiddenWord);
            console.log(gameState.hint);
        })
        .catch((err) => {
            console.log("Error", err);
        });

    clearGameGrid();
    updateGameGrid();
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