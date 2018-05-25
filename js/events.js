//define functions here

$(document).ready(function(){

  
});

 function getIt(){
    $('p').on('click',function(){
      alert("Hey!");
    });
 }
 
 function frameIt(){
   $('img:first').on('load',function(){
     $('img:first').addClass('tasty')
     });
   $('.tasty').css('border','1px solid red')
 }
 
 function pressIt(){
   $('input').on('keydown',function(key){
     if(key.which === 71){
       alert("G is pressed");
     }
     
   })
 }
 
 function submitIt(){
   $('form').on('submit',function(){
     alert("Your form is going to be submitted now.")
   });
 }
 
 