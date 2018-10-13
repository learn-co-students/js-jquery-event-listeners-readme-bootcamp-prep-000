//define functions here
function getIt(){
  $('p').on('click', function(key){
  alert("Hey!")
});
}

function frameIt(){
  $('img').on('load', function(){
  $(this).addClass('tasty')
});
}

function pressIt(){
  $(document).on('keydown', function(key){
    if (key.which == 71){
      alert();
    }
  });
}

function submitIt(){
$("form").on("submit", function(form) {
    alert('Your form is going to be submitted now.');
});
}

$(document).ready(function(){

// call functions here

});
