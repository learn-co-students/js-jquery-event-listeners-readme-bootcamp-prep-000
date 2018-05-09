//define functions here

$(document).ready(function(){

// call functions here

});

function getIt(){
  return alert("Hey!");
}

$('p').on('click', function getIt(){
    return alert("Hey!");
})


function frameIt(){
   $('img').addClass('tasty');
}

$('img').on('load', function frameIt(){
  $('img').addClass('tasty');
})


function pressIt(){
  $('form').on('keydown', function(key){
    if(key.which === 71){
      alert("You're a G!");
    }
  });
}


function submitIt(){
  $('form').on('submit', function(){
    return alert("Your form is going to be submitted now.")
  })
}