//define functions here

$(document).ready(function(){

// call functions here
getIt();

});

function getIt(){
  $("p").on('click',function(){
    alert('Hey!');
  })
}

function frameIt() {
  $("img").on('load',function(){
    var element;
    element = $("img")
    element.addClass("tasty");
  })
}

function pressIt(){
  $("form").on('keydown', function(key){
    if (key.which == 71){
      alert("you hit g")
    }
  })
}

function submitIt(){
  $("form").on('submit', function(){
    alert("Your form is going to be submitted now.")
  })
}