function getIt(){
  return $('p').on('click',function(){
    window.alert('Hey!')
    return;
  })
}

function frameIt(){
  return $('img').on('load',function(){
    $('img').addClass('tasty');
  return;
  })
}

function pressIt(){
  return $('input').on('keydown',function(e){
    if(e.which === 71){
      window.alert("You've pressed G key!")
      return;
    }
  })
}

function submitIt(){
  return $('body').on('submit',function(){
    window.alert('Your form is going to be submitted now.')
    return;
  })
}


$(document).ready(function(){
getIt()   
pressIt() 
submitIt() 
frameIt()
});
