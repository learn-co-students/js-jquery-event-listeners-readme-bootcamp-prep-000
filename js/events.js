function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
    return;
  })
}

function frameIt() {
  $('img').on("click", function() {
    $('img').addClass("tasty");
    //add tasty class and frame red
  })
}

function pressIt() {
  $('form').on("keydown", function(e) {
    if(e.which === 71) {
      alert("Shit you've pressed the fucking 'g', G!")
    }
  })
}

function submitIt() {
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now.")
    return;
  })
}


$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
// call functions here
});
