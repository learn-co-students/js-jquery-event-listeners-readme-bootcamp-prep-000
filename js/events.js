function getIt() {
  $("p").on("click", function(e) {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass("tasty");
  })
}

function pressIt() {
  $('input').on('keydown', function(e){
    if (e.which === 71){
      alert('you have pressed the "G" key')
    }
  })
}

function submitIt() {
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.');
    return;
  })
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
