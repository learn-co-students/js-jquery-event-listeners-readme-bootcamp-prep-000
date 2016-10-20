//define functions here
$('img').on('load',function(){
  $( this ).addClass( "tasty" );
});


$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});

function getIt(){
  $('p').on('click', function () {
    alert ("Hey!");
  })
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass( "tasty" );
  })
}

function pressIt() {
  $('form').on('keydown',function(e){
    if (e.which == 71){
      alert ("You have pressed the g key")
    }
  }
)}

function submitIt() {
  $('form').on('submit',function(){
    alert ("Your form is going to be submitted now.")
  })
}
