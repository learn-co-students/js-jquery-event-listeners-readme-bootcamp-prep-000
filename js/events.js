//define functions here
function getIt(){$('p').on('click', function(){alert("Hey!");})}
function frameIt(){$('img').on('load', function(){document.querySelector('img').classList.add('tasty');})}
function pressIt(){$('input').on('keydown', function(event){if(event.which==71){alert();}})}
function submitIt(){$('form').on('submit', function(){alert('Your form is going to be submitted now.');})}
$(document).ready(function(){

// call functions here

});
