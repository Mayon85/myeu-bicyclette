
/*** PAGE BALADES MODALS INCONTOURNABLE ********************************/

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