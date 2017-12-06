function getIt() {
  $('p').on('click', function(){
    alert("Hey!");
  })
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass("tasty");
  })
}

function pressIt() {
  $('input').on('keydown', function(key){
    if(key.which === 70) {
      console.log("You pressed the 'g' key");
    }
  })
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();

});
