//define functions here

function getIt() {
  alert("Hey!")
}

function frameIt() {
  $("img").addClass("tasty");
}  

function pressIt() {
  $('form#typing').on("keydown", function(e) {
    if (e.which === 71) {
      window.alert("the key is G")
    }
  })
}

  
function submitIt() {
  alert("Your form is going to be submitted now.")
}


$(document).ready(function(){

$('p').on("click", getIt());
on('load', frameIt());
$('form#typing').on("keydown", pressIt());
$('form').on("submit", submitIt());

// call functions here

});
