function getIt(){
  return $('p').on('click',function(){
    window.alert('Hey!')
  })
}

function frameIt(){
  return $('img').on('load',function(){
    $('img').addClass('tasty');
  })
}

function pressIt(){
  return $('#typing').on('keydown',function(e){
    if(e.which === 71){
      window.alert("You've pressed G key!")
    }
  })
}

function submitIt(){
  return $('form').on('submit',function(){
    window.alert('Your form is going to be submitted now.')
 })
}


$(document).ready(function(){
getIt()   
pressIt() 
submitIt() 
frameIt()
});
