let maxRows = 16;
let maxGridSquares = 16;

// Create a grid row element with number of square assigned to maxGridSquares
function createGridRowElem() {
    
    const gridRow = document.createElement("div");
    gridRow.className = "gridRow";

    // Appends 16 squares to grid row
    for (let i = 0; i < maxGridSquares; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.className = "gridSquare";
        gridRow.appendChild(gridSquare);
    }
    return gridRow;
}

function createGridElem() {
    const grid = document.createElement("div");
    grid.className=("grid")
    
    for (let i = 0; i < maxRows; i++) {
        const gridRow = createGridRowElem();
        grid.appendChild(gridRow);
    }

    return grid;
}

// Appends grid to etch-a-sketch-container
function createGrid() {
    const etchASketchContainer = document.getElementById("etch-a-sketch-container");
    etchASketchContainer.appendChild(createGridElem());
}

function promptUserForGridSize() {
    const MAX = 100;
    const MIN = 0;

    rowSize = window.prompt("Input a value from " + MIN + " to " + MAX);
    squarePerRow = window.prompt("Input a value from " + MIN + " to " + MAX);

    if ((rowSize >= MIN && rowSize <= MAX) && (squarePerRow >= MIN && squarePerRow <= MAX)) {
        changeGridSize(rowSize, squarePerRow);
        window.confirm("Changed grid size!")
    } else {
        window.alert("Value must be from " + MIN + " to " + MAX +"!");
    }
}

function changeGridSize(rows, squares) {
    deleteGrid();
    maxRows = rows;
    maxGridSquares = squares;
    createGrid()
}

function deleteGrid() {
    document.querySelector(".grid").remove();
}

// Added listener for #gridSizeBtn to call promptUserForGridSize function on click
document.getElementById("gridSizeBtn").addEventListener("click", promptUserForGridSize);


createGrid();

