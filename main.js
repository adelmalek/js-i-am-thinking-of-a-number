const min = 1;
const max = 100;

let number;

let screenStart = document.querySelector(".start");
let screenGame = document.querySelector(".game");
let screenEnd = document.querySelector(".end");

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
})

screenGame.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    hide(screenGame);
    show(screenEnd);
})

screenEnd.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    hide(screenEnd);
    show(screenStart);
})