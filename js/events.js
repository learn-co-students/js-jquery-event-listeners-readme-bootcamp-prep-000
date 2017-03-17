//define functions here

function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
    //$('img').addClass('.tasty')
    //$('img').append('tasty')
    //$('img').append('.tasty')
    //addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(key){
    if (key.which === 71) {
      alert('g was pressed!')
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    //if ($( "input:first" ).val() === "correct") {
      alert('Your form is going to be submitted now.')
    //}
  })
}
//Below is what they mean by defining your functions outside document ready.  Then you trigger the functions below this line.
$(document).ready(function(){

// call functions here
getIt()

frameIt()

pressIt()

submitIt()

});
