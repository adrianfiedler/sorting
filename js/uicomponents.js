
define(['libs/material-components-web.min.js'], function (mdc) {
  mdc.ripple.MDCRipple.attachTo(document.querySelector('.menu-button'));

  function handleMenuButton () {
    const menu = new mdc.menu.MDCMenu(document.querySelector('.mdc-menu'));
    menu.open = true;
  }
  document.querySelector('#menuButton').addEventListener('click', handleMenuButton)
})



