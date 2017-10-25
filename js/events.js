//define functions here

$(document).ready(function(){

// call functions here
function getIt() {

$("p").on("click",function(){
  alert("Hey!");
});

}

function frameIt() {

  $('img').on('load', function(){
    //actions you want to happen
    $('img').addClass('tasty')
  });

}


function pressIt() {

$('input').on('keydown',function(e) {
  if((e.which || e.detail ) == 71)
  {
    alert("You pressed the G key!");
  }
});
}

function submitIt() {
$('form').on('submit',function () {
  alert("Your form is going to be submitted now.");
})
}


});
