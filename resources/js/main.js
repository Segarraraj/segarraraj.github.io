// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    OnScroll()
};

// Get the header
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function OnScroll() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function ScrollToSection(id) {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
}