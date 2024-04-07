jQuery('.nav-menu-header').on('click', function () {
  if (jQuery(this).hasClass("nav-menu-closed")) {
    jQuery(this).removeClass('nav-menu-closed');
    jQuery(this).addClass('nav-menu-open');
    jQuery("div.nav-menu").css("display", "block");
  } else if (jQuery(this).hasClass("nav-menu-open")) {
    jQuery("div.nav-menu").css("display", "none");
    jQuery(this).removeClass('nav-menu-open');
    jQuery(this).addClass('nav-menu-closed');
  }
});
jQuery(window).on('load resize orientationchange', function () {
  if (jQuery(window).width() > 991) {
    jQuery("div.nav-menu").css("display", "block");
    jQuery(".nav-menu-header").removeClass(['nav-menu-closed', 'nav-menu-open']);
  } else if (jQuery(window).width() < 991) {
    jQuery(".nav-menu-header").addClass('nav-menu-closed');
    jQuery("div.nav-menu").css("display", "none");
  }
});
var menu_1 = jQuery(".l-sidebar__aside").find('ul.menu--main > li.has-subnav.is-active-trail');
var menu_2 = jQuery(".l-sidebar__aside").find('ul.menu--main > li.has-subnav.is-expanded');
var menu_3 = jQuery(".l-sidebar__aside").find('ul.menu--main > li.has-subnav.is-active-trail.is-expanded');
var menu_4 = jQuery(".l-sidebar__aside").find('ul.menu--main > li.has-subnav.is-active-trail > ul.subnav-1 > li.has-subnav.is-active-trail');
var menu_5 = jQuery(".l-sidebar__aside").find('ul.menu--operation-engage > li.has-subnav');
var menu_6 = jQuery(".l-sidebar__aside").find('ul.menu--operation-engage > li.has-subnav > .menu-active-trail');
jQuery(".l-sidebar__aside").find('ul.menu--main > li.has-subnav.is-active-trail > span.menu-active-trail').on('click', function () {
  if (jQuery(menu_1).hasClass("nav-menu-closed")) {
    jQuery(menu_1).removeClass('nav-menu-closed');
    jQuery(menu_1).addClass('nav-menu-open');
    jQuery(menu_1).find("ul.menu__subnav.subnav-1").css("display", "block");
  } else if (jQuery(menu_1).hasClass("nav-menu-open")) {
    jQuery(menu_1).removeClass('nav-menu-open');
    jQuery(menu_1).addClass('nav-menu-closed');
    jQuery(menu_1).find("ul.menu__subnav.subnav-1").css("display", "none");
  }
});
jQuery(menu_2).on('click', function () {
  if (jQuery(this).hasClass("nav-menu-closed")) {
    jQuery(this).removeClass('nav-menu-closed');
    jQuery(this).addClass('nav-menu-open');
    jQuery(this).find("ul.menu__subnav.subnav-1").css("display", "block");
  } else if (jQuery(this).hasClass("nav-menu-open")) {
    jQuery(this).removeClass('nav-menu-open');
    jQuery(this).addClass('nav-menu-closed');
    jQuery(this).find("ul.menu__subnav.subnav-1").css("display", "none");
  }
});
jQuery(menu_3).on('click', function () {
  if (jQuery(this).hasClass("nav-menu-closed")) {
    jQuery(this).removeClass('nav-menu-closed');
    jQuery(this).addClass('nav-menu-open');
    jQuery(this).find("ul.menu__subnav.subnav-1").css("display", "block");
  } else if (jQuery(this).hasClass("nav-menu-open")) {
    jQuery(this).removeClass('nav-menu-open');
    jQuery(this).addClass('nav-menu-closed');
    jQuery(this).find("ul.menu__subnav.subnav-1").css("display", "none");
  }
});
jQuery(menu_4).on('click', function () {
  if (jQuery(this).hasClass("nav-menu-closed")) {
    jQuery(this).removeClass('nav-menu-closed');
    jQuery(this).addClass('nav-menu-open');
    jQuery(this).find("ul.menu__subnav.subnav-2").css("display", "block");
  } else if (jQuery(this).hasClass("nav-menu-open")) {
    jQuery(this).removeClass('nav-menu-open');
    jQuery(this).addClass('nav-menu-closed');
    jQuery(this).find("ul.menu__subnav.subnav-2").css("display", "none");
  }
});
jQuery(menu_6).on('click', function () {
  if (jQuery(menu_5).hasClass("nav-menu-closed")) {
    jQuery(menu_5).removeClass('nav-menu-closed');
    jQuery(menu_5).addClass('nav-menu-open');
    jQuery(menu_5).find(".menu-subtrail").css("display", "block");
  } else if (jQuery(menu_5).hasClass("nav-menu-open")) {
    jQuery(menu_5).removeClass('nav-menu-open');
    jQuery(menu_5).addClass('nav-menu-closed');
    jQuery(menu_5).find(".menu-subtrail").css("display", "none");
  }
});