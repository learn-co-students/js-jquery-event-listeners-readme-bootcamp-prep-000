function getIt(){
  $('p').on('click', function(){
    alert (`"Hey!"`);
  });
}

function frameIt(){

  $('img').load(function(){
    $('img').addClass('tasty');
  });
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.');
    return;
  });
}

function pressIt(){
  $('input').keydown(function(key){
       if (key.which == 71){
          alert('G');
       };
  });
}


$(document).ready(function(){

getIt;
frameIt;
submitIt;
pressIt;
});
