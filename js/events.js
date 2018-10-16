//define functions here

function getIt() {
  return $('p').on("click", function () {
    alert('Hey!')
  })
}

function frameIt() {
  return $('img').on('load', function () {
    //nothing regarding red frames, the class 'tasty' or anything involved with what comes in this function is anywhere in this lesson. 
  })
}

function pressIt() {
  return $('input').on('keydown', function(key) {
    if (key.which === 71) {
      alert()
    }
  })
}

function submitIt() {
  return $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});
