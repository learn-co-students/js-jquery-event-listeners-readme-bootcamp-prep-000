//define functions here

function getIt(){
  const clicked = $('p').on('click', function(){
    alert(`Hey!`)
    return clicked
  })
}

function frameIt(){
 $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

function pressIt(){
  const keyPressed = $('input').on('keydown', function(key){
    if(key.which === 71 ){
      alert(`g was pressed`)
    }
  })
  return keyPressed
}

function submitIt(){
  const submitForm = $('form').on('submit', function(){
    alert(`Your form is going to be submitted now.`)
  })
  return submitForm
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
