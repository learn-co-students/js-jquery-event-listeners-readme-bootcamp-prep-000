//define functions here

$(document).ready(function(){

window.getIt=function (){
  $("p").on("click",function(){
    alert("Hey!");
  })
}

window.frameIt=function(){
  $("img").on("load",function(event){
    $(this).addClass("tasty");
  })
}

 window.pressIt = function(){
  $("#typing").on("keydown",function(event){
      if (event.which == "G".charCodeAt(0) ){
        alert(" G press");}
  })}



  window.submitIt =     function (){
    $("form").on("submit",function(event){
      alert("Your form is going to be submitted now.");
    })
  }


});
