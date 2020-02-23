//define functions here

function getIt()
{
  $('p').on("click", function() {alert("Hey!")});
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

  $('#typing').on('keydown',
  function(e)
    {
      if(e.which === 71)
      {
        return alert('You have pressed the "G" key');
      }
    }
  );
}

function submitIt()
{
  $('form').on('submit',
    function()
    {
      return alert('Your form is going to be submitted now.');
    }
  );
  
  
  /*
  const sub = window.$(':submit');
  console.log(sub[0]);
  sub[0].addEventListener('click', function () {alert("Your form is going to be submitted now.")});
  */
}



$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
