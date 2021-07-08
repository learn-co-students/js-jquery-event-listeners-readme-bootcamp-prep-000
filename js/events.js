//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});


// Bind a click event to the p tag, alert "Hey!".
function getIt(){
  $('p').on('click', function(){
    alert("Hey!")
  })
}

// Bind a load event that adds the class "tasty" to the image to add a red frame
function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

// Bind a keydown event to the input field of the form, alerts > G key pressed
function pressIt(){
  $('input').on('keydown', function(key){
    if (key.which === 71){
      alert("G was pressed!")
    }
  })
}

//Bind submit event to the form, alters > "your form is going to be submitted now."
function submitIt(){
  $('form').on("submit", function(){
    alert("Your form is going to be submitted now.")
  })
}
