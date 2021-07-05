//define functions here
function getIt() {
  $('p').on('click', function () {
    alert("Hey!")
  })  
}

function frameIt() {
  $('img').on('load', function () {
    $('img').attr('class', 'tasty');
  })  
}

function pressIt() {
  $('form #typing').on('keydown', function (key) {
    //console.log(key.which)
    if (key.which === 71) {
      alert("G was pressed")
    }
  })  
}

function submitIt() {
  $('form').on('submit', function () {
    if ($( "input:first" ).val() === 'secret psswd') {
      alert("Your form is going to be submitted now.")
    }
  })  
}

$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
