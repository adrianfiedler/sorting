define(['js/libs/material-components-web.min'], function (mdc) {
  const foos = [].map.call(document.querySelectorAll('.mdc-button'), function (element) {
    mdc.ripple.MDCRipple.attachTo(element);
  });
  // mdc.ripple.MDCRipple.attachTo(document.querySelectorAll('.mdc-button'));
})



