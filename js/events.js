function getIt(){
  $("p").on('click', function (e){
    alert ("Hey!");
    return;
  });
}

function frameIt(){
  $("img").on("load", function(e){
    $("img").addClass('tasty');
    $('img')[0].style.border = '3px solid red';
  });
}

function pressIt(){
  $('input').on("keydown", function (e){
    if (e.which === 71){
      alert("You pressed G");
      return;
    }
  });
}

function submitIt(){
  $("form").submit(function(event){
    alert("Your form is going to be submitted now.");
    event.preventDefault();
  });
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});
