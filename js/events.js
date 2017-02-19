//define functions here

$(document).ready(function(){

// call functions here
$('h1').on("click", function(){
  //action you want to happen
});

$('img').on('load',function(){
//action you want to happen

});
//keypress
$(document).on('keypress',
function(key){
  if (key.which == 13){
    alert('enter was pressed');
  }
});

//keyup
$(document).on('keyup',
function(key){
  if (key.which==82){
    alert('r was pressed');
  }

});
//keydown$
$(document).on('keydown',
function(key){
  if(key.which==83){
    alert('s was pressed');
}

  });


});
