//define functions here
function getIt(){
$('p').on('click', alert('Hey!'))
}
function frameIt(){
$(document).on('load', function(){
  $("img").addClass("tasty")
})
}
function pressIt(){
$('input').on('keydown', function(key){
  if(key.which == 71){
      alert('G was pressed');
  }
})
}
function submitIt(){
$('form').on('submit', alert('Your form is going to be submitted now.'))
}


$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
// call functions here

});
