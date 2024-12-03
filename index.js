// Create a grid row with number of square assigned to MAXGRIDSQUARES
function createGridRow() {
    const gridSquare = document.createElement("div");
    const gridRow = document.createElement("div");
    const MAXGRIDSQUARES = 16;

    gridSquare.className = "gridSquare";
    gridRow.className = "gridRow";

    // Appends 16 squares to grid row
    for (let i = 0; i < MAXGRIDSQUARES; i++) {
        gridRow.appendChild(gridSquare);
    }
}


