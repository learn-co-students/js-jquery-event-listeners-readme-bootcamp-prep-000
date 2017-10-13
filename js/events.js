//define functions here
function getIt() {
  // set up event handler to pay attention to p tag
  $( "p" ).click(function() {
    alert( "Hey!" );
  });
}

function frameIt(){
// bind the load event that adds the class tasty to the image to add a red frame to the image
   $("img").on('load', function() {
        $('img[src="https://s3.amazonaws.com/after-school-assets/minion-tongue.jpg"]').addClass('tasty');
        $(this).css('border', "solid 2px red");
    });
}

function pressIt(){
  //bind key down event to input on form, alert user if G is pressed
  $("input").on('keydown', function(key) {
  if(key.which == 71){
      alert('G was pressed');
  }
});
}

function submitIt(){
 //bind a submit event to the form that alerts the user with a message
 $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("Your form is going to be submitted now.");
  return;
});
}

$(document).ready(function(){

// call functions here



});
