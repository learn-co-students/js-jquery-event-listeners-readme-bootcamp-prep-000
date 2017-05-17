function getIt() {
  $('p').on('click',function() {
    alert('Hey!');
    return;
  })
}

function frameIt() {
  $('img').on('load',function() {
    $('img').attr('class','tasty');
    return;
  })
}

function pressIt() {
  $(document).on('keydown',function(key) {
    if(key.which === 71) {
      alert("'g' key pressed");
    }
    return;
  })
}

function submitIt() {
  const form = window.$('form')[0]
  window.$(form).on('submit', function() {
    alert('Your form is going to be submitted now.');
    return;
  });
}

$(document).ready(function(){
// call functions here
  getIt()
  frameIt()
  pressIt()
  submitIt()

});
