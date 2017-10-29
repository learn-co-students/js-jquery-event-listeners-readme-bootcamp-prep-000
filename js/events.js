//define functions here
function getIt() {
  $('p').on('click',function (key) {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load',function () {
    $(this).addClass('tasty');
  })
}

function submitIt() {
  $('form').on('submit', function () {
    alert('Your form is going to be submitted now.');
  })
}

function pressIt() {
  $('body').on('keydown',function (key) {
    if (key.which === 71) {
      alert('Whats in the box??');
    }
  })
}
$(document).ready(function(){


});
