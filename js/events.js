//define functions here
function getIt(){
$('p').on("click",function(){
  alert("Hey!");
});
}
function frameIt(){
  $('img').on("load",function(){
    $(this).addClass('tasty');
  })
}
function pressIt(){
  $('input').on('keydown',function(event){
    if(event.which===71){
      alert("you have pressed g");
    }
  });
}
function submitIt(){
  $("form").on("submit",function(){
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
