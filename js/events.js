//define functions here
var getIt = () => {
  $('p').on('click', () => {
    alert("Hey!");
  });
}

var frameIt = () => {
  $('img').on('load', () => {
    $('img').addClass('tasty');
  });
}

var pressIt = () => {
  $('form input').on('keydown', (key) => {
    if (key.which === 71) {
      alert('g was pressed');
    }
  });
}

var submitIt = () => {
  $('form').on('submit', () => {
    alert('Your form is going to be submitted now.')
  });
}
$(document).ready(function(){

  // call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
