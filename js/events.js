//define functions here
function getIt () {
  $(document).on('click', function() {
    alert('Hey!')
    return
  })
}

function frameIt () {
  $('img').on('load', function() {
    $("img").addClass("tasty")
    return
  })
}

function pressIt () {
  $(document).on('keydown', function(key) {
    if (key.which == 71) {
    alert ('you have pressed the G key')  
    }
    return
  })
}  

function submitIt () {
  $('form').on('submit', function() {
    
    alert ('Your form is going to be submitted now.')  
    
    return
  })
}  

$(document).ready(function(){

// call functions here

});
