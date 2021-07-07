//define functions here
function getIt() {
$(document).ready(function(){
  $('p').on('click', function(){
    alert("Hey!");
  });
});
}

function frameIt() {
$(document).ready(function(){ 
  $('img').on('load', function(){
   $("img").addClass("tasty");
  });
});  
}


function pressIt() {
$(document).ready(function(){ 
$('form').on('keydown', function(key){
  if(key.which == 71) {
    alert('g was pressed');
  }
});
});  
}


function submitIt() {
$(document).ready(function(){ 
$('form').on('submit', function() {
  alert('Your form is going to be submitted now.');
});  
}); 
}