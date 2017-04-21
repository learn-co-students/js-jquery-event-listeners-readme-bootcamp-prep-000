//define functions here
function getIt(){
  $('p').on('click', function (key){
    alert('"Hey!"');
  })
}

function frameIt(){
  $('img').on('load', function(key){
    
  })
}

function pressIt(){
  $("form").on('keydown', function(key) {
    if (key.which == 71){
      alert('You have entered g');
    }
    })
}

function submitIt(){
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
  })
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()

});
