function getIt(){
  $('p').on("click",function() {
    alert("Hey!")
  });
}
function frameIt(){
  $('img').on("load",function(){
    $('img').addClass('tasty')
  });
}
function pressIt(){
  $(document).on("keydown", function(key){
    if (key.which == 71 ) {
      alert("You pressed G!")
    }
  });
}
function submitIt(){
  $("form").on("submit",function(){
      alert('Your form is going to be submitted now.');
      return;
  })
}

$(document).ready(function(){
  window.getIt()
  window.frameIt()
  window.pressIt()
  window.submitIt()
// call functions here

});
