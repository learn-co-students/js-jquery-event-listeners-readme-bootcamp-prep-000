function getIt() {
  // bind a click event to the p
  $('p').on("click", function() {
    // when function clicked alert "hey!"
    window.alert("hey!");
  });
}

function frameIt() {
  // load event that adds the class tasty to the image to add a red frame to image
  $('img').on('load', function () {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  // binda a keydown event to the input field of the form that alerts when press g
  $(document).on('keydown', function(key) {
    if (key.which == 71) {
      alert('g was pressed');
    }
  });
}

function submitIt() {
  // bind submit to the form, alerts "Your form is going to be submitted now.""
  alert("Your form is going to be submitted now.");
}

$(document).ready(function() {

  // call functions here

});
