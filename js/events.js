//define functions here

$(document).ready(function(){

// call functions here

});

function getIt(){
  $('p').on('click', function(){
  alert( "Hey!")
  }
  
  )
}

function frameIt(){
  $('img').addClass('tasty')
  $('.tasty').on('load', function(){
 document.getElementById('.tasty').style.border = "thick solid #ff0000" 
    
  })
}

function pressIt(){
  $('document').on('keydown',function(key){
    if(key.which==71){
    alert('G key was pressed down')
    }
    }
  )
  }
  
function submitIt(){
  $('form').on('submit',function(){
alert("Your form is going to be submitted now.")
  })
}