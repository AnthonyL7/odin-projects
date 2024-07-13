
let gridContainer = document.getElementById("myGrid")

function createGrid(rows, cols) {
  for (let i = 0; i < rows; i++) {
    for (let x = 0; x < cols; x++ ) {
      let gridItem = document.createElement('div');
      gridItem.className = 'grid-item';
      gridItem.textContent = `Cell ${i + 1}-${x+1}`;
      gridContainer.appendChild(gridItem);
    }
  }
}

createGrid(16,16);