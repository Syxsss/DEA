!(document => {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const fullmenu = document.querySelector('#fullmenu');
    if (fullmenu) {
      new Mmenu(fullmenu, {
        extensions: {
          all: ['position-front', 'position-right', 'fx-menu-slide', 'border-full'],
          '(max-width: 720px)': ['fullscreen']
        },
        classNames: {
          selected: 'is-active'
        },
        lazySubmenus: {
          load: true
        },
        keyboardNavigation: {
          enable: 'default',
          enhance: true
        },
        setSelected: {
          hover: true,
          parent: false
        },
        navbar: {
          add: true,
          title: 'Back'
        },
        backButton: {
          close: false
        },
        "counters": {
          "add": true
        },
        "offCanvas": {
          "position": "right-front"
        },
        // navbars: [
        //   {
        //     position: 'top',
        //     content: [
        //       '<a class="site-name" href="/" title="Home" rel="home" aria-label="Home"><h1 class="site-name__text">United States Drug Enforcement Administration</h1></a>',
        //       'close',
        //       '<form class="menu--search-box-form" action="https://search.dea.gov/search"><label class="menu--search-box-label"></label><input placeholder="Search DEA.gov" class="menu--search-box-input" id="search-field-mm" type="search" name="query"><input placeholder="Search DEA.gov" class="menu--search-box-input" style="display:none;" id="search-field-mm" type="search" name="affiliate" value="justice-dea"><button class="menu--search-box-button" type="submit"></button></form>'
        //     ]
        //   },
        //   {
        //     position: 'bottom',
        //     content: [
        //       '<ul class="menu menu--utility"><li class="menu__item"><a class="menu__link menu__link--tip" href="/submit-tip">Submit A Tip</a></li><li class="menu__item"><a class="menu__link" href="https://service.govdelivery.com/accounts/USDOJDEA/subscriber/new">Get Updates</a></li><li class="menu__item"><a class="menu__link" href="https://www.dea.gov/scam-alert">Scam Alert</a></li><li class="menu__item"><ul class="menu menu--languages"><li class="menu__item"><a class="menu__link" href="https://www.dea.gov/">English</a></li><li class="menu__item"><a class="menu__link" href="https://www.dea.gov/es">Español</a></li></ul></li></ul>'
        //     ]
        //   }
        // ]
        "navbars": [{
          "position": "top",
          // "type": "tabs",
          "content": ['<a class="site-name" href="/" title="Home" rel="home" aria-label="Home"><h1 class="site-name__text">United States Drug Enforcement Administration</h1></a>', 'close']
        }, {
          "position": "top",
          "content": ['<form class="menu--search-box-form" action="https://search.dea.gov/search"><label class="menu--search-box-label"></label><input placeholder="Search DEA.gov" class="menu--search-box-input" id="search-field-mm" type="search" name="query"><input placeholder="Search DEA.gov" class="menu--search-box-input" style="display:none;" id="search-field-mm" type="search" name="affiliate" value="justice-dea"><button class="menu--search-box-button" type="submit"></button></form>']
        }, {
          "position": "bottom",
          "content": ['<ul class="menu menu--utility"><li class="menu__item"><a class="menu__link menu__link--tip" href="/submit-tip">Submit A Tip</a></li><li class="menu__item"><a class="menu__link" href="https://service.govdelivery.com/accounts/USDOJDEA/subscriber/new">Get Updates</a></li><li class="menu__item"><a class="menu__link" href="https://www.dea.gov/scam-alert">Scam Alert</a></li><li class="menu__item"><ul class="menu menu--languages"><li class="menu__item"><a class="menu__link" href="https://www.dea.gov/">English</a></li><li class="menu__item"><a class="menu__link" href="https://www.dea.gov/es">Español</a></li></ul></li></ul>']
        }],
        //   "searchfield": {
        //     "splash": "What are you searching for?",
        //     "placeholder": "Start searching..."
        //  },
        "theme": "dark-contrast"
      });
      fullmenu.removeAttribute('hidden');
    }
  });
})(document);