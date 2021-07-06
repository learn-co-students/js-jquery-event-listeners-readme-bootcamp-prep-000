//define functions here

$(document).ready(function(){

  getIt();
  frameIt();

});
function getIt(){
  $('p').on('click', function(e){
    alert("Hey!");
  });
}
function frameIt(){
  $('img').on("load", function(e){
    this.className = "tasty";
  });
}
function pressIt(){
  $('input').on('keydown',function(key){
    if (key.which === 71){
      alert('You pressed the g key!');
    }
  });
}
function submitIt(){
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
  });
}
