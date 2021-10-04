const container = document.querySelector('.container');
const colors = ['#FF18D0', '#D718FF', '#7E18FF', '#18EBFF'];
let count = 524;

for(let i = 0; i <= count; i++){
    let square = document.createElement('div');
    square.classList.add('square');
    container.append(square);

    square.addEventListener('mouseover', () => {
        addColor(square);
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })
}

function getRandomColor(){
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function addColor(el) {
    let color = getRandomColor();
    el.style.backgroundColor = `${color}`;
    el.style.boxShadow = `1px 1px 7px ${color}`;
}

function removeColor(el) {
    el.style.backgroundColor = '#DED0E6';
    el.style.boxShadow = '0 0 0';
}