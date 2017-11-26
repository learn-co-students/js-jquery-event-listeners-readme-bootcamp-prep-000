function getIt() {
    alert("Hey!");
  }

function frameIt() {
    $('img').addClass("tasty");
}

function pressIt() {
  $("input").on("keydown", function(e){
    var key = e.which||e.keyCode;
    if(key==71) alert("You have found my G spot.");
  });
}

function submitIt() {
  alert("Your form is going to be submitted now.")
}

$(document).ready(function(){

$('p').click(getIt());

$('img').load(frameIt());

$('input').on('keydown', pressIt());

$('form').on('submit', submitIt());
// call functions here

});
