function getIt() {
  $("p").on("click", function hey() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function () {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $("#typing").on("keydown", function gPressed(e) {
    let key = parseInt(e.which || e.detail);
    if(key.which == 71) {
      alert("You have pressed 'g'");
    }
  });
}

function submitIt() {
  $("form").on("submit", function confirmation(){
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
