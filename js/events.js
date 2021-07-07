//define functions here
function getIt(){
  $('p').on('click',function() {
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on('load',function () {
    $('img').append($('.tasty'))
  })
}

function pressIt(){
  $('form').on('keydown',function(e) {
    if (e.key == 'G'){
      alert('User alerted')
    }
  })
}

function submitIt(){
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
