const container = document.getElementById('container');
container.style.width = "400px";
container.style.height = "400px";
container.style.display = "flex";
container.style.flexWrap = "wrap";
let color = false;

function createGrid(dimension) {
    let square = 400.0 / parseFloat(dimension);
    console.log(square);
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            const grid = document.createElement('div');
            grid.margin = 0;
            grid.padding = 0;
            grid.style = `border: 1px solid red;width:${square.toString()}px;height:${square.toString()}px;`;
            grid.id = i.toString() + "-" + j.toString() + "-id";
            container.appendChild(grid);
        }
    }
}

const body = document.getElementsByTagName('body');

function getRandomRgbColor() {
    let r, g, b;

    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return [r, g, b];
}

document.addEventListener('mousemove', function (e) {
    console.log(e.target.localName);
    if (e.target.localName == "div" && e.target.id != "box" && e.target.id != "container") {
        if (color) {
            let randomRGBColor = getRandomRgbColor();
            document.getElementById(e.target.id).style.backgroundColor = `rgb(${randomRGBColor[0]}, ${randomRGBColor[1]}, ${randomRGBColor[2]})`;
        }
        else
            document.getElementById(e.target.id).style.backgroundColor = "red";
    }
});


function chooseGrid() {
    const gridNumber = prompt("Chose the number of grid side that you want from 2 to 100?");
    if (gridNumber > 100 || gridNumber < 0) {
        alert("Inalid Input");
        return;
    }
    document.getElementById("container").innerHTML = "";
    createGrid(gridNumber);
}

function chooseColor() {
    color = true;
}

createGrid(16);