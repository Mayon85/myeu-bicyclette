
/*** JS PAGE PRESENTATION DE L'ÎLE */

        /*** IMG CHATEAU ********************************/
        // Get the modal
        var modal = document.getElementById("myModal-chateau");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById("histoire-img");
        var modalImg = document.getElementById("img-chateau");
        var captionText = document.getElementById("caption-chateau");
        img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        }

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        } 

        /*** IMG VIE ISLAISE ********************************/
        // Get the modal
        var modal = document.getElementById("myModal-vie");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById("vie-img");
        var modalImg = document.getElementById("img-fetefleur");
        var captionText = document.getElementById("caption-vie");
        img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        }

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        } 

        /*** IMG BATEAU ********************************/
        // Get the modal
        var modal = document.getElementById("myModal-vivre");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById("venir-img");
        var modalImg = document.getElementById("img-bateau");
        var captionText = document.getElementById("caption-bateau");
        img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        }

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        } 




/*** LIGHTBOX PETITE GALERIE PHOTOS ********************************/

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

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


