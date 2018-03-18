//define functions here
getIt = function(){
  $('p').on('click', function() {
    alert('Hey!');
  });
};

frameIt = function(){
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
};

pressIt = function() {
  $('form').on('keydown', function(key) {
    if (key.which == 71) {
      alert('G pressed.');
    }
  });
};

submitIt = function() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
  });
};

$(document).ready(function(){

// call functions here

});
