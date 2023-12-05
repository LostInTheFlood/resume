// Script File

var menuBtn = document.querySelector('.menu-btn');
var navbarLinksWrapper = document.querySelector('.navbar-links');
var navbarLinks = document.querySelectorAll('.navbar-links li a');

menuBtn.addEventListener('click', toggleMenu);
// Function For Toggling Menu Button and Menu
function toggleMenu(){
	menuBtn.classList.toggle('active');
	navbarLinksWrapper.classList.toggle('active');
}

for(var i = 0; i < navbarLinks.length; i++){
	navbarLinks[i].addEventListener('click', toggleMenu);
}

// Code To Show/Hide Menu When Scrolling
var homeSection = document.querySelector('#home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 140){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}