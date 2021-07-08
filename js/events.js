//define functions here
function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
    return;
  });
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass("tasty");
    $('img').css('border', "solid 2px red");
  });
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if (key.which === 71) {
      alert("G has been pressed.");
      return;
    }
  });
}

function submitIt() {
  $("form").on("submit", function() { 
    alert("Your form is going to be submitted now.");
    return;
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIT();
pressIt();
submitIt();
});
