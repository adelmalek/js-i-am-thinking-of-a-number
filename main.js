/** CONST AND VARIABLES */
const min = 1;
const max = 100;

let number;

let chances = 11;

let greaterOrSmaller;


/** SCREENS */
let screenStart = document.querySelector(".js-start");
let screenGame = document.querySelector(".js-game");
let screenEnd = document.querySelector(".js-end");


screenStart.querySelector("h2 span").innerHTML = `${min} and ${max}`;


/** ELMENTS */
let gameForm = document.querySelector("#game-form");
let gameInput = document.querySelector("#game-input");
let gameText = document.querySelector(".js-game-text");
let gameMessage = document.querySelector(".js-message");
let gameMessageText = document.querySelector(".js-game-message");
let chancesText = document.querySelector(".js-chances-text");
let endText = document.querySelector(".js-end-text");



/** HIDE AND SHOW ELEMENTS */
const hide = (element) => {
    element.classList.add("hidden");
}

const show = (element) => {
    element.classList.remove("hidden");
}


/** START */
screenStart.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    number = Math.ceil(Math.random() * max);
    console.log(number);
    hide(screenStart)
    show(screenGame);
    chances = 10;
    chancesText.innerHTML = `Chances left: ${chances}`;
    gameInput.value = "";
    gameInput.focus();
})


/** GAME */
gameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputValue = parseInt(gameInput.value);
    console.log(inputValue);
    
    if (number === inputValue) {
        endText.innerHTML = "You win. 🏆";
        hide(screenGame);
        show(screenEnd);
    } else {
        chances--;
        if (chances === 0) {
            endText.innerHTML = "You lost. ☹️"
            hide(screenGame);
            show(screenEnd);
        } else {
            chancesText.innerHTML = `Chances left: ${chances}`;
            if (min > inputValue || max < inputValue) {
                gameMessageText.innerHTML = "Incorrect guess";
            } else {
                greaterOrSmaller = number > inputValue? "greater" : "smaller";
                gameMessage.innerHTML = `
                    <h2>
                        The number is <span class="game-text">${greaterOrSmaller}</span> than your tip.
                    </h2>
                `;
            }
            gameInput.value = "";
            show(gameMessage);
            setTimeout( () => {
                hide(gameMessage);
            }, 2000);
        }
    }
})


/** END */
screenEnd.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    hide(screenEnd);
    show(screenStart);
})