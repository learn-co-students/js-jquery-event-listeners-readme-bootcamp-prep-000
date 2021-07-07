
$(document).ready(function(){

$('p').on('click', getIt());
$('img').on('load', frameIt());
$('form').on('submit', pressIt());
$('form').on('input', submitIt());

});



function getIt() {
  alert('Hey!');
};

function frameIt() {
  $("img").addClass("tasty");
};


function pressIt() {
  $( "#typing" ).keydown(function( event ) {
 if ( event.which == 71 ) {
  event.preventDefault();
  alert("g was pressed");
 }
})};

function submitIt() {
  alert("Your form is going to be submitted now.");
};
