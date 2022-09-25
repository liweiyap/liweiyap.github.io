var elementSidebar = document.getElementById('sidebar');

elementSidebar.addEventListener('touchstart', function (event) {
    elementSidebar.style.overflowY = "auto";
}, false);

elementSidebar.addEventListener('touchend', function (event) {
    elementSidebar.style.overflow = "hidden";
}, false);