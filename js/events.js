//define functions here

function getIt()
{
  $('p').on('click', alert('Hey!'));
}

function frameIt()
{
  $('img').on('load', function() {
    $('img')[0].className = 'tasty';
      })
}

function pressIt()
{
  $("#typing").on('keydown', function(e){
    if (e.which == 71)
    {
      alert('G');
    }
    
  })
}

function submitIt()
{
  $('form').on('submit', alert("Your form is going to be submitted now."));
}

$(document).ready(function(){

// call functions here

getIt();

frameIt();

pressIt();

submitIt();

});
