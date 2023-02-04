document.getElementById("year-sidebar").innerHTML = getYear();
var element_year_credits = document.getElementById("year-credits");
if (element_year_credits !== null) {
    element_year_credits.innerHTML = getYear();
}

function getYear() {
    return new Date().getFullYear();
}