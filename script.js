let squareContainer;


function genDivs(v) {
    let e = document.getElementById("squareContainer") ;
    for(let i = 0; i < v; i++) {
      let row = document.createElement("div");
      row.className ="row";
      for(let x = 1; x <= v; x++){
          let cell = document.createElement("div")
          cell.className = "square";
          cell.innerText = (i * v) + x;
          row.appendChild(cell)
      }  
      e.appendChild(row) 
    }
    document.getElementById('square').innerText = e.innerHTML;
}
genDivs(6)