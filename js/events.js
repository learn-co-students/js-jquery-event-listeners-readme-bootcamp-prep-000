//define functions here
function getIt(){
  $("p").click(function(){
    alert('Hey!')
  })
}

function frameIt(){
  $(document).load(function(){
    $("img").addClass("tasty")
  })
}

function pressIt(){
  $("#typing").keydown(function(key){
    if(key.which == 71){
      alert('You have pressed down the "G" key!')
    }
  })
}

function submitIt(){
  $("form").submit(function(){
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){
// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});
