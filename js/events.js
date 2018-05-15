//define functions here
function getIt(){
  $('p').on('click',function(){
    alert("HEY!")
  })
}
function frameIt(){
  $(window).on('load',function(){
    $('img').addClass('tasty')
  })
}
$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
});
