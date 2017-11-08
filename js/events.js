//define functions here
function getIt(){

  $('p').on('click',function(){

    alert("Hey!");
  });
}
function frameIt(){
  $(document).ready(function(){
$('img').addClass('tasty');

  });
}

function pressIt(){

  $('*').keydown(function(e){
if(e.which==71){
  alert('Wow');
}

  });
}
function submitIt(){
$('form').submit(function(e){
alert("Your form is going to be submitted now.");

});

}
$(document).ready(function(){

// call functions here
function getIt(){

  $('p').on('click',function(){

    alert("Hey!");
  });
}
function frameIt(){
  $(document).ready(function(){
$('img').addClass('tasty');

  });
}

function pressIt(){

  $('typing').keydown(function(e){
if(e.which==71){
  alert('Wow');
}

  });
}
function submitIt(){
$('typing').submit(function(e){
alert("Your form is going to be submitted now.");

});

}
});
