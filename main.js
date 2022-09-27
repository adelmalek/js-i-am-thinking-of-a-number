const min = 1;
const max = 100;

let number;

let chances = 11;

let screenStart = document.querySelector(".js-start");
let screenGame = document.querySelector(".js-game");
let screenEnd = document.querySelector(".js-end");
let gameInput = document.querySelector("#game-input");
let gameText = document.querySelector(".js-game-text");
let gameMessage = document.querySelector(".js-message");
let gameMessageText = document.querySelector(".js-game-message");
let chancesText = document.querySelector(".js-chances-text");
let endText = document.querySelector(".js-end-text");

screenStart.querySelector("h2 span").innerHTML = `${min} and ${max}`;

const hide = (element) => {
    element.classList.add("hidden");
}

const show = (element) => {
    element.classList.remove("hidden");
}

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

screenGame.querySelector("#game-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let inputValue = Number(gameInput.value);
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
            gameText.innerHTML = number > inputValue? "greater" : number < inputValue? "smaller" : "";
            gameInput.value = "";
            show(gameMessage);
            setTimeout( () => {
                hide(gameMessage);
            }, 2000);
        }
    }
})

screenEnd.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    hide(screenEnd);
    show(screenStart);
})