//define functions here
function getIt() {
  $('p').on('click', function(key) {
    alert('Hey!');
})
}

function frameIt() {
  $('img').on('load', function(key) {
    return $('img').addClass('tasty')
})
}

function pressIt() {
  $('form').on('keydown', function(key) {
    if (key.which == 71){
     alert('G was pressed');
    }
})
}

function submitIt() {
  $('form').on('submit', function() {
      alert('Your form is going to be submitted now.');
      return;
  })
}



$(document).ready(function(){

// call functions here
return getIt();
return frameIt();
return pressIt();
return submitIt();

});
