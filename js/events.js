//define functions here
function getIt(){
$('p').on('click',
function getIt() {
  alert ("Hey!")
});
}

function frameIt() {
  $('img').on('load',
  function frameIt() {
    $('img').addClass('tasty')
  });
}

function pressIt(){
  $('#typing').on('keydown',
  function pressIt(key){
    if (key.which === 71) {
      alert("g was pressed")
    }
  });
}

function submitIt(){
  $('form').on('submit',
  function submitIt(){
  alert("Your form is going to be submitted now.")
});
}



$(document).ready(function(){

// call functions here
getIt();
frameIt();
submitIt();
pressIt();
});
