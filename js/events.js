//define functions here
function getIt(){
  //bind a click event to the p tag when clicked alert
  // "Hey!"
  $('p').on('click', function(){
  //actions you want to happen
  alert("Hey!")
});
}


function frameIt(){
//bind the load event that adds the class tasty
//to the image to add a red frame to the image
$('img').on('load', function(){
  //actions you want to happen
  $('img').addClass("tasty")
});


}

function submitIt(){
  $("form").on("submit", function() {
  if ($( "input:first" )) {
    alert('Your form is going to be submitted now.');
    return;
  }
  //alert("you entered the wrong value");
  //return;
});
}

function pressIt(){
//bind keydown event to the input field of the form
//alert a user when they have pressed the G key
$("form").on('keydown', function(key) {
if(key.which == '71'){
    alert('g was pressed');
    return;
}
});
}


$(document).ready(function(){

// call functions here

});
