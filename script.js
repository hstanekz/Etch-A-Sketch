let gridSize = 16;
let gridColor = 'black';

const container = document.querySelector('#container');
const button = document.querySelector('.new-grid');


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

button.addEventListener('click', () => {
    let newSize = parseInt(prompt("Enter a new size: (Max 100)"));
    
    //input validation
    if (isNaN(newSize) || (newSize < 1) || (newSize > 100)) {
        alert("Invalid Size: Please enter a number between 1 and 100.")
        return;
    }
    container.innerHTML = ""; //clear grid
    createGrid(newSize);

})

createGrid(gridSize);
