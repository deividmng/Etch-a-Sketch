const container = document.getElementById('container');
const valueGrid = document.getElementById('valueGrid')

  function inputGrid() {
    // Get the value from the range input
    var grid = document.getElementById("rangeGrid").value;

    // Clear the container content
    container.innerHTML = '';

    console.log(`Grid size: ${grid}`);

    valueGrid.innerText =`  Current Size: ${grid} x ${grid} ` 
    // Create divs with the new grid size
    createDivs(grid, grid);
  
  }



  function createDivs(col, rows) {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i = 0; i < col * rows; i++) {
      const div = document.createElement('div');
      div.style.border = '1px solid black';
      container.appendChild(div).classList.add('box');
    }

    // Add event listener only once, not inside the loop
    const divs = container.querySelectorAll('.box');
    divs.forEach((box) => {
      box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
      });
    });
  }

  // Call createDivs with initial values
  createDivs(16, 16);