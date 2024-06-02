
const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    $("#ajaxForm").submit(function(e){
        e.preventDefault();
        var action = $(this).attr("action");
        $.ajax({
          type: "POST",
          url: action,
          crossDomain: true,
          data: new FormData(this),
          dataType: "json",
          processData: false,
          contentType: false,
          headers: {
            "Accept": "application/json"
          }
        }).done(function() {
           $('.success').addClass('is-active');
        }).fail(function() {
           alert('An error occurred! Please try again later.')
        });
      });
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












