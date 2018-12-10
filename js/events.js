//works
function getIt(){
  $("#only-text").on("click", function(){
    alert("Hey!");
  });
}

//works
function frameIt() {
  $("#only-pic").on("load", function(){
    $("#only-pic").addClass('tasty');
  });
}

function pressIt(){
  $("input").on("keydown", function(event){
    const key = event.key;
    
    if (key === "G") {
      alert("IT'S ALIVE!");
    } 
  });
}

//this function fails
function submitIt() {
  $("form:nth-child(2)").on("submit", function(){
    alert("Your form is going to be submitted now.");
  });
}


$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
