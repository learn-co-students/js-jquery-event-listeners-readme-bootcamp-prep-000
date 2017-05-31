//define functions here
function getIt(){
//  $('p').on("click",function(){alert("Hey!")})
alert("Hey!");
return;
}

function frameIt(){
  $('img').addClass('tasty');
  return;
}

function pressIt(){
  $('input#typing').on('keydown',function(key){
if (key.which == 71) {
        alert("Hey!");
  }
});}

function submitIt(){
  alert("Your form is going to be submitted now.");
  return;
}

$(document).ready(function(){

// call functions here
$('p').on("click",getIt);
$('img').on("load",frameIt);

//$('input #typing').on('keydown',pressIt);
//pressIt()
$('form').on('submit',submitIt);
});
