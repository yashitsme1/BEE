
const colors = [
    "orange", "lightblue", "lightgreen", "pink", "purple",
    "yellow", "red", "teal", "brown", "gold"
];

let intervalId = null;

document.getElementById('generateBtn').onclick = function() {
    if (intervalId) return;
    intervalId = setInterval(() => {
        const box = document.getElementById('myBox');
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        box.style.backgroundColor = randomColor;
    }, 100);
};

document.getElementById('stopBtn').onclick = function() {
    clearInterval(intervalId);
    intervalId = null;
};