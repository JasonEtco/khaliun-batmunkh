var body = $('body');

var nav = $('.nav');
var willShift = $('.js--will-shift');
var navButton = $('.nav__button');

navButton.click(function() {
	if (body.hasClass('modal--open')) {
		// DO NOTHING
	} else {
		willShift.toggleClass('shifted');
		nav.toggleClass('shifted');
		body.toggleClass('shifted');
	}
});


// CONTACT MODAL
var contact = $('.home__contact-link');
var contactLink = $('.nav__contact');
var contactModal = $('.contact__modal-wrapper');
var contactClose = $('.contact__close');

contact.click(function(e) {
	if (body.hasClass('shifted')) {
		// DO NOTHING
		e.preventDefault();
	} else {
		e.preventDefault();
		contactModal.addClass('modal--open');
		body.addClass('modal--open');
	}
});

contactLink.click(function(e) {
	e.preventDefault();

	willShift.removeClass('shifted');
	nav.removeClass('shifted');
	body.removeClass('shifted');
	
	contactModal.addClass('modal--open');
	body.addClass('modal--open');
});

contactClose.click(function() {
	contactModal.removeClass('modal--open');
	body.removeClass('modal--open');
});

// POST MODAL
var info = $('.post__info');
var postModal = $('.post__modal-wrapper');
var postClose = $('.post__close');

info.click(function(e) {
	if (body.hasClass('shifted')) {
		// DO NOTHING
		e.preventDefault();
	} else {
		e.preventDefault();
		postModal.addClass('modal--open');
		body.addClass('modal--open');
	}
});

postClose.click(function() {
	postModal.removeClass('modal--open');
	body.removeClass('modal--open');
});


// FULLPAGE
$(document).ready(function() {
    $('#fullpage').fullpage( {
    	navigation: true
    });
});