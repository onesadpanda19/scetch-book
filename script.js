let squareContainer;
let colorMode = "black"
let colorSelect = ""
let toggle = false
let resize = document.querySelector("button.resize");
resize.addEventListener("click", (e) => {resizeGrid()});
let rainbow =document.querySelector("button.rainbow");
rainbow.addEventListener("click", (e) => {colorMode = rainbow});
let black = document.querySelector("button.black");
black.addEventListener("click", (e) => {colorMode = "black"});
let select = document.querySelector(".select")
select.addEventListener("input",(event) => {
  colorMode = select
  // here save the color they picked - and use it to style your square
  colorSelect = event.target.value; // #234245
})

function genDivs(column) {
    column = column || 16;
    let divWidth = 40/column + "rem";
    let divHight = 40/column + "rem";
    let container = document.getElementById("squareContainer");
    for(let i = 0; i < column; i++) {
      let row = document.createElement("div");
      row.className ="row";
      for(let x = 1; x <= column; x++){
          let cell = document.createElement("div")
          cell.className = "square";
          row.appendChild(cell)
          const widthHight= document.createAttribute('style');
          widthHight.value = `width: ${divWidth}; height : ${divHight}` 
          cell.setAttributeNode(widthHight); 
          cell.addEventListener("mouseover", (e) => {colorGrid(cell)})
      }  
      container.appendChild(row) 
    }
   }
function resizeGrid () {
  let answer = prompt("how many squares per side? Maximum is 100")
  if (+answer < 1 || !Number.isInteger(+answer) || isNaN(+answer)){
     alert("Please input in a positive integer.")
     return;
  } else if (+answer > 100) {
  alert("Maximum grid is 100");
  return;
  } else {
    removeGrid();
    genDivs(+answer);
  }
}
function removeGrid() {
  rows = document.querySelectorAll("div.row");
  rows.forEach((row) => {
    row.remove()
  })
}

function colorGrid (cell) {
  if (colorMode == "black") {
    cell.style.backgroundColor = "black"
  }else if (colorMode == rainbow) {
    cell.style.backgroundColor = randomRGB();
  }else if (colorMode == select) {
    cell.style.backgroundColor = colorSelect
  }
}
function randomRGB() {
  let r = Math.floor(Math.random() * 1000) % 256;
  let g = Math.floor(Math.random() * 1000) % 256;
  let b = Math.floor(Math.random() * 1000) % 256;
  return `rgb(${r}, ${g}, ${b})`;
}
genDivs()