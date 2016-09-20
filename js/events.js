//define functions here
function getIt()
{
  //binds click event to p tag alerting "Hey!"
  $(`p`).on(`click`, function(){
    alert("Hey!");
    return;
  });
}

function frameIt()
{
  //binds load adds tasty to image to add red frame
  $(`img`).on(`load`, function(){

    $(`img`).addClass("tasty");
  });
}

function pressIt()
{
  //bind keydown to input field when a user pressed g
  $(document).on(`keydown`, function(key){
    if(key.which === 71)
    {
      alert("You pressed the 'g' key!");
    }
    return;
  });
}


function submitIt()
{
  //binds submit to alert "Your form is going to be submitted now"
  $(`form`).on(`submit`, function()
  {
    alert("Your form is going to be submitted now.");
    return;
  });
}


$(document).ready(function()
{
// call functions here
window.getIt();
window.pressIt();
window.frameIt();
window.submitIt();
});
