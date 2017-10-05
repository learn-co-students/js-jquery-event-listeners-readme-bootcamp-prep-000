function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass("tasty")
  })
}

function pressIt() {
  $('#typing').on("keydown", function(k) {
    if(parseInt(k.which) == 71) {
      alert("G")
    }
  })
}

function submitIt() {
  $('form').on("submit", function(event) {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

  getIt()
  frameIt()
  pressIt()
  submitIt()

});
