//define functions here
function getIt(){
  $('p').on('click', function (e){
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on('load', function (){
    $(this).addClass('tasty');
  })
}

function pressIt(){
  $(document).on('keydown', function(key){
    if(key.which == 71) {
      alert("g key was pressed down")
    }
  })
}

function submitIt(){
  $("form").on("submit", function() {
    //if ($( "input:first" ).val() === "correct") {
      alert('Your form is going to be submitted now.');
      return;

    });
    alert("you entered the wrong value");
    return;


}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
