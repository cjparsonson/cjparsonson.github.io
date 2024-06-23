// Refresh p5.js sketch by clicking on the fern image
const fernObject = document.getElementById("fernButton");

function fernRefresh() {
    location.reload();
}

fernObject.addEventListener("click", fernRefresh);
