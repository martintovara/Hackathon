
/** Function for setting up margin of main page content */
function setMarginMain() {
    const main = document.getElementsByClassName('banner-div')[0];
    const clientHeight = main.clientHeight;

    document.getElementsByClassName('main')[0].style.margin = clientHeight + 'px auto 0 auto';
}
