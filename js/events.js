//define functions here
function getIt() {
  $('p').on("click", function(){
    <p>"Hey!"</p>
});
}
function frameIt() {
  $('img').on('load', function(){
  //actions you want to happen
});
}
function pressIt() {
  $(document).on('keydown', function(key) {
  if(key.which == 83){
      alert('s was pressed');
  }
});
}
function submitIt() {
  $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
})
}


$(document).ready(function(){
// call functions here
  <p> This is some text to click</p>
  getIt();

  <img src="https://s3.amazonaws.com/after-school-assets/minion-tongue.jpg">

});
