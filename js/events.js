//define functions here
function getIt(){
  $('p').on('click', function(key) {
    alert('Hey!')
    })
}

function frameIt(){
  $('img:first').on('load', function(){
    $('img:first').addClass("tasty")
  })
}

function submitIt(){
  $("form").on('submit', function(){
    alert("Your form is going to be submitted now.")
  })
}

function pressIt(){
  $("form").on('keydown', function(key){
    if(key.which == 71){
      alert('g was pressed')
    }

  })
}


$(document).ready(function(){

// call functions here
getIt()
frameIt()
submitIt()
});
