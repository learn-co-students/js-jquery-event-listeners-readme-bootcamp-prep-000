//define functions here
function getIt() {
  $('p').on('click', event => {
    alert("Hey!");
    return
  });
}

function frameIt() {
  $('img').on('load', event => {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $(document).on("keydown", event => {
    if (event.key === "g") {
      alert('You have pressed the G key');
    };
  });
}

function submitIt() {
  $(document).on("submit", event => {
    alert('Your form is going to be submitted now.')
  });
}

$(document).ready(function() {
getIt();
frameIt();
pressIt();
submitIt()
// call functions here

});
