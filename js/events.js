//define functions here



function getIt(){
  var pTag = $("p");
  pTag.on("click",function(){
    alert("Hey!");
  });
}

function frameIt(){
  var image = $("img");
  image.on("load",function(){
    image.addClass("tasty");
  });
}

function pressIt(){
  var input = $("input");
  input.on("keydown",function(e){
    if(e.which ===71){
      alert("G key pressed");
    }
  });
}

function submitIt(){
  var form = $("form");
  form.on("submit",function(){
    alert("Your form is going to be submitted now.");
  });
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
