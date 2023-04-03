let container = document.querySelector(".container");
container.innerHTML = "";

container.style.gridTemplateColumns = `repeat(16, 1fr)`;
container.style.gridTemplateRows = `repeat(16, 1fr)`;

for(i = 0; i < 16; i++){
    for(j = 0; j < 16; j++){
        let grid = document.createElement('div');
        grid.style.border = "1px solid black";
        container.appendChild(grid);

        grid.addEventListener("mouseover", function(){
            this.classList.add("black");
        })
}

}

function getSize(){
    let gridSize = document.querySelector(".gridSize");
    let h3 = document.querySelector("h3");
    let h4 = document.querySelector(".wrongInput");


    if(gridSize.value < 2 || gridSize.value > 100){
        if(h4) {
            h3.removeChild(h4);
        }
        h4 = document.createElement('h4');
        h4.classList.add(`wrongInput`);
        h4.innerText = "Please select a number between 2 and 100!";
        h3.appendChild(h4);
        return;
    } else {
        if(h4) {
            h3.removeChild(h4);
        }
    let value = parseInt(gridSize.value);
    createBoard(value);
    }

    }

function createBoard(size){
    let container = document.querySelector(".container");
    container.innerHTML = "";

container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for(i = 0; i < size; i++){
    for(j = 0; j < size; j++){
    const grid = document.createElement('div');
    grid.style.border = "1px solid black";
    container.appendChild(grid);

    grid.addEventListener("mouseover", function(){
        this.classList.add("black");
    })
}
    
}
} 


document.addEventListener("DOMContentLoaded", function(){
})

