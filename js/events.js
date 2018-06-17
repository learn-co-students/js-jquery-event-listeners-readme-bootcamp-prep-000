//define functions here

//$(document).ready(function(){
  
  function getIt(){
    $('p').on("click", function (){
      
    alert("Hey!");
  
    })
  }
  
  function frameIt(){
  $("img").on("load", function frameIt(){
  $("img").addClass("tasty");
  
    
  })
  }
  
  function pressIt(){
    $("input").on("keydown", function pressIt(e){
  if (e.which ===71){
    alert('yOU PRESSED g');
  
  }
  })
  }
  function submitIt(){
    $('form').on('submit', function submitIt(){
  
    alert("Your form is going to be submitted now.");
  
})

}



//});
 
 /*

  
});

$("img").on("load", function frameIt(){
  $("img").addClass("tasty");
  
 })

$("input").on("keydown", function pressIt(e){
  if (e.which ===71){
    alert('yOU PRESSED g');
  }
 
});

$('form').on('submit', function submitIt(){
  
  alert("Your form is going to be submittef now");
  
});*/



