//define functions here

$(document).ready(function(){

// call functions here
getIt()
frameIt()
submitIt()
pressIt()

});

function getIt(){
  $('p').on('click', function() {
    alert('Hey!');
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass("tasty");
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}

function pressIt(){
  $('form input:first-child').on('keydown', function(key){
    if(key.which == 71){
      alert('the g key')
    }
  })
}
