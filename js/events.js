//define functions here
//1
function getIt(){
  $('p').on('click',function(){
    alert ("Hey!");
  })
}
//2
function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}
 function submitIt(){
   $("form").on('submit',function(){
     alert ("Your form is going to be submitted now.")
   })
 }

function pressIt(){
  $(document).on('keydown', function(key){
    if(key.which==71){
      alert("You Have pressed the g key");
    }
  })

}

$(document).ready(function(){
getIt();
frameIt();
submitIt();
pressIt();

});
