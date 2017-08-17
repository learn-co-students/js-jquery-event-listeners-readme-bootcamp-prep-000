//define functions here

function getIt() {
  $('p').on('click', function() {
      alert('Hey!');
  });
};

function frameIt() {
  $('img').on('load', function() {
    // this.addClass('tasty');
    $(this).addClass('tasty');
  });
};

function pressIt() {
  $('input').on('keydown', function(key) {
    // if (key.key=='g') { // won't pass, have to use keycode..
    if (key.which==71) {
      alert('You pressed g');
    };
  });
};

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}
$(document).ready(function(){
    getIt();
    frameIt();
    pressIt();
    submitIt();

});
