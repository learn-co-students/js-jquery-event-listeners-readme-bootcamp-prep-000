function getIt() {
  $('p').on('click', () => {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', () => {
    $('img').addClass('tasty').css('boarder', 'red');
  });
}
function pressIt() {
  $(document).on('keydown', (key) => {
    if (key.which == 71) {
      alert("You just pressed G!");
    }
  });
}
function submitIt() {
  $('form').on('submit', () => {
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});
