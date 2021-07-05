//define functions here

function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').on('load', function(){
    let id = document.querySelector('img')
    id.className += "tasty"
  })
}

function pressIt(){
  $('form').on('keydown', function(key){
    if(key.which == 71){
      alert("Oh no! The ONE key you weren't supposed to press!")
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
