document.addEventListener('DOMContentLoaded', () => {

  let container = document.getElementById('container');
  let gridSize = 16;

  for (let i = 0; i < gridSize * gridSize; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);

    cell.addEventListener('mouseenter', () => {
      cell.classList.add('hovered');
    });

    cell.addEventListener('mouseleave', () => {
      cell.classList.remove('hovered');
    });
  }
});