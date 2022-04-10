/* https://stackoverflow.com/a/18032363/12367873 */

// set transition in both functions, and in JS rather than in CSS or HTML,
// otherwise we cannot get rid of corner radius when sidebar avatar is logo SVG

function unhover(sidebarAvatar) {
    sidebarAvatar.setAttribute('src', '../assets/logo-whitesmokelight.svg');
    sidebarAvatar.setAttribute('style', 'transition: 0.3s;');
}

function hover(sidebarAvatar) {
    sidebarAvatar.setAttribute('src', '../assets/liwei.jpg');  /* the converter I used produced a webp with larger size */
    sidebarAvatar.setAttribute('style', 'border-radius: 50%; opacity: 1.0; filter: alpha(opacity=100); transition: 0.3s;');
}