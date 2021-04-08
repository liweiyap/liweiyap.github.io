/* https://stackoverflow.com/a/18032363/12367873 */

function hover(sidebarAvatar) {
    sidebarAvatar.setAttribute('src', '../assets/logo.svg');
    sidebarAvatar.setAttribute('style', 'transition: 0.3s;');
}

function unhover(sidebarAvatar) {
    sidebarAvatar.setAttribute('src', '../assets/liwei.jpg');
    sidebarAvatar.setAttribute('style', 'border-radius: 50%; transition: 0.3s;');
}