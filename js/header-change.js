$(function () {
  let header = $('.page-header');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('page-header--change');
    } else {
      header.removeClass('page-header--change');
    }
  });
});

$(function () {
  let header = $('.link__navigation');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('link__navigation--change');
    } else {
      header.removeClass('link__navigation--change');
    }
  });
});

$(function () {
  let header = $('.is-current');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('is-current--change');
    } else {
      header.removeClass('is-current--change');
    }
  });
});

$(function () {
  let header = $('.logo--header');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('logo--header--change');
    } else {
      header.removeClass('logo--header--change');
    }
  });
});

$(function () {
  let header = $('.link__contacts');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('link__contacts--change');
    } else {
      header.removeClass('link__contacts--change');
    }
  });
});

$(function () {
  let header = $('.button__menu-open');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('button__menu-open--change');
    } else {
      header.removeClass('button__menu-open--change');
    }
  });
});
