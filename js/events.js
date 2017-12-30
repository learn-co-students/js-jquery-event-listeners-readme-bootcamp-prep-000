function getIt() {
  $('p').on("click", function () {
    alert ("Hey!");
  })
  return;
}

function frameIt() {
  $(window).on("load", function () {
    $('img').addClass("tasty")
  })
  return;
}

function pressIt() {
  $('form').on("keydown", function (key) {
    if (key.which == 71) {
      console.log(key.which);
      alert ("You have pressed G");
    }
  })
  return;
}

function submitIt() {
  $('form').on("submit", function () {
      alert ("Your form is going to be submitted now.");
  })
  return;
}


$(document).ready(function(){

  frameIt();
  getIt();
  pressIt();
  submitIt();

});
