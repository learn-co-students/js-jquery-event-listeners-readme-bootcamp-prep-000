//define functions here
function getIt() {
  $('p').click(function() {
    return alert("Hey!")
  })
}

function frameIt() {
  $('img').load(function() {
    $('img').addClass("tasty");
  })
}

function submitIt() {
  $('form').submit(function() {
    return alert("Your form is going to be submitted now.")
  })
}

function pressIt() {
  $('input').keydown(function(key) {
    const keyInt = parseInt(key.which || key.detail)
    
    if (keyInt === 71) {
      return alert("Wow!  You pressed the 'g' Key!")
    }
  })
}

$(document).ready(function(){

// call functions here
pressIt();
frameIt()
submitIt()
pressIt()

});
