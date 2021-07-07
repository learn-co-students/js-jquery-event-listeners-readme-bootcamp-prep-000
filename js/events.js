function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  });
}
function frameIt() {
  $(document).on('load', function() {
    $('img').addClass('tasty');
    $('img').css({"border-color":"red",
                  "border-width":"1px",
                  "border-style":"solid"});
  });
}
function pressIt() {
  $(document).on('keydown', function(key) {
    if(key.which == 71){
      alert('GG, You hit "G", G!');
    }
  });
}
function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.')
  });
}
$(document).ready(function(){
  getIt();
  frameIt();
  pressIt()
  submitIt();
});
