function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $(this).attr('class', 'tasty')
    $(this).attr('frame', 'red')
  })
}

function pressIt() {
  $('input').on('keydown', function(e) {
    if(e.which === 71 ) {
      alert('you pressed g!')
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  } )
}


$(document).ready(function(){

getIt()
frameIt()
pressIt()
submitIt()
});
