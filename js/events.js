function getIt(){
  alert('Hey!');
}

$('p').on('click', getIt);


$('img').on('load', function(){
  
 $('img').addClass("tasty");
 
});

function frameIt(){
  
 return $('img').addClass('tasty');
 
}

$('img').on('load', frameIt);


function pressIt(){
  
  $(document).on('keydown', function(key){
    if(key.which == 71){
      alert('the G key was pressed down');
    }
  });
  
}


function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.');
  })
}



