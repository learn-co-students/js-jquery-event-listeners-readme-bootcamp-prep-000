//define functions here

function getIt() {
  $('p').on('click', function(){alert ('Hey!');});
}

function frameIt() {
  $('img').on('load', function(){$('img').addClass('tasty');});
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.which === 71) {
      alert ('You have pressed the G Key.');
    }
  });
}

function submitIt() {
  $('form').on('submit', function(){
      alert ('Your form is going to be submitted now.')
    });
}


$(document).ready(function(){

// call functions here

// $('p').on('click', getIt());
//
// $('img').on('load', frameIt());
//
// $(document).on('keydown', pressIt());
//
// $('form').on('submit', submitIt());

getIt()
frameIt()
pressIt()
submitIt()

});
