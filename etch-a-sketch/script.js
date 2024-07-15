document.addEventListener('DOMContentLoaded', function() {

  let grid = document.getElementById('grid');

  for (let i = 0; i < 16 * 16; i++) {
    let cell = document.createElement('div');
    cell.className = 'grid-item';
    grid.appendChild(cell);
  }

});