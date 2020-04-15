
/*** PAGE BALADES MODALS BALADES ********************************/

let btn = document.getElementsByClassName("btn-balade");
let modal = document.getElementsByClassName("modal")
for(var i=0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e)=> {
    const modal = document.getElementById(e.target.dataset.modal)
    modal.style.display = "block";
  })
}
let span = document.getElementsByClassName("close");
for(var j=0; j < span.length; j++) {
  span[j].addEventListener("click", (e)=> {
    let modal = e.target.parentNode.parentNode
    modal.style.display = 'none'
  })
}
for(var k=0; k< modal.length; k++){
  modal[k].addEventListener("click", (e) => {
    console.log(e.target.classList)
    if(e.target.classList.contains('modal')){
      e.target.style.display = 'none'
    }
  })
}

/*** PAGE BALADES TESTIMONIALS ********************************/

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
  var dots = document.getElementsByClassName("dot");
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
} 