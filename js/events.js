//define functions here
function getIt(){
  $('p').on('click', function(key){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').on('load', function(key){
    $('img').addClass("tasty")
  })
}

function pressIt(){
  $('input').on('keydown', function(key){
    if (key.which == 71) {
      alert('g was pressed')
    }
  })
}

function submitIt(){
  $('form').on("submit", function(key){
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here

});
