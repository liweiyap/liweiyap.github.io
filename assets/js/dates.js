document.getElementById("year").innerHTML = getYear();

function getYear() {
    return new Date().getFullYear();
}