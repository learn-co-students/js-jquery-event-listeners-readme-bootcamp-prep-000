//define functions here

var getIt = function() {
  $('p').on('click', function() {
    alert("Hey!");
  });
};

var frameIt = function() {
  $(document).on('load', function() {
    $('img').addClass("tasty");
  });
};

var pressIt = function() {
  $('#typing').on('keydown', function(key) {
    if (key.which === 71) {
      alert("g was pressed!");
    }
  });
};

var submitIt = function() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
  });
};

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
