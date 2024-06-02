
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



































// let image = document.getElementById('image');
// function newimagechange(){
//     this.src = "images/image3.jpg"
// }
// image.addEventListener('click', newimagechange);

// // function changeImage1(){
// //     var img = document.getElementById('image');
// //     img.src = 'images/image1.jpg';
// // }

// // function changeImage2(){
// //     var img = document.getElementById('image');
// //     img.src = 'images/image2.png';
// // }

// // function changeImage3(){
// //     var img = document.getElementById('image');
// //     img.src = 'images/image3.jpg';
// // }












