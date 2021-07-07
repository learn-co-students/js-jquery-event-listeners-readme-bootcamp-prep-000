//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $(document).on('load', function(){
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $('form input').on('keydown', function(key){
    if (key.which === 71){
      alert('Hurray!')
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){
// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});
