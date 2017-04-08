//define functions here
function getIt(){
  $('p').on('click',function(){
    alert('Hey!');
  });
}

function frameIt(){
  $('img').on('load',function(){
    $('img').addClass('tasty');
  });
}

  function pressIt(){
    $('form input').on('keydown',function(key){
    var x = key.which || key.keyCode;
    if(x == 71){
      alert('YOU PRESSED G');
    }
  })
}

function submitIt (){
  $('form').on('submit',function(){
    alert('Your form is going to be submitted now.');
  });
}



$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
