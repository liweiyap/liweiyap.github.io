document.getElementById("year-sidebar").innerHTML = getYear();
document.getElementById("year-credits").innerHTML = getYear();

function getYear() {
    return new Date().getFullYear();
}