const container = document.querySelector('.container');

let gridSize = 16;

function createGrid() {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const gridSquares = document.createElement('div');
        gridSquares.setAttribute('class', 'grid-square');
        container.appendChild(gridSquares);
    }
}
createGrid();

const gridSquares = document.querySelectorAll('.grid-square');

gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', (e) => {
    gridSquare.classList.add('hover');
}))
