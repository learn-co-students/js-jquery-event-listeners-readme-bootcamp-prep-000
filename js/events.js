//define functions here

function getIt() {
  alert("Hey!")
}

function frameIt() {
  $('img').addClass('tasty')
}


function pressIt() {
    /*if ($( "input:first" ).val() === "g") {
      alert('g was pressed');
      return;
    } */
    alert('g was pressed');
    return;
}


function submitIt() {
  alert('Your form is going to be submitted now.')
}

$(document).ready(function(){

// call functions here
$('p').on("click", function(){
    getIt();
});

$(document).on('load', function(){
    frameIt();
});

$('#typing').on('keypress', function(key) {
  if(key.which === 71){
      pressIt();
      //alert('g was pressed')
    }
});

$("form").on("submit", function() {
  submitIt();
});

});
