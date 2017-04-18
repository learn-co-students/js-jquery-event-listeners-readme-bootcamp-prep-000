function getIt(){
  $('p').on('click',function(){
    alert('Hey!')})
}

function frameIt(){
  $('img').on('load',function(){
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $('input').on('keydown',function(x){
    if(x.which===71){
      alert('OG')
    }
  })
}
function submitIt(){
  $('form').on('submit',function(){
    alert('Your form is going to be submitted now.')
  })
}


$(document).ready(function(){
getIt()
frameIt()
pressIt()
submitIt()
})
