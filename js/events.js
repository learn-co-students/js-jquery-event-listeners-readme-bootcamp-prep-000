//define functions here

var getIt = function(){
    $("p").on('click', function(){
      alert("Hey");
    })
}

var frameIt = function(){
    $("img").on('load', function(){
        $(this).addClass("tasty");
    })
}

var pressIt = function(){
    $("input[type='text']").on('keydown', function(key){
      if(key.which === 71)
        alert("Hey");
    })
}

var submitIt = function(){
    $("form").on('submit', function(){
      alert("Your form is going to be submitted now.");
    })
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submit();

});
