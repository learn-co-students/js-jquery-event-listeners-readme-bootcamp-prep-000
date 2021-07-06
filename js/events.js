//define functions here
function getIt()
{
  $('p').on("click", function(){
    //action you want taken
    alert("Hey!");
});
}
function frameIt()
{
    $("img").addClass('tasty').on("load", function(){
                                                      });
}

function pressIt()
{
  $("#typing").on('keydown', function(key) {
    
     if ( key.which === 71) 
     {
       return alert(' G was pressed');
     }
  
});
}
function submitIt()
{
  $("form").on("submit", function() 
  {
    return alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){

// call functions here

getIt()
frameIt()
pressIt()
submitIt()
});
