let progress = document.querySelector(".progress__fill");
let progressLabel = document.querySelector(".progress__label");
let download = document.querySelector(".downloading")
let seconds = 10;

let i = 0;
let interval = setInterval(() => {
    progress.style.width = `${i}%`;
    progressLabel.textContent = `${i}%`
    i++;
    if (i > 100) {
        download.textContent="Downloaded"
        clearInterval(interval);
    }
}, (seconds * 1000) / 100) 