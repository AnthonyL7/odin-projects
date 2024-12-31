const container = document.querySelector('#container');
const gridSizeInput = document.querySelector('#gridSize')
const createButton = document.querySelector('#createButton')


function generateGrid(size) {
  const containerSize = 500;
  const borderSize = 1;
  const squareSize = (containerSize / size) - 2 * borderSize;

  container.innerHTML = ''

  container.style.width = `${containerSize}px`;
  container.style.height = `${containerSize}px`;

  for (let i = 1; i < size * size; i++) {
    const square = document.createElement('div');
    square.style.width = `${squareSize}px`
    square.style.height = `${squareSize}px`
    square.style.backgroundColor = 'white'
    square.style.border = `${borderSize}px solid black`
    square.style.boxSizing = 'border-box'

    square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'blue';
    })
    container.appendChild(square)
  }

}

createButton.addEventListener('click', () =>{
  const gridSize = parseInt(gridSizeInput.value);
  if (gridSize >= 1 && gridSize <= 100) {
    generateGrid(gridSize);
  } else {
    alert('Enter a number between 1 and 100')
  }
});

generateGrid(16)

