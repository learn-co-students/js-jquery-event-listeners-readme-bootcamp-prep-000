//define functions here

//bind click event to the p tag, alert "Hey!" when Paragraph clicked.
function getIt() {
$('p').on('click', function () {   
alert("Hey!")     
})
}


// binds load event that adds the class "tasty" to the image to add a red frame around it.
function frameIt() {
$('img').on('load',function() { 
  $('img').addClass("tasty");
})
}

function pressIt(key) {
  //binds an event that alerts the user when the G key was pressed down
  $('#typing').on('keydown', function(key) {
    if (key.which == 71) {
  alert("G key pressed");
    }
  })
}

function submitIt() {
  //binds an event that alerts "Your form is going to be submitted now." when the form is submitted
 $('form').on('submit', function() {
  alert("Your form is going to be submitted now.")
})
}

$(document).ready(function(){
  //call functions here
})
