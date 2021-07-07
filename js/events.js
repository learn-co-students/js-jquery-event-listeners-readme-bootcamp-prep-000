function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function() {
    var img = document.getElementsByTagName('img');
    for (var i = 0; i < img.length; i++) {
          img[i].className = "tasty";
    }
  })
}

function pressIt() {
  $('form').on('keydown', function(key) {
    if (key.which === 71) {
      alert('G!!!');
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
