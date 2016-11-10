//define functions here
function getIt(){
  $('p').on('click', alert("Hey!"));
}
function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}
function pressIt(){
  $('input').on('keydown', function(key){
    if (key.detail === 71 || key.which === 71 ){
      alert("You have pressed the g key!");
    }
  });
}

function submitIt(){
  $('form').on('submit', alert('Your form is going to be submitted now.'));
}

$(document).ready(function(){

// call functions here
getIt();

});
