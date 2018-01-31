//define functions here - outside of document.ready; and call them inside

function getIt() {
  $('p').on('click', function() {window.alert("Hey!")});
}

function frameIt() {
  //$('img .tasty').on('load', function () {$('img .tasty').style('border: red')};
  $('img').on('load', function() {$('img').addClass('tasty')});
}

function pressIt() {
  $('input').on('keydown', function(keyDownEvent) {
                            if (keyDownEvent.which === 71) {
                              window.alert("You have pressed the 'G' key, either as a small g or as a capital G.");
                            }
                          })
}

function submitIt() {
  $('form').on('submit', function() {window.alert("Your form is going to be submitted now.")});
}



$(document).ready(function(){
// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
