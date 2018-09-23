function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  var addClass = document.querySelector('img');
  addClass.className = "tasty"
  return
}

function pressIt() {
   $('input').on('keydown', function(e) {
     if (e.which == 71) {
     alert('You have pressed the "G" key')
     }
     else return
   }) 
}

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
  return
});
