function getIt() {
  $('p').on('click', function(){
    return alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    return $('img').addClass('tasty')
  })
}

function submitIt() {
  $('form').on('submit', function() {
    return alert('Your form is going to be submitted now.')
  })
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which === 71) {
      return alert('g was pressed!')
    }
  })
}

$(document).ready(function(){

getIt();
frameIt();
submitIt();
pressIt()
return;

});
