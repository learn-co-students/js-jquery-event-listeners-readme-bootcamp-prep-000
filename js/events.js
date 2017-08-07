//define functions here
function getIt(){
  $('p').on('click', function(){
    window.alert('Hey!');
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}

function pressIt(){
  $('input').on('keydown', function(e){
    if (e.which === 71){
      window.alert('you pressed the g!');
    }
  });
}

function submitIt(){
  $('form').on('submit', function(){
    window.alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){

// call functions here

});
