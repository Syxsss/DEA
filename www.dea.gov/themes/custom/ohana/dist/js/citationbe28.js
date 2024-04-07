(function ($) {
  'use strict';

  $('.citation-button').click(function () {
    $('#citation-wrapper').slideToggle('slow');
  });
  $('#citation-closer').click(function () {
    $('#citation-wrapper').slideUp('slow');
  });
  $('.apa').click(function (e) {
    $('#apa').show();
    $('#ama').hide();
    $('#mla').hide();
    e.preventDefault();
  });
  $('.ama').click(function (e) {
    $('#ama').show();
    $('#apa').hide();
    $('#mla').hide();
    e.preventDefault();
  });
  $('.mla').click(function (e) {
    $('#mla').show();
    $('#ama').hide();
    $('#apa').hide();
    e.preventDefault();
  });
  $('a[href="#"]').click(function (e) {
    e.preventDefault();
  });
  new Clipboard(".copy-content", {
    text: function (trigger) {
      return $(trigger).parent().find('p').first().text().trim();
    }
  });
})(jQuery, document);