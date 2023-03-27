let gridSize = 16;
let gridColor = 'black';

const container = document.querySelector('#container');
const slider = document.querySelector('.new-grid');
const red = document.querySelector('.red')
const orange = document.querySelector('.orange')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const blue = document.querySelector('.blue')
const indigo = document.querySelector('.indigo')
const violet = document.querySelector('.violet')
const white = document.querySelector('.white')
const black = document.querySelector('.black')


function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; ++i) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.width = `calc(100% / ${gridSize})`;
        grid.style.height = `calc(100% / ${gridSize})`;
        container.appendChild(grid);
    }

let divs = document.querySelectorAll('.grid');
divs.forEach((div) => {
div.addEventListener('mouseover', () => {
    div.style.backgroundColor = gridColor;});
});
}

function getColor() {
    red.addEventListener('click', ()=> {
        gridColor = 'red';})
    orange.addEventListener('click', ()=> {
        gridColor = 'orange';})
    yellow.addEventListener('click', ()=> {
        gridColor = '#ffff53';})
    green.addEventListener('click', ()=> {
        gridColor = 'lime';})
    blue.addEventListener('click', ()=> {
        gridColor = '#1c05ff';})
    indigo.addEventListener('click', ()=> {
        gridColor = '#6e00bf';})
    violet.addEventListener('click', ()=> {
        gridColor = 'violet';})
    white.addEventListener('click', ()=> {
        gridColor = 'white';})
    black.addEventListener('click', ()=> {
            gridColor = 'black';})
}

slider.addEventListener('input', () => {
    let newSize = parseInt(slider.value);
    
    //input validation
    if (isNaN(newSize) || (newSize < 1) || (newSize > 100)) {
        alert("Invalid Size: Please enter a number between 1 and 100.")
        return;
    }
    container.innerHTML = ""; //clear grid
    createGrid(newSize);

})

getColor();
createGrid(gridSize);

