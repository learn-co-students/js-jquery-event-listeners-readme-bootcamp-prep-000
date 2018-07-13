//define functions here

function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
    return
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  }).each(function(){
    if(this.complete) {
      $(this).trigger('load');
    }
  })
}

function pressIt() {
  $('input#typing').on('keydown', function(e) {
    if (e.which === 71) {
      alert('g pressed')
      return
    }
    return
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
    return
  })
}


$(document).ready(function(){

// call functions here

frameIt();
getIt();
pressIt();
submitIt();

});
