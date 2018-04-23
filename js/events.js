//define functions here
function getIt(){
  $('p').on("click",(e)=>(alert("Hey!")));
}

function frameIt() {
  $('img').on('load', function (){
    $(this).addClass("tasty")

  });
}

function pressIt() {
  $("#typing").on("keydown", (e)=>
    {
      if(e.which===71){
        alert("G key pressed");
      }
    })
}

function submitIt() {
  $('form').on("submit", ()=> {alert("Your form is going to be submitted now.")});
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
