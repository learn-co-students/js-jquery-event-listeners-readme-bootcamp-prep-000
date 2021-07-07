//define functions here
function getIt() {
  $("p").on('click', function(key) {
    alert('Hey!');
  })
}

function frameIt() {
  $("img").on("load", function() {
    $("img").addClass("tasty");
  })
}

function pressIt() {
$("form").on('keydown', function(key) {
  if(key.which == 71){
      alert('alert the user');
  }
});

}

function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
    return;
  }
);}

$(document).ready(function() {
  getIt();
  frameIt();
  pressIt();
  submitIt();
})