const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const random = getRandomHexColor();
    color.textContent = random;
    document.body.style.backgroundColor = random;
})

function getRandomHexColor() {
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += hex[getRandomNumber()];
    }
    return color;
}
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}