//define functions here
function getIt() {
  alert("Hey!");
}

function frameIt() {
  $('img').addClass("tasty");
}

function pressIt() {
  $('input').on("keydown", function(key) {
    if(key.which == 71){
      alert('hey! You pressed g!')
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  })
}
$(document).ready(function(){

// call functions here
   {
    $('p').on("click", getIt());
    $('img').on("load", frameIt());
    
  }
});

