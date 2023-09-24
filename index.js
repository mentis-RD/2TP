const date = document.querySelector("#data");

setInterval(() => {
    date.textContent = new Date().toLocaleString();
}, 1)