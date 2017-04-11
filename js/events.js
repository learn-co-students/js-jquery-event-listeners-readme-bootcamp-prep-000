//define functions here

function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').on('load', function(){
    $(this).addClass('tasty')
  })
}

function pressIt(){
  $('#typing').on('keydown', function(key){
    var parsedKey = parseInt(key.which, 10)
    if (parsedKey === 71){
      alert("You have pressed the g key!")
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
