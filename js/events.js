//define functions here

$(document).ready(function(){

// call functions here

});

function getIt() {
  $('p').click('eventname');
  alert('Hey!');
}
  

function frameIt() {
  $('img').addClass('tasty', 'load');
  
}

function pressIt() {
  $('input').on('keydown', function(e){
    if(e.which == 71){
    alert();
    }
  });
}

function submitIt() {
  $('form').on('submit');
  alert("Your form is going to be submitted now.");
}