//define functions here
function getIt(){
  $('p').on('click', function(){
     alert("Hey!");
  })
}

function frameIt(){
  $('img').on('load', function(){
    $(this).css('border', "solid 2px red");
    $(this).addClass('tasty');
  })
}

function pressIt(){
  $('input#typing').on('keydown', function(e){
     if (e.which === 71) {alert("Y")};
  })
}

function submitIt(){
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
