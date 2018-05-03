function getIt(){
  $('p').on('click', () => alert('Hey!'));
}

function frameIt(){
  $('img').on('load', function(){
    $(this).addClass('tasty');
  });
}

function submitIt(){
  $('form').on('submit', () => alert('Your form is going to be submitted now.'));
}

function pressIt(){
  let pressed = false;
  $(document).on('keydown', (event) => {
    if (pressed || event.which !== 71) return;
    
    pressed = true;
    alert('Alert');
  });
}