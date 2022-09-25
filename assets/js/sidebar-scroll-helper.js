// Touch to scroll/show scrollbar on mobile (touchscreen) devices

var elementSidebar = document.getElementById('sidebar');

elementSidebar.addEventListener('touchstart', function (event) {
    elementSidebar.style.overflowY = "auto";
}, false);

elementSidebar.addEventListener('touchmove', function (event) {
    if ((elementSidebar.scrollTop === 0) || (elementSidebar.scrollTop === elementSidebar.scrollHeight - elementSidebar.offsetHeight)) {
        elementSidebar.style.overflow = "hidden";
    }
}, false);

elementSidebar.addEventListener('touchend', function (event) {
    elementSidebar.style.overflow = "hidden";
}, false);

elementSidebar.addEventListener('touchcancel', function (event) {
    elementSidebar.style.overflow = "hidden";
}, false);