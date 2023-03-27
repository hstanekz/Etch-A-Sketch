let container = document.querySelector('#container');
let button = document.querySelector('.new-grid');

for (let i = 0; i < 256; ++i) {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
}
let divs = document.querySelectorAll('.grid');

function changeColor(div) {
    div.style.backgroundColor = "black";
}

divs.forEach((div) =>
div.addEventListener('mouseover', () => {
changeColor(div)}));

button.addEventListener('click', () => {
    prompt("Enter a new size: (Max 100)")
})

