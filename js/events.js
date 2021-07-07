//define functions here

$(document).ready(function(){
  $('p').on('click', getIt);
  $('img').on('load', frameIt);
  $('form').on('submit', submitIt);
  pressIt()
});

function getIt() {
  alert('Hey!');
}

function frameIt() {
  $('img').addClass('tasty');
}

function pressIt() {
  $('#typing').on('keydown', function(key){
    if(key.which == 71) {
      alert('You pressed G!')
    }
  });
}

function submitIt() {
  alert("Your form is going to be submitted now.")
}