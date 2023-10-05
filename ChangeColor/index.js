const button = document.querySelector("button");
const background = document.body;
const text = document.querySelector("h1");

button.addEventListener("click", () => {    
    background.classList.replace(background.classList[0], `color${Math.floor(Math.random() * 10)}`);
    text.style.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
});