function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').load(function() {
    $(this).addClass("tasty");
  });
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if (key.which === 71)
      alert("That's a G!");
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
