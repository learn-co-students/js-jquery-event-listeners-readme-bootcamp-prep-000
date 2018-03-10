function getIt () {
  $('p').on('click', function() {
    alert('Hey!')
  });
}

function frameIt() {
$('img').on('load', function(){
      .addCLass('tasty')
  });
}

function pressIt() {
$('img').on('keydown', function(key){
  if (key.which == 71){
      alert('Hey!')
    }
  });
}

function submitIt() {

}

$(document).ready(function(){

getIt()

frameIt()

pressIt()

});
