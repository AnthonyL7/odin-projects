const container = document.querySelector('#container');
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
container.style.justifyContent = 'center'
container.style.alignContent = 'center';
container.style.width = '320px';
container.style.height = '320px';

for (let i = 1; i <= 256; i++) {
  const square = document.createElement('div');
  square.textContent = 'div';
  square.style.backgroundColor = 'red'
  square.style.width = '20px'
  square.style.length = '20px'


  container.appendChild(square)
}

