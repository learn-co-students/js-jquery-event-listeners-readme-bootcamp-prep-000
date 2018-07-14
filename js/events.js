//define functions here
function getIt(){
  $('p').on("click",function(){
    alert("Hey!");
  });
}

function frameIt(){
  $(document).on("load",function(){
    //adds the class "tasty" to the image to add a red frame to the image -- .addClass()
    $('img').addClass('tasty');
  });
}

function pressIt(){
  $('form input').on("keydown", function(key){
    if(key.which===71||key.which===103)  {
      alert('Youg pressed the letter G');
    }
  });
}

function submitIt(){
  $('form').on("submit", function(){
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){

// call functions here
frameIt();
});
