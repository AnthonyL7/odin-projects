const container = document.querySelector('#container');


for (let i = 1; i <= 256; i++) {
  const square = document.createElement('div');
  square.style.width = '20px'
  square.style.height = '20px'
  square.style.backgroundColor = 'white'
  square.style.border = '2px solid black'
  square.style.boxSizing = 'border-box'

  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'blue';
  })
  container.appendChild(square)
}

