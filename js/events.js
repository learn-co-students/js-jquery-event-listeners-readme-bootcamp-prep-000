//define functions here

$(document).ready(function(){

 
 getIt();
 frameIt();
 pressIt();
 submitIt();
});

function getIt(){
  $('p').on('click', function(){
    alert ('hey!')
  })
}

function frameIt(){
 $('img').on('load', function(){
    $("img").addClass("tasty")
  })
}

function pressIt(){
  $('form input:first-child').on('keydown', function(key){
    if(key.which == 71){
      alert('G has been pressed!')
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}









