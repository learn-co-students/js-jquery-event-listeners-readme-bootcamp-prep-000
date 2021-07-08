//define functions here

$(document).ready(function(){

// call functions here
  getIt()

  frameIt()

  pressIt()

  submitIt()
});

function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {

  $('img').on('load', (e) => {
    $(e.target).addClass('tasty')
  })
}

function pressIt() {

  $('input#typing').on('keydown', (e) => {
    let keypress = e.KeyCode || e.which || e.detail;

    if(keypress === 71) {
      alert('Yo! you pressed the g key.')
    }
  })
}

function submitIt() {

  $('form').on('submit', function(event) {

    event.preventDefault();
    alert('Your form is going to be submitted now.');
  })
}
