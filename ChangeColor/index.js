const button = document.querySelector("button");
const background = document.body;
const text = document.querySelector("h1");
let hue = 0;

button.addEventListener("click", () => {    
    background.classList.replace(background.classList[0], `color${Math.floor(Math.random() * 10)}`);
    text.style.color = `hsl(${hue}, 50%, 50%)`
    hue += 100;
    if (Math.floor(Math.random() * 50) === 1) alert("YOU HAVE BEEN HACKED");
});
