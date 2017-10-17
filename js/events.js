
//define functions here
 function getIt(){
 $('p').on("click", function(){
   alert("HEY")
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass("tasty")
  })
}

function pressIt(){
 $('#typing').on('keydown', function(theKey) {
    if(theKey.keyCode == 71){
        alert('g was pressed')
    }
  })
}

function submitIt(){
  $("form").on("submit", function() {
    if ($( "input:first" ).val() === "I love jQuery") {
      alert('your form is going to be submitted now')
     return;

    }
    $("div").html("Not valid!");
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
})
// call functions here
$('h1').on("eventname", function(){
    //action you want taken
});
$('img').on('load', function(){
  //actions you want to happen
}
  $(document).on('keypress', function(key) {
    if (key.which == 13){
      alert('enter was pressed');
    }
  });
$(document).on('keydown', function(key) {
  if(key.which == 83){
      alert('s was pressed');
  }
});
$("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});

