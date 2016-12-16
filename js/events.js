//define functions here

function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on("load", function() {
//    $('img').className = "tasty"
  var tasty = document.getElementsByTagName("img")[0]
  tasty.className = "tasty"
  return tasty
  })
}

function pressIt() {
  $('input:first').on("keydown", function(e) {
    if (e.which === 71) {
      alert("Congrats, that's the correct key!")
    }
  })
}

function submitIt() {
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){
  // call functions here
getIt()
frameIt()
pressIt()
submitIt()
});
