//define functions here
function getIt() {
  $("p").on("click")
  alert ("Hey!")
  return;
}

function frameIt() {
  $("img").on("load")
  $("img").addClass("tasty")
}

function pressIt() {
  $("form").on("keydown",
  function(key) {
  if (key.which === 71)
  alert ("g was pressed.")
  }
  )
}

function submitIt() {
  $("form").on("submit")
  alert ("Your form is going to be submitted now.")
  return;
}
$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
sumbitIt()
});
