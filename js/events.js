function getIt(){
  $('p').on("click",function(key){
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on("load",function(){
    $('img').addClass("tasty")
  })
}

function pressIt(){
  $("#typing").on("keydown", function(key){
    if(key.which === 71)
    {
      alert("The 'G' key was pressed!")
    }
  })
}

function submitIt(){
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.')
});
}
$(document).ready(function(){

pressIt()
submitIt()
frameIt()
getIt()


});
