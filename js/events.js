//define functions here
function getIt(){
  return $('p').on('click' , window.alert('hey'))
}
function frameIt(){
  $('img').on('load' , function(){
    $('img').addClass("tasty")
  })
} 
function pressIt(){
  $('#typing').on('keydown' , function(e){
    e = e.which
    if (e === 71){
      window.alert("You pressed 'g'!")
    }
  })
}
function submitIt(){
  $('form').on('submit',function(){
    window.alert('Your form is going to be submitted now.')
  })
}
$(document).ready(function(){

// call functions here
pressIt()
getIt()
frameIt()
submitIt()
});
