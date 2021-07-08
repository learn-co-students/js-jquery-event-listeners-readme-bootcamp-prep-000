function getIt(){
  $("p").on("click", function(event){
    alert("Hey!");
  });
}

function frameIt(){
  $(document).on("load", function(event){
    $("img").addClass("tasty");
  });
}

function pressIt(){
  $(document).on("keydown", function(event){
    if (parseInt(event.which) === 71) {
      alert("g was pressed");
    }
  });
}

function submitIt(){
  $("form").on("submit", function(event){
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
