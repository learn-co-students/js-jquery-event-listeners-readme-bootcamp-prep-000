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
    if(key.which === 71) {
      alert("You pressed the 'g' key");
    }
  })
}

function submitIt() {
  $('form').submit(function(e){
    alert("Your form is going to be submitted now.")
  })

}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt()

});
