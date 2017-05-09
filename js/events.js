//define functions here

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});

function getIt(){
  $('p').on('click', function(){
    alert("Hey!")});
}

function pressIt() {
  $('#typing').on('keydown', function(key){
        if(key.which == 71){
          alert('g was pressed');
        }
  })
}

function submitIt (){
    $('form').on('submit',function(){
       alert("Your form is going to be submitted now.")
      }
    )
}

function frameIt(){
    $('img').addClass("tasty");
}
