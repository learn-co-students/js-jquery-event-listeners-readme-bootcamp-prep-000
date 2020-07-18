//define functions here
function getIt(){
  $('p').on('click',function(){
    alert("Hey!")
  })
  return;
}

function frameIt(){
  $('img').on('load', function(){
    this.className = 'tasty'
  })
  return;
}

function pressIt(){
  $('input').on('keydown',function(key){
    if(key.which === 71){
      alert("You pressed down the g key");
    }
  })
  return;
}

function submitIt(){
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.");
  })
  return;
}

$(document).ready(function(){

// call functions here

});
