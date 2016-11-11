//define functions here


// call functions here
function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
    //action you want taken
});
}
/*
function frameIt(){
  $('img)'.on('load', function(){
    $('img').addClass("tasty");
  });//close
*/

function submitIt(){
  $('form').on("submit", function(){
    alert("Your form is going to be submitted now.")
  })
}

function pressIt(){
  $('#typing').on("keydown", function(key){
    if(key.which == 71){
      alert('s was pressed');
  }
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}
