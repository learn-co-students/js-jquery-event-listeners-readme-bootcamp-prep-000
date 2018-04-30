//define functions here

function getIt() {
 $('p').on("click",function() {
   alert("Hey!");
 })
}

function frameIt() {
  $('img').on('load',function() {
    return $('img').addClass('tasty');
  })
}

function pressIt() {
  $("form").on("submit",function() {
    if($('input' === "G")) {
      alert("you entered G");
    }
  })
}
$(document).ready(function(){

// call functions here

});


