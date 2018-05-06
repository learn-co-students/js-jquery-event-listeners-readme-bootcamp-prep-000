//define functions here
function getIt(){
  alert('Hey!')
}

function frameIt(){
  $('img')[0].className = "tasty"
}

function pressIt(){
  $('#typing').on("keydown",function(event){
    if (event.which === 71) {
      alert("G")
    }
  })
}

function submitIt(){
  alert("Your form is going to be submitted now.")
}

$(document).ready(function(){

// call functions here
$('p').on("click",getIt);
$('img').on("load",frameIt);
$('#typing').on("keydown",pressIt);
$('form').on("submit",submitIt);
});
