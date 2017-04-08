function getIt(){
    $('p').on("click", function(){
      alert("Hey!")
    })
}

function frameIt(){
  minion = $('img')
  minion.on("load", function(){
    minion.addClass('tasty')
  })
}

function pressIt(){
  $('input').on("keydown", function(key){
    if (key.which == 71){
      alert('g was pressed')
    }
  })
}



function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}


$(document).ready(function(){

// call functions here
getIt()
frameIt()
});
