//define functions here
function getIt(){
  $("p").on("click",function(){
    alert("hey!")
  })
}

function frameIt(){
  $("img").on("load",function(){
    $(this).addClass("tasty")
  })
}

function pressIt(){
  $('#typing').on("keydown",function(e){
    if(parseInt(e.which)===71){
      alert("g key was pressed")
    }
  });
}

function submitIt(){
  $("form").on("submit",function(){
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){
  getIt()
  pressIt()
  submitIt()
  frameIt()
// call functions here

});
