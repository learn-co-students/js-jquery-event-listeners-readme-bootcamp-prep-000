function getIt(){
  $('p').on("click", function(){
    alert("hey!");
  })
}//define functions here

function frameIt() {
  $('img').on("load",function(){
    $('img').addClass('tasty')
  })
}

function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
    return;
  })
}

function pressIt() {
  $('input').on('keydown', function(key) {
  if (key.which === 71){
    alert("You have pressed the 'g' key.");
  }
})
}
$(document).ready(function(){
getIt();
submitIt();
pressIt();
frameIt();
// call functions here

});
