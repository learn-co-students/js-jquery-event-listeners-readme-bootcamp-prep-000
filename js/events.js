//define functions here
function getIt(){
  $('p').on('click', function() {alert("Hey!")})

}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}

function submitIt(){
  $('submit').on('submit', function(){
    alert("Your form is going to be submitted now.");
  })
}

function pressIt() {
  $(document).on('keydown', function(key){
    if(key.which === 71){
      alert('g key was pressed down');
    }
  })
}


$(document).ready(function(){

// call functions here

  $('body').on('keypress', function(key){
    if(key.which === 13){
    alert('enter was pressed');
      }
    });

  $('body').on('keydown', function(key) {
    if(key.which == 83){
      alert('s was pressed');
    }
  });

  $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('Your form is going to be submitted now.');
    return;
  }
  alert("you entered the wrong value");
  return;
  });



});
