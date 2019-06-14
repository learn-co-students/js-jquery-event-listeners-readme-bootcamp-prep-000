//define functions here

function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
   $("img").load(function() {
     $("img").addClass("tasty");
   });
}

function pressIt() {
    $("input").keydown(function(k) {
      if (k.which == 71) {
        alert("g was pressed");
      }
    });
}

function submitIt() {
  $('form').submit(function () {
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){

// call functions here

  getIt();
  frameIt();
  pressIt();
  submitIt();

});
