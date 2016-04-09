var body = document.body;
var content = document.querySelector('.content-wrapper');

var nav = document.querySelector('.nav');
var willShift = document.querySelectorAll('.js--will-shift');
var navButton = document.querySelector('.nav__button');

navButton.addEventListener('click', function() {
	if (body.classList.contains('modal--open')) {
		// DO NOTHING
	} else {

		for (var i = willShift.length - 1; i >= 0; i--) {
			willShift[i].classList.toggle('shifted')
		}
		
		nav.classList.toggle('shifted');
		body.classList.toggle('shifted');
	}
});

// CONTACT MODAL
var contact = document.querySelector('.home__contact-link');
var contactLink = document.querySelector('.nav__contact');
var contactModal = document.querySelector('.contact__modal-wrapper');
var contactClose = document.querySelector('.contact__close');

if(contact) {
	contact.addEventListener('click', function(e) {
		if (body.classList.contains('shifted')) {
			// DO NOTHING
		} else {
			e.preventDefault();
			contactModal.classList.add('modal--open');
			body.classList.add('modal--open');
		}
	});
}

contactLink.addEventListener('click', function(e) {
	e.preventDefault();

	willShift.classList.remove('shifted');
	nav.classList.remove('shifted');
	body.classList.remove('shifted');
	
	contactModal.classList.add('modal--open');
	body.classList.add('modal--open');
});

contactClose.addEventListener('click', function(e) {
	contactModal.classList.remove('modal--open');
	body.classList.remove('modal--open');
});

// POST MODAL
var info = document.querySelector('.post__info');
var postModal = document.querySelector('.post__modal-wrapper');
var postClose = document.querySelector('.post__close');

info.addEventListener('click', function(e) {
	if (body.classList.contains('shifted')) {
		e.preventDefault();
		content.style.overflowY = "initial";
	} else {
		e.preventDefault();
		postModal.classList.add('modal--open');
		body.classList.add('modal--open');
		content.style.overflowY = "hidden";
	}
});

postClose.addEventListener('click', function() {
	postModal.classList.remove('modal--open');
	body.classList.remove('modal--open');
});


// FULLPAGE
$(document).ready(function() {
    $('#fullpage').fullpage( {
    	navigation: true
    });
});