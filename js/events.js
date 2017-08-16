//define functions here
function getIt(){
  $('p').on('click', function(){
  alert("Hey!")//actions you want to happen
});
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}

function pressIt(){
  $('input').on('keydown', function(key){
    if(key.which == 71){
      alert('g was pressed');
    }
  });
}

function submitIt(){
  $('form').on('submit', function(key){
    alert("Your form is going to be submitted now.")
  });
}



$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
// call functions here

});
