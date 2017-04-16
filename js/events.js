//define functions here
//learn open js-jquery-event-listeners-readme-bootcamp-prep-000

var getIt = () => {
  $('p').append("click");
  alert("Hey!");
}

var frameIt = () => {
  $('img').on('load' , function() {
    $('img').prepend(.tasty);
  });
}
$(document).ready(function(){

// call functions here

});
