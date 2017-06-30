//define functions here
var lastKey = ""

function getIt() {
  alert("Hey!")
  return
}

function frameIt() {
  $('img').addClass("tasty")
  return
}

function pressIt() {
  $( "#typing").on("keydown",function(e) {
      if (e.which == 71) {
        alert('You have pressed the G key');
      }
    return
  });
}

function submitIt() {
  alert("Your form is going to be submitted now.")
  return
}


$(document).ready(function(){
  // call functions here
  $('p').on("click", function(){
      getIt()
  });

  $('img').on("click", function(){
      frameIt()
  });

pressIt()

  $('form').on("submit",function() {
    submitIt()
  })
});
