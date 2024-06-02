
// -----------------------  modal STARTS --------------------------------------
const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `Talk to us ${recipient}`
    modalBodyInput.value = recipient
  })
}
// -----------------------  modal ENDS -----------------------------------------





// -----------------------  change the images on click STARTS -----------------------------------------
var img = document.getElementById("img-area");

  function changeImage1(){
    img.src='images/3.jpg';        
  }
  function changeImage2(){
    img.src='images/4.png';          
  }
  function changeImage3(){       
    img.src='images/5.jpg';          
  }
// -----------------------  change the images on click ENDS -----------------------------------------









