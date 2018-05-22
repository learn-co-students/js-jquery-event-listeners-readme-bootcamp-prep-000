$(document).ready(function(){

    getIt();
    frameIt();
    pressIt();
    submitIt();

});

function getIt(){
    $('p').on('click'), alert('Hey!');
}

function frameIt(){
    $('img').on('load').addClass('tasty');
    }

function pressIt(){
  $('#typing').on("keydown", function(event){
      if (event.which === 71){
      alert('G was pressed.');
   }
});
}

function submitIt(){
    $('form').on('submit'), alert("Your form is going to be submitted now.");
}
