function getIt(){
  $('p').on('click',function(){
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on('load',function(){
 $("img").addClass("tasty");
  })
}

function pressIt()
{
  $('input').on('keydown',function(e){
    if(e.which===71)
    {
      alert("pressed G")
    }
    return;
  })
}
function submitIt(){
  $("form").on("submit", function(){
    window.alert("Your form is going to be submitted now.");
  });
}
$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});
