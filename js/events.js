function getIt(){
  alert("Hey")
}

function frameIt(){
$("img").addClass("tasty")
}

function pressIt(a){
  console.log(a.which)
  if ($('#typing').val() === "G"){
    alert("G key was pressed down")
  }
}

function submitIt(){
  alert("Your form is going to be submitted now.")
}
//define functions here

$(document).ready(function(){
$('p').on('click', getIt)
$('img').on('load', frameIt)
$('#typing').on('keydown', pressIt)
$('form:nth-child(2)').on('submit', submitIt)
// call functions here
});
