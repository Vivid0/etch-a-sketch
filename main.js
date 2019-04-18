//grid builder
const container = document.getElementById(`container`);

let gridSize = 16;
let squareSize = 640 / gridSize;

buildGrid(gridSize);

function buildGrid(gridSize) {
    squareSize = 640 / gridSize;
    container.style.display = `grid`;
    container.style.gridTemplateColumns = "repeat(" + gridSize + "," + squareSize + "px)";
    for (i = 0; i < Math.pow(gridSize, 2); i++) {
        const square = document.createElement(`div`);
        square.setAttribute(`class`, `square`);
        square.style.height = squareSize + "px";
        square.style.width = squareSize + "px";
        square.style.backgroundColor = `rgb(0, 0, 0)`;
        square.addEventListener(`mouseover`, function () {
            activate(square);
        });
        container.appendChild(square);
    }
}

function activate(square) {
    //checks if the background color is black
    if (square.style.backgroundColor == `rgb(0, 0, 0)`) {
        //if yes, picks 3 random RGB values for the square
        const red = (Math.floor(Math.random() * (256 - 1)) + 1);
        const green = (Math.floor(Math.random() * (256 - 1)) + 1);
        const blue = (Math.floor(Math.random() * (256 - 1)) + 1);

        const firstColor = `rgb(` + red + `,` + green + `,` + blue + `)`;

        square.style.backgroundColor = firstColor;
    } else {
        //if not, sets the color to 50% darker than the previous random value
        let currentColor = square.style.backgroundColor
        currentColor = currentColor.replace(/[^\d,]/g, '').split(',');
        for (i = 0; i < currentColor.length; i++) {
            currentColor[i] = parseInt(currentColor[i]);
            currentColor[i] = Math.floor(currentColor[i] * 0.5);
        }
        square.style.backgroundColor = `rgb(` + currentColor[0] + `, ` + currentColor[1] + `, ` + currentColor[2] + `)`;  
    }

}

function deleteGrid() {
    while (container.hasChildNodes())
        container.removeChild(container.firstChild);
}

//reset button
const reset = document.getElementById(`reset`);

reset.addEventListener(`click`, () => {
    deleteGrid();
    const userInput = prompt(`Enter the resolution of your workspace.`);
    if (userInput * 1 == NaN) {
        alert(`Please enter a valid number!`);
    } else {
        buildGrid(userInput);
    }
})