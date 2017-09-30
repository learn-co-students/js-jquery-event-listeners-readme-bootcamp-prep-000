//define functions here
$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});

var getIt = function(){
  $('p').on('click', function(event){
    alert('Hey')
  })
}

var frameIt = function(){
  $('img').on('load', function(event){
    $('img').addClass('tasty')
  })
}

var pressIt = function(){
  $(document).on('keydown', function(key){
    if (key.which == 71){
      alert('g was pressed')
    }
  })
}

var submitIt = function(){
  $(document).on('submit', function(){
    alert("Your form is going to be submitted now.")
  })
}
