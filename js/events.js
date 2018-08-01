//define functions here

$(document).ready(function(){
  $('p').on('click', getIt);
  $('input').on('submit', submitIt)
// call functions here

})

function getIt(){
    alert('Hey!');
}

function frameIt(){
  $('img').attr('class', 'tasty');
  $('.tasty').css('border', 'red');
}

function pressIt(){
  $('input#typing').on('keydown', function(key){
    if(key.which == 71){
      alert('You have pressed letter G.')
    }
  })
}

function submitIt(){
    alert("Your form is going to be submitted now.")
}