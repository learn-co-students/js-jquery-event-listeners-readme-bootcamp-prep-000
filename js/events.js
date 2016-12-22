function getIt() {
  $('p').on('click', function() {
    return alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    return $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(event){
    if (event.which === 71) {
      return alert('The g key has been pressed!')
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here

});
