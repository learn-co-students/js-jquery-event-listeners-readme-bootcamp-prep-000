//define functions here
function getIt(){
  $('p').on('click', () =>{alert('Hey!'); return;});
}

function frameIt(){
  $('img').on('load', (e) => {$(e.currentTarget).addClass('tasty');});
} //if using an arrow function, cannot use $(this) so use target instead.

function pressIt(){
  $('#typing').on('keydown', (e) =>{
    e.which === 71 ? alert('Pressed G!') : null;
  });
}

function submitIt(){
  $('form').on('submit', () =>{
    alert('Your form is going to be submitted now.');
    return;
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
