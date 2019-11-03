var slideIndex = 1;
showSlides(slideIndex);
 
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
 
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
 
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideImages");
  var dots = document.getElementsByClassName("slideDots");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
 
  function newFunction() {
    return "slideImages";
  }
}

window.onscroll = function() {myFunction()};

var navlink = document.getElementById("navlink");

var sticky = navlink.offsetTop;

function myFunction(){
  if(window.pageYOffset >= sticky){
    navlink.classList.add("sticky")
  }
  else{
    navlink.classList.remove("sticky");
  }
}
