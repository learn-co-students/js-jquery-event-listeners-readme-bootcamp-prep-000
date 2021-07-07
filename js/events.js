//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
   }
  )
}
function frameIt() {
  $('img').on('load', function(){
   document.getElementsByTagName('img')[0].classList.add('tasty')
   }
  )
}

function pressIt() {
  $(document).on('keydown',
  function(key) {
    if (key.which == 71) {
      alert ('You have pressed "g"')
    }
  }
)
}

function submitIt() {
  $('form').on('submit', function()
  {
      alert("Your form is going to be submitted now.");
      return;
  })
}


$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()

// call functions here

});
