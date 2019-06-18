//define functions here
function getIt() {
  $('p').on('click', function(key){
    if(key){
    alert("Hey!");
    return;
    }
    })
}

function frameIt() {
  $('img').on('load', function() {
      $('img').addClass('tasty');
    })
}

function pressIt(){
  $('input').on('keydown', function(key) {
    if(key.which === 71){
      alert('G was pressed');
      return;
    }
  })
}

function submitIt() {$('form').on('submit', function(){
  alert('Your form is going to be submitted now.');
})
}

$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
// call functions here

});
