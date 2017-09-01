//define functions here
function getIt(){
  alert(`"Hey!"`);
}

function frameIt(){
  $('img').addClass('tasty');
}

function submitIt(){
  alert(`Your form is going to be submitted now.`);
}

function pressIt(){
  $('#typing').on('keydown', function(key) {
  if(key.which == 71){
      alert('G was pressed');
  }
});
}


$(document).ready(function(){

$('p').on('click', getIt());
$('img').on('load', frameIt());
$('form').on('submit', submitIt());
$('#typing').on('keydown', pressIt());

});
