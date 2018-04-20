// define functions here

function getIt(){
  return $('p').on('click', function(){ 
    alert('Hey!');
    return;
    }
  );
}

function frameIt(){
  return $('img').on('load', function(){
    return $('img').addClass('tasty');
  });
}

function pressIt(){
  return $('form').on('keydown', function(e){
    if (e.which === 71){
      alert("'g' has been pressed");
      return;
    }
  });
}

function submitIt(){
  return $('form').on('submit', function(){
    alert('Your form is going to be submitted now.');
    return;
  });
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
