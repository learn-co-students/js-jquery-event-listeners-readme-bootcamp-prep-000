//define functions here

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});

function getIt() {
$('p').on('click', function(){alert("Hey!");})

}

function frameIt() {
  $('img').on('load', function(){$('img').addClass("tasty")})
}

function submitIt() {
$('form').on('submit', function(){alert("Your form is going to be submitted now.")})
}

function pressIt() {
  $("#typing").on('keydown', function(key){
  console.log(key.which)
  if (key.which ==71){alert("you pressed the g key")}})
}
