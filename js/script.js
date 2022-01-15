const container = document.querySelector('.container');
const toGalleryButton = document.querySelector('.galleryBtn');
const toAboutButton = document.querySelector('.aboutBtn');
const toHomeBtns = document.querySelectorAll('.toHome');

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}


window.addEventListener("load", () => {
  loadHome();
});

function toHome() {
  container.classList.remove('toAbout', 'toGallery');
  console.log("toHome")
}

function loadHome() {
  window.location.href = 'index.html#splashHome'
}

toGalleryButton.addEventListener('click', () => {
  container.classList.toggle('toGallery');
})

toAboutButton.addEventListener('click', () => {
  container.classList.toggle('toAbout');
})

toHomeBtns.forEach(element => {
  element.addEventListener('click', toHome)
})