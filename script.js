let squareContainer;


function genDivs(column) {
    column = column || 16;
    let divWidth = 20/column + "rem";
    let divHight = 20/column + "rem";
    let container = document.getElementById("squareContainer");
    for(let i = 0; i < column; i++) {
      let row = document.createElement("div");
      row.className ="row";
      for(let x = 1; x <= column; x++){
          let cell = document.createElement("div")
          cell.className = "square";
          cell.innerText = (i * column) + x;
          row.appendChild(cell)
          const widthHight= document.createAttribute('style');
          widthHight.value = `width: ${divWidth}; height : ${divHight}` 
          cell.setAttributeNode(widthHight);
         
      }  
      container.appendChild(row) 
    }
    document.getElementById('square').innerText = container.innerHTML;
}
genDivs(24)
