function getIt()
{
  $('p').on('click',function(){alert('hey')})
}

function frameIt()
{
$('img').on('load', function(){
  var a = $('img')
  a.addClass("tasty")
})
}

function pressIt()
{
  $('#typing').on('keydown', function(e) {
    if (e.which === 71) {
        alert("you pressed G")
      }

  })
}

function submitIt()
{
  $('form').on('submit',function() {alert('Your form is going to be submitted now.')})
}


$(document).ready(function(){

// call functions here

});
