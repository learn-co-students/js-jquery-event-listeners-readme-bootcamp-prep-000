//define functions here

function getIt(){
 $("p").on('click', function(){
   alert("Hey!")
 })
}

function frameIt(){
  $("img").on('load', function(){
    $(this).addClass('tasty');
  })
}

function pressIt(){
  $('#typing').on('keydown', function(key){
    if(key.which === 71){
      alert("YOU PRESSED IT");
    };
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){
  submitIt();
  getIt();
  frameIt();
  pressIt();
});
