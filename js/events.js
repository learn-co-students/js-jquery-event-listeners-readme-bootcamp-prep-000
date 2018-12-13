//define functions here
$('p').on('click', 
  function getIt(){
    alert("Hey!"); 
  }); 
  
$('img').on('load', 
  function frameIt(){
    $('img').addClass("tasty"); 
    imgTag.style.border='red'; 
  }); 
  
  $('form').on('keydown', 
  function pressIt(){
    if (key.which==71){
      alert('You pressed G! OMG!'); 
    } 
  }); 
  
$('form').on('submit', 
  function submitIt(){
      alert('Your form is going to be submitted now.'); 
  }); 

$(document).ready(function(){

// call functions here
function getIt(); 
function frameIt();
function pressIt(); 
$('form').on('submit', 
  function submitIt(){
      alert('Your form is going to be submitted now.'); 
  }); 
});
