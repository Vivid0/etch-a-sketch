const container = document.getElementById(`container`);

let square;

for (i = 0; i < 256; i++) {
    square = document.createElement(`div`);
    square.setAttribute(`class`, `square`);
    square.addEventListener("onmouseover", activate);
    container.appendChild(square);
}

function activate() {
    square.style.backgroundColor = "gray";
}