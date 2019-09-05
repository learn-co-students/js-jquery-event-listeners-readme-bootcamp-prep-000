//define functions here

$(document).ready(function(){

// call functions here
$('p').on("click",getIt);
$('img').on("load",frameIt());
$('form').on("submit",submitIt);

});


function submitIt(){
  alert("Your form is going to be submitted now.");
}

function getIt(){
    alert("Hey!");
}

function frameIt(){
  $('img').addClass("tasty")
  return 
}

function pressIt() {
  $('#typing').on("keydown",function(e){
      if (e || window.event)
      {
        console.log(e.which)
        if (parseInt(e.which)===71){
          window.alert("G");
        }
      }
      });
}
pressIt();