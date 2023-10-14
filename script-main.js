

document.addEventListener("DOMContentLoaded", function () {
    // Get the image and text elements
    const portraitImage = document.getElementById("portrait");
    const portraitText = document.getElementById("portrait-text");

    // Add mouseover event listener
    portraitImage.addEventListener("mouseover", function () {
        // Hide the image
        portraitImage.style.opacity = 0;
        // Show the text
        portraitText.style.display = "block";
    });

    // Add mouseout event listener
    portraitText.addEventListener("mouseout", function () {
        // Hide the text
        portraitText.style.display = "none";
        // Show the image
        portraitImage.style.opacity = 1;
    });
});

let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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


