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
  $('body form').on('keyup', event => {
    if (event.key === 'G') {
      alert('You have pressed the G key')
    };
  });
}

function submitIt() {
  $('body form').on('submit', event => {
    alert('Your form is going to be submitted now.')
  });
}

$(document).ready(ready => {
getIt();
frameIt();
pressIt();
submitIt()
// call functions here

});
