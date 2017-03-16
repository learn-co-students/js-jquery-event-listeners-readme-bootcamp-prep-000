//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});

function getIt()
{
  $('p').on("click", fun(){window.alert("Hey!")});
}

function frameIt()
{
  $('img').on('load', fun(){})
}

function pressIt()
{
  $('#typing').on('keydown', fun(key){
    if (key.which == 71 || key.which==103)
    alert("You have pressed g!")
  })
}

function submitIt()
{
  $('form').on('submit', fun(){alert("Your form is going to be submitted now.")})
}
