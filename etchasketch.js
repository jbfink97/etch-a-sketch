window.addEventListener('load', () => {

const gridSize = Number(document.querySelector('#gridSize').textContent);
const gridDiv = document.querySelector('#gridDiv');

for (let i = 0; i < gridSize; i++) {
    let gridRow = document.createElement('div');
    gridRow.classList.add('gridRow');
    gridDiv.appendChild(gridRow);
    for (let j = 0; j < gridSize; j++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridRow.appendChild(gridSquare);
    }
}

const gridNodeList = document.querySelectorAll('.gridSquare');

gridNodeList.forEach(grid => {
    grid.addEventListener('mouseover', () => {
        grid.classList.add('hovered');
    })

})





})