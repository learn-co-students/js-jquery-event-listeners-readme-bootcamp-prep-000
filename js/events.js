//define functions here

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()

});
function getIt (){
  $('p').on('click', function(){
    alert("Hey!")
  })
}
function frameIt (){
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}
function pressIt (){
  $('#typing').on('keydown', function(e){
    if(e.detail ==71 || e.which ==71){
      alert('You have pressed the G key')
    }
  })
}
function submitIt(){
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.")
  })
}
