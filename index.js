const container = document.getElementById('container');


for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.style = "border: 1px solid red;width:20px;height:20px;";
        grid.margin = 0;
        grid.padding = 0;
        container.appendChild(grid);
    }
}

const body = document.getElementsByTagName('body');

body[0].style.margin = 0;
body[0].style.padding = 0;
body[0].style.display = "flex";
body[0].style.justifyContent = "center";
body[0].style.alignItems = "end";


container.style.width = "356px";
container.style.height = "356px";
container.style.display = "flex";
container.style.flexWrap = "wrap";