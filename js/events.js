function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  $('img').load(function () {
    $(this).addClass('tasty')
  })
}

function pressIt() {
  $('input#typing').keydown(function (e) {
    if (e.key == 'g' || e.which == 71) {
      console.log(e);
      alert("You have pressed the G key");
    }
  })
}

function submitIt() {
  $('form').submit(function (e) {
    e.preventDefault();
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function () {
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
