function createBoard(size){
    let container = document.querySelector(".container");
    let grid = document.querySelector(".grid");

container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for(i = 0; i < size; i++){
    for(j = 0; j < size; j++){
    const grid = document.createElement('div');
    grid.style.border = "1px solid black";
    container.appendChild(grid);
    }
    
}
}

createBoard(40);