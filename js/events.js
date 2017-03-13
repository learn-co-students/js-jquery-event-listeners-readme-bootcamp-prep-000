//define functions here

$(document).ready(function(){

// call functions here
function getIt () {
  //bind click to p tag
  $('p').('click', function () {
    //when p is clicked alert (hey!)
    alert ("Hey!");
  });
}

function frameIt () {
  //bind load
  $('img').on('load', function () {

  })
  //adds class tasty to image
  //to add red frame to image
}

function pressIt () {
  //bind keydown to input field on form
  $(input).on('keydown' function(key) {
    if(key.which === g) {
      //alerts user when pressed g
      alert ("g was pressed");
    }
  });
}

function submitIt () {
  //submit event to the form
  $("form").on('submit', function () {
    //alerts "your form is going to be submitted now. "
    alert("Your form is going to be submitted now.")
  });
}

});
