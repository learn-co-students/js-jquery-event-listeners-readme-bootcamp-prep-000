//define functions here
function getIt(){
  $('p').click(function(){
    alert("Hey!")
  })
}

function frameIt(){
  $('img').load(function(){
    $('img').addClass("tasty")

  })
}

function pressIt(){
  $('#typing').keydown(function(event){
    if (event.which === 71){
      alert("G!")
    }
  })
}

function submitIt(){
  $('form').submit(function(event){
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
