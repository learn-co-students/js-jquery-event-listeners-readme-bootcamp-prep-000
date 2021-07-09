//define functions here

function getIt() {
  $('p').on("click", function() {alert("Hey!")});
}

function frameIt() {
  $('img').on("load", function() {$('img').addClass('tasty')});
}

function pressIt() {
  $('form input#typing').on("keydown", function(e) {
    if (parseInt(e.which) === 71) {
      alert("You have pressed the 'G' key!");
    }
    else {
      // do nothing
    }
  })
}

function submitIt() {
  $('form').on("submit", function() {alert("Your form is going to be submitted now.")});
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
