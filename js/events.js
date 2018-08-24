//define functions here

function getIt() {
  alert("Hey!")
}

function frameIt() {
  $("img").addClass("tasty");
}


$(document).ready(function(){

$('p').on("click", getIt());
on("load", frameIt())
// call functions here

});
