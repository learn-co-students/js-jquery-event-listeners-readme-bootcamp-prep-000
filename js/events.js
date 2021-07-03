function getIt(){
  $("p").on("click", function(){
    alert("Hey!");
  })
}

function frameIt(){
  $(window).on("load", function(){
    $("img").addClass("tasty")
  })
}

function pressIt(){
  $("#typing").on("keydown", function(key){
    if(key.which == 71){
      alert("Hey!");
    }
  })
}

function submitIt(){
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
//
// $(document).ready(function(){
//   frameIt();
// });
//
// $(document).ready(function(){
//   pressIt();
// });
//
// $(document).ready(function(){
//   submitIt();
// });
