/* https://stackoverflow.com/a/18032363/12367873 */

function unhover(sidebarAvatar) {
    sidebarAvatar.setAttribute('src', '../assets/logo-whitesmoke.svg');
    sidebarAvatar.setAttribute('style', 'transition: 0.3s;');
}

function hover(sidebarAvatar) {
    sidebarAvatar.setAttribute('src', '../assets/liwei.jpg');  /* the converter I used produced a webp with larger size */
    sidebarAvatar.setAttribute('style', 'border-radius: 50%; opacity: 1.0; filter: alpha(opacity=100); transition: 0.3s;');
}