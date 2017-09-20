//define functions here

function help(string) {
  alert(string)
}

function help2() {
  $('img').addClass('tasty')
}

function getIt() {
  $('p').on('click', help("Hey!"))
}

function frameIt() {
  $('img').on('load', help2())
}

function submitIt() {
  $('form').on('submit', help("Your form is going to be submitted now."))
}

function pressIt() {
  $(document).keydown(function(event) {
    if (event.which == 71) {
     alert('g was pressed');
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
