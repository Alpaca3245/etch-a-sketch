// Create a grid row element with number of square assigned to MAXGRIDSQUARES
function createGridRowElem(MAXGRIDSQUARES) {
    
    const gridRow = document.createElement("div");
    gridRow.className = "gridRow";

    // Appends 16 squares to grid row
    for (let i = 0; i < MAXGRIDSQUARES; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.className = "gridSquare";
        gridRow.appendChild(gridSquare);
    }
    return gridRow;
}

function createGridElem() {
    const MAXROWS = 16;
    const MAXGRIDSQUARES = 16;

    const grid = document.createElement("div");
    grid.className=("grid")
    
    for (let i = 0; i < MAXROWS; i++) {
        const gridRow = createGridRowElem(MAXGRIDSQUARES);
        grid.appendChild(gridRow);
    }

    return grid;
}

// Appends grid to etch-a-sketch-container
function createGrid() {
    const etchASketchContainer = document.getElementById("etch-a-sketch-container");
    etchASketchContainer.appendChild(createGridElem());


}

function enableHoverEffect(enableEffect = true) {

    if (enableEffect) {
        const gridSquares = document.querySelectorAll(".gridSquare");
        
        gridSquares.forEach((square) => {
                
        })
    }
}

createGrid();