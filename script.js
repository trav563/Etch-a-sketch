const container = document.createElement("div");
container.style.display = "grid";

for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        const square = document.createElement("div");
        square.style.width = "30px";
        square.style.height = "30px";
        square.style.border = "1px solid black";
        container.appendChild(square);
    }
}

document.body.appendChild(container);