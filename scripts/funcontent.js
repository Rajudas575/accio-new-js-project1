$(document).ready(function () {
  // When the button is clicked, show the modal with the GIF
  $("#proceed").click(function () {
    $("#gifModal").fadeIn();
  });

  // When the user clicks on the close button, close the modal
  $(".close").click(function () {
    $("#gifModal").fadeOut();
  });

  // Optional: Close modal if user clicks outside the modal content
  $(window).click(function (event) {
    if ($(event.target).is("#gifModal")) {
      $("#gifModal").fadeOut();
    }
  });
});
