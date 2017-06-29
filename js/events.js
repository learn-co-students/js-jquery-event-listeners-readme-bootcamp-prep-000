function getIt(){
  $('p').on('click', function(){
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on('load', function(){
    $("img").addClass('tasty')
  })
}

function pressIt(){
  $('#typing').on('keydown', function(key){
    if (key === 71){
      alert('You have pressed "G"')
    }
  })
}
$(document).ready(function(){

// call functions here

});
