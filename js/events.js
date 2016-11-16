//define functions here
function getIt() {
  alert("Hey!");
}

function frameIt() {
  $('img').addClass('tasty');
}

function pressIt() {
  $('#typing').on("keydown",function(key){
    if(key.which === 71) {
      alert("You have pressed the g!");
    }
  });
}

function submitIt() {
  alert("Your form is going to be submitted now.");
}

$(document).ready(function(){

// call functions here
  $('p').on("click",getIt());
  $('img').on("load",frameIt());
  $('#typing').on("keydown",pressIt(key));
  $('form').on("submit",submitIt());
});
