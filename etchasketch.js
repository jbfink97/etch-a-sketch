window.addEventListener('load', () => {

    // Select variables from HTML file to be used later
    const gridContainer = document.querySelector('#container');
    const changeBtn = document.getElementById('submit');
    const gridSize = document.querySelector('#gridSize').value;
    const clearBtn = document.querySelector('#clear');
    const colorBtn = document.getElementById('penColor');

    // Function declarations

    // Adds an event listener for each individual "pixel" for the background color
    // to be changed when hovered over
    function draw() {
        let pixels = document.querySelectorAll('.gridSquare');
        let penColor = document.getElementById('penColor').value;
        pixels.forEach(pixel => {
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = penColor;
            })
        })
    }

    // Removes all current "gridSquares" (pixels) and redoes the grid according to the new grid size
    function changeGridSize(gridSize) {
        const currentGrid = document.querySelectorAll('.gridline');
        currentGrid.forEach(grid => {
            grid.remove();
        })
        for (let i = 0; i < gridSize; i++) {
            const gridLine = document.createElement('div');
            gridLine.classList.add('gridline');
            gridContainer.appendChild(gridLine);
            for (let j = 0; j < gridSize; j++) {
                const gridSquare = document.createElement('div');
                gridSquare.classList.add('gridSquare');
                gridLine.append(gridSquare);
            }
        }
        // draw() function called to add the event listeners again
        draw();
    }

    // Add listener for anytime the color wheel is changed.
    // draw is a call back function that will again add the event listener 
    // for hovering to each "pixel"
    colorBtn.addEventListener('change', draw);

    // Listen for click on the update grid button. Get number from number input field
    // and update grid accordingly
    changeBtn.addEventListener('click', () => {
        const gridSize = document.querySelector('#gridSize').value;
        changeGridSize(gridSize);
    })

    // Change all background colors of pixels to white when clear button clicked
    clearBtn.addEventListener('click', () => {
        let pixels = document.querySelectorAll('.gridSquare');
        pixels.forEach(pixel => {
            pixel.style.backgroundColor = "white";
        })
    })

    // When page is loaded, run the function to draw the initial grid
    // (with default value of 16, can be changed in index.html)
    changeGridSize(gridSize);
})