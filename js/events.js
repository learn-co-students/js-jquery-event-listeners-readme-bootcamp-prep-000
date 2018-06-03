//define functions here

function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
    return;
  })
}

function frameIt() {
  $('img').on('load', function(e) {
    $('img').style.borderStyle = "solid";
    $('img').style.borderColor = "red";
    return;
  })
}

function pressIt() {
  $('input').on('keydown', function(e) {
    if (e.key === 'G') {
      alert("You have pressed the \'G\' key.");
      return;
    }
  })
}

function submitIt() {
  $('submit').on('submit', function() {
    alert("Your form is going to be submitted now.");
    return;
  })
}

$(document).ready(function(){

// call functions here

});
