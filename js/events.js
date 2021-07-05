//define functions here
var getIt = function(){
  $('p').on("click", function(){
    alert("Hey!");
  });
};
getIt();
// $(document).ready(function(){

// call functions here

var frameIt = function(){
  $('img').on('load', function(){
    $('img').addClass("tasty");
    // border: 10px solid; border-color: red;
  });
};
frameIt();

var pressIt = function(){
  $(document).on('keydown', function(key){
    if(key.which == 71) {
      alert("You pressed G");
    }
  });
};
pressIt();

var submitIt = function(){
  $('form').on('submit',function(){
    // if ($("input:first").val() === "correct") {
      alert("Your form is going to be submitted now.");
      return;
    // }
    // alert("You entered the wrong value");
    // return;
  });
};
submitIt();
