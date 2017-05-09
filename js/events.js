//define functions here


// call functions here

// $('h1').on("eventname", function(){
//     //action you want taken
// });

function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
    return
  })
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass('tasty')
    return

  }
)}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    if (e.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.')
  })
}


$(document).ready(function(){
submitIt()
pressIt()
frameIt()
getIt()

});
