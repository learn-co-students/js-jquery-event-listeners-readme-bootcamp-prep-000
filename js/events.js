function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which===71) {
      alert("You entered letter G");
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
  });
}
/*$('p').on('click', getIt);
$('img').on('load', frameIt);
$('input').on('keydown', pressIt);
$('form').on('submit', submitIt);

function getIt() {
    alert("Hey!");
}

function frameIt() {
    $('img').append('<img class='tasty'/>');
}

function pressIt(key) {
    if(key.which===71) {
      alert("You entered letter G.");
    }
}


function submitIt() {
    alert("Your form is going to be submitted now.");
}

*/
$(document).ready(function(){

});
