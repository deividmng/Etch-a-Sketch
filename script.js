// Get the container and valueGrid elements from the DOM
const container = document.getElementById('container');
const valueGrid = document.getElementById('valueGrid');

// Function to handle input from the grid size range input
function inputGrid() {
  // Get the value from the grid size range input
  var grid = document.getElementById("rangeGrid").value;

  // Clear the content of the container
  container.innerHTML = '';

  console.log(`Grid size: ${grid}`);

  // Update the displayed grid size information
  valueGrid.innerText = `  Current Size: ${grid} x ${grid} `;

  // Create divs with the new grid size
  createDivs(grid, grid);
}

// Function to create divs based on the provided columns and rows
function createDivs(col, rows) {
  // Set the container styles for grid display
  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  for (let i = 0; i < col * rows; i++) {
    const div = document.createElement('div');
    div.style.border = '1px solid black';

    // Append the div to the container and add the 'box' class
    container.appendChild(div).classList.add('box');

    // Add the event listener directly here
    div.addEventListener('mouseover', () => {
      // Change the color only if the randomColor variable is true
      if (randomColor) {
        div.style.backgroundColor = getRandomColor();
      } else {
        // If not, set the color to chosenColor or black
        div.style.backgroundColor = chosenColor || 'black';
      }
    });
  }
}

// Variable to track whether to change color randomly or not
let randomColor = false;

// Variable to store the chosen color
let chosenColor = null;

// Call createDivs with initial values
createDivs(16, 16);

// Function to get a random color
function getRandomColor() {
  let rgb = [];
  for (let i = 0; i < 3; i++) {
    let randNum = Math.floor(Math.random() * 256);
    rgb.push(randNum);
  }
  return `rgb(${rgb.join()})`;
}

// Set up the clear function to handle the clear button click event
function clear() {
  const clearGrid = document.getElementById("clear");

  clearGrid.addEventListener('click', () => {
    const boxs = container.querySelectorAll('.box');

    // Iterate over each element with the 'box' class and set the background color to white
    boxs.forEach((box) => {
      box.style.backgroundColor = 'white';
    });

    // You can add any other logic you want to execute on click here
  });
}

// Function to handle color choice using the color picker
function colorChoice() {
  const colorPicker = document.getElementById('colorPicker');

  // Add an input event listener to the color picker
  colorPicker.addEventListener('input', () => {
    // Set the chosenColor variable to the value of the color picker
    chosenColor = colorPicker.value;

    // Reset the randomColor variable to false
    randomColor = false;

    // Show a toast notification with the chosen color information
    Toastify({
      text: `Chosen Color: ${chosenColor}`,
      duration: 1000,
      gravity: "top",
      position: "center",
      backgroundColor: ` ${chosenColor}`,
      className: "toastify toastify-center",
    }).showToast();

    // Update the color immediately instead of waiting for the "Color" button click
    updateColor(chosenColor);
  });
}

// Call the colorChoice and clear functions
colorChoice();
clear();

// Set up the event listener for the "Random" button
const randoColorButton = document.getElementById("randon");
randoColorButton.addEventListener('click', () => {
  // Toggle the value of randomColor when the button is clicked
  randomColor = !randomColor;

  // If randomColor is true, you are now in random mode
  // If false, you are in normal mode (black)
});
