//define functions here

// + Define a function `getIt` that does not accept a parameter.
function getIt() {
  $('p').on('click', function () {  // The function should bind a `click` event to the `p` tag.
    alert('Hey!'); // When the paragraph is clicked, the function should alert `"Hey!"`.
  });
}


// + Define a function `frameIt` that does not accept a parameter.
function frameIt() {
  $('img').on('load', function () { // The function should bind the `load` event
    $('img').addClass('tasty'); // that adds the class `tasty` to the image to add a red frame to the image.
  });
}

// + Define a function `pressIt` that does not accept a parameter.
function pressIt() {
  $('#typing').on('keydown', function(key) { // The function should bind a `keydown` event to the input field
    if (key.which == 71) {
      alert("You have pressed the g key.");// of the form that alerts a user when they have pressed the `g` key.
    }
  });
}

// + Define a function `submitIt` that does not accept a parameter.
function submitIt() {
  //  The function should bind a `submit` event to the form that alerts `"Your form is going to be submitted now."`.
  $('form').on('submit', function () {
    alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){

// call functions here
// You will want to define your functions outside of the document ready,
// and call them inside of this. This way, your tests will run as expected
// and you can test your code in the browser as well.

});
