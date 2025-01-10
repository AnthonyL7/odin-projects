const container = document.querySelector('#container');
const gridSizeInput = document.querySelector('#gridSize');
const createButton = document.querySelector('#createButton');

function generateRandomColor() {
  const colors = [];
  for(let i = 0; i < 10; i++) {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colors.push(randomColor);
  }
  return colors;
}


function generateGrid(size) {

  container.innerHTML = ''

  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {


    const square = document.createElement('div');
    square.style.backgroundColor = 'white';
    square.style.border = '1px solid black';
    square.style.boxSizing = 'border-box';

    square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'red';
    })
    container.appendChild(square);
  }

}

createButton.addEventListener('click', () =>{
  const gridSize = parseInt(gridSizeInput.value);
  if (gridSize >= 1 && gridSize <= 100) {
    generateGrid(gridSize);
  } else {
    alert('Enter a number between 1 and 100');
  }
});

generateGrid(16);


