//define functions here

//Get it//
function getIt() {
  $('p').click(function() {
    return alert("Hey!");
  });
}

//Frame it//
function frameIt() {
  $('img').load(function() {
  }).addClass('tasty');
}

//Submit it//
function submitIt() {
  $('form').submit(function() {
    alert("Your form is going to be submitted now.");
  });
}

//Press It//
function pressIt() {
  $(document).keydown(function(key) {
    if (key.which === 71) {
      alert("You have pressed the G key!");
    }
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
submitIt();
pressIt();

});
