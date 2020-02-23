//define functions here

function getIt()
{
  $('p').on("click", function() {alert("Hey")});
}

function frameIt()
{
  let chrome_photo = window.$('img');
  var img = new Image();
    img.addEventListener('load', 
    function ()
    {
    chrome_photo[0].setAttribute("class", "tasty");
    },
    true);
  img.src = "https://s3.amazonaws.com/after-school-assets/minion-tongue.jpg";
  
}

function pressIt()
{
  $('form #typing').on('keydown',
  function(e)
    {
      if(e.key === 'G')
      {
        alert('You have pressed the "G" key');
      }
    }
  );
}

function submitIt()
{
  var test = $(':submit');
  console.log(test);
  console.log("hello");
}



$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
