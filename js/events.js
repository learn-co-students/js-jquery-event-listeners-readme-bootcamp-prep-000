//define functions here

$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
function getIt(){
  $('p:first').on('click', function(){
    alert('Hey!')
  })
}
function frameIt(){
  $('img:first').on('load', function(){
    $('img').addClass("tasty")
  })
}
function pressIt(){
  $('form #typing').on('keydown',function(key){
    if(key.which ===71){
      alert("You have pressed the 'G' key")
    }
  })
}
function submitIt(){
   $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
  });
}