
$(document).ready(function(){

});

function getIt() {
  $('p').on("click", function() {
    alert('Hey!')
  });
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty')
    $('img').css ('border','1px solid red')
  });
}

function pressIt() {
  $('#typing').on("keydown", function(key) {
    if (key.which == 71) {
      alert("What a G");
    }
  });
}


function submitIt() {
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.");
    return
  })
}
