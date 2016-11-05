//define functions here

function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').on('load', function(){
  //actions you want to happen
});
}

function pressIt(){
  $('form').on('keydown', function(keyPress){
    if(keyPress.which == 71){
      alert('g was pressed');
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}

function frameIt(){
  $('img').on('load', function(){
    $("img").addClass("tasty");
  })
}


$(document).ready(function(){

// call functions here
 return getIt()

 return pressIt()

 return submitIt()

 return frameIt()
});
