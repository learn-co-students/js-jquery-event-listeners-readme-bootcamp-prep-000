//define functions here
function getIt () {
  $('p').on("click", function () {
    alert("Hey!");
  });
}

function frameIt () {
  $(document).on("load", function () {
    $('img').addClass("tasty");
  });
}

function pressIt () {
  $('#typing').on("keydown", function (key) {
    if (key.which == 71) {
      alert("g was pressed");
    }
  });
}

function submitIt () {
  $('form').on("submit", function () {
    alert("Your form is being submitted now.");
  }
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressit();
  submitIt();
});
