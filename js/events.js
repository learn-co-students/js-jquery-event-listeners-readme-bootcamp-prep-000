function getIt() {
  $('p').on('click', function () {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function (e) {
    $(e.currentTarget).addClass('tasty');
  });
}

function pressIt() {
  $(document).on('keydown', function (e) {
    const gKey = 71;
    if (parseInt(e.which) === gKey) {
      alert('g was pressed');
    }
  });
}

function submitIt() {
  $('form').on('submit', function () {
    alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
