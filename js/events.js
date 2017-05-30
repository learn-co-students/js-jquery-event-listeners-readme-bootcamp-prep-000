//define functions here

$(document).ready(function(){

// call functions here

});

function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load').addClass('tasty');
  }

  function pressIt(){
    $('form').on('keydown', function(key){
      if(key.which == 71) {
        alert("g key was pressed down");
      }
    });
  }

function submitIt(){
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.");
  });
}
