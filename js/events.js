function getIt(){
  $('p').on('click', function() {
alert("Hey!")
    })
  return
}

function frameIt(){
$('img').on('load', function(){
$('img').addClass('tasty')
  })
  return
}

function pressIt(){
$('input').on('keydown', function(key){
 if(key.which === 71){
  alert('you pressed g')
  }
   })
  return
}

function submitIt(){
$('form').on('submit', function(){
alert('Your form is going to be submitted now.')
  })
  return
}

$(document).ready(function(){
});
