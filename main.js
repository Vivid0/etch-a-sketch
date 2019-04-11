const container = document.getElementById(`container`);

let square;

for (i = 0; i < 256; i++) {
    square = document.createElement(`div`);
    square.setAttribute(`class`, `square`);
    container.appendChild(square);
    square.addEventListener("click", activate);
}

function activate() {
    square.style.backgroundColor = "gray";
}