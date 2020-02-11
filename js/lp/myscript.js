
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	// const openMenu = document.getElementById('openmenu');
	// const Nav = document.querySelector('header nav')

	// openMenu.addEventListener('click', function() => {
	// 	openMenu.classList.toggle('active');
	// 	Nav.classList.toggle('active');
	// });
}


$(function () {

	$('.top12_in dl dt').click(function () {
		$(this).toggleClass('active');
		$(this).next('dd').slideToggle();
	});





});