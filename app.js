const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const random = generateRandomNumber();
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
})

function generateRandomNumber() {
    return Math.round(Math.random() * (colors.length-1));
}

