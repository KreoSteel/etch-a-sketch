let gridSize = 16;

const gridContainer = document.querySelector("#grid-container");
const createGridBtn = document.querySelector("#create-grid-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");

createGridBtn.addEventListener("click", () => {
  const response = prompt("Select the grid size (1, 100)");

  if (response < 100 || response > 2) {
    gridSize = response;
    createGrid(gridSize);
  } else {
    alert("Limits of the grid is 2 from 100");
  }
});

function createGrid(size) {
  gridContainer.replaceChildren();
  let totalGrid = size * size; //default value: 16x16 = 256

  gridContainer.style = `grid-template-columns: repeat(${size}, 1fr)`;

  for (let i = 0; i < totalGrid; i++) {
    const gridCell = document.createElement("div");
    gridContainer.append(gridCell);
    gridCell.addEventListener("mouseover", () => {
      gridCell.style = "background: #3D3B30";
    });
  }
  
  console.log(totalGrid);
  
}

createGrid(gridSize);
