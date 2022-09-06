window.addEventListener('load', () => {

    const gridContainer = document.querySelector('#container');
    const changeBtn = document.getElementById('submit');
    const gridSize = document.querySelector('#gridSize').value;
    const clearBtn = document.querySelector('#clear');
    const colorBtn = document.getElementById('penColor');

    // Function declarations
    function draw() {
        let pixels = document.querySelectorAll('.gridSquare');
        let penColor = document.getElementById('penColor').value;
        pixels.forEach(pixel => {
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = penColor;
            })
        })
    }

    function changeGridSize(gridSize) {
        const currentGrid = document.querySelectorAll('.gridline');
        currentGrid.forEach(grid => {
            grid.remove();
        })
        for (let i = 0; i < gridSize; i++) {
            const gridLine = document.createElement('div');
        }
    }


})