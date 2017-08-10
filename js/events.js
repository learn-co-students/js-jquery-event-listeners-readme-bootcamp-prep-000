function getIt() {
  alert("Hey!");
}

function frameIt() {
   $('img').addClass("tasty");
}

function pressIt() {
  alert("g was pressed");
}

function submitIt() {
  alert("Your form is going to be submitted now.");
}

// document ready section // call functions here

$(document).ready(function(){

  $('p').on('click', function() {
    getIt();
  });

  $('img').on('load', function() {
    frameIt();
  })

  $('#typing').on('keydown', function(key) {
      if(key.which == 71){
        pressIt();
      };
  });

  $('form').on('submit', function() {
    submitIt();
  })

});
