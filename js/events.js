//define functions here
function getIt() {
    $('p').on('click', function(){
        alert("Hey!");
    })
}
function frameIt() {
    $('img').on('load', function(){
        $('img').addClass('tasty');
    })
}
function submitIt() {
      $('form').on('submit', function() {
      alert("Your form is going to be submitted now.");
  })
}
function pressIt() {
      $('input').on('keydown', function(e) {
        if (parseInt(e.detail || e.which) === 71 ) {
            alert("You pressed the G key!");
        }
      })
}

$(document).ready(function(){
// call functions here
    getIt();
    frameIt();
    submitIt();
    pressIt();

});
