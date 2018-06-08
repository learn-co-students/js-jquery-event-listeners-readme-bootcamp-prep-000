//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();

});

/*
Define a function getIt that does not accept a parameter. The function should bind a 
click event to the p tag. When the paragraph is clicked, the function should alert "Hey!".
*/

function getIt()
{
  $('p').click(function(){
    alert("p has been clicked!");
  });
}

/*
Define a function frameIt that does not accept a parameter. The function should bind the 
load event that adds the class tasty to the image to add a red frame to the image.
*/

function frameIt()
{
  $('img').ready(function(){
    $('img').attr('class','tasty');
  });
}

/*
Define a function pressIt that does not accept a parameter. The function should bind a 
keydown event to the input field of the form that alerts a user when they have pressed 
the G key.
*/

function pressIt()
{
  $('#typing').keydown(function(keyPressed){
    if(keyPressed.which === 'g' || keyPressed.which === 'G')
    {
      alert("You have pressed g/G key!!");
    }
  });
  
}

/*
Define a function submitIt that does not accept a parameter. The function should bind a 
submit event to the form that alerts "Your form is going to be submitted now.".
*/