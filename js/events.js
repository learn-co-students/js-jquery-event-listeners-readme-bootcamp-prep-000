//define functions here
function getIt(){
  alert("Hey!");
}

function frameIt(){
  var element = document.querySelector('img');
  element.className = "tasty";
}

function pressIt() {
  $('#typing').on('keydown',function(key){
    if (key.which == 71){
      alert('G!');
    }
  });
}

function submitIt(){
  alert("Your form is going to be submitted now.");
}

$(document).ready(function(){

  $('p').on('click', getIt);
  $('img').on('load', frameIt);
  $('form').on("submit", submitIt);
  $('#typing').addEventListener('keydown', pressIt);


});
