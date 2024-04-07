!(document => {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const facet = document.querySelector('.facet-group');
    if (facet) {
      const filters = document.querySelectorAll('.facet-group__heading');
      filters.forEach(item => {
        item.addEventListener('click', () => {
          item.classList.toggle('is-active');
          item.parentNode.children[1].classList.toggle('show');
        });
      });
    }
  });
})(document);