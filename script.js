let gridSize = 16;

// Selected elements
const gridContainer = document.querySelector("#grid-container");

const createGridBtn = document.querySelector("#create-grid-btn");
const clearGridBtn = document.querySelector("#clear-grid-btn");

const rainbowBtn = document.querySelector("#rainbow-btn");
const colorPicker = document.querySelector("#color-picker");
let color = colorPicker.value;

// Functions
function createGrid(size, isRainbowMode = false) {
  gridContainer.replaceChildren();
  let totalGrid = size * size; //default value: 16x16 = 256

  gridContainer.style = `grid-template-columns: repeat(${size}, 1fr)`;

  for (let i = 0; i < totalGrid; i++) {
    const gridCell = document.createElement("div");
    gridContainer.append(gridCell);
    gridCell.addEventListener("mouseover", () => {
      gridCell.style = `background: ${color}`;
    });
    if (isRainbowMode) {
      gridCell.addEventListener("mouseover", () => {
        rainbowMode(gridCell);
      });
    }
  }
}

function rainbowMode(gridCell) {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  gridCell.style = `background: rgb(${red}, ${green}, ${blue})`;
}

// Event Listeners
colorPicker.addEventListener("input", (e) => {
  color = e.target.value;
});
rainbowBtn.addEventListener("click", () => createGrid(gridSize, true));
clearGridBtn.addEventListener("click", () => createGrid(gridSize));

createGridBtn.addEventListener("click", () => {
  const response = prompt("Select the grid size (2, 100)");
  if (response > 100 || response < 2) {
    alert("Limit of the grid is from 2 to 100");
  } else {
    gridSize = response;
    createGrid(gridSize);
  }
});

createGrid(gridSize);
