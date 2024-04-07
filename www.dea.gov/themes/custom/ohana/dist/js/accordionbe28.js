/* eslint-disable */
//Element.closest polyfill
if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
if (!Element.prototype.closest) Element.prototype.closest = function (s) {
  var el = this;
  if (!document.documentElement.contains(el)) return null;
  do {
    if (el.matches(s)) return el;
    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1);
  return null;
};
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (e) {
    var clickedElem = e.target;
    clickedElem = clickedElem.closest('.state-accordion button');
    if (clickedElem) {
      console.log('clicked');
      var accordion = clickedElem.closest('.state-accordion');
      var prevAccordion = document.querySelector('.state-accordion.active');
      if (prevAccordion && prevAccordion !== accordion) {
        prevAccordion.classList.toggle('active');
      }
      accordion.classList.toggle('active');
    }
  });
});