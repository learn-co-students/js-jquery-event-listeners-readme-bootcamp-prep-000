//define functions here
function getIt() {
  $('p').on('click', function(e) {
    alert("Hey");
  });
}

function frameIt() {
  $('body img').on('load', function(e) {
    $('body img').attr('class', "tasty");
  });
}

function pressIt() {
  $('form input').on('keydown', function(e) {
  if(parseInt(e.which) == 71)
  {
    alert("You have pressed G");
  }
});
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();


});
