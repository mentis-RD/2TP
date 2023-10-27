const torchs = document.querySelectorAll("rect");

torchs.forEach(torch => {
    torch.addEventListener("mouseover", e => {
        const svgElement = document.querySelector(`.t${torch.dataset.number}`);
        svgElement.classList.add("fade-in");
        svgElement.classList.replace("fade-out", "fade-in")
    });
})

torchs.forEach(torch => {
    torch.addEventListener("mouseout", e => {
        const svgElement = document.querySelector(`.t${torch.dataset.number}`);
        svgElement.classList.replace("fade-in", "fade-out")
    });
})