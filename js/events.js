//define functions here

$(document).ready(function(){

// call functions here
findChar();
getIt();
frameIt();
pressIt();
submitIt();

});
// This function will be able to identify the ASCII when keydown any char
function findChar(){
     $(document).on('keypress', function(key) {
     var char = key.which;
     var con = String.fromCharCode(char);
      //document.write(String.fromCharCode(con));
      //console.log(char +" "+ con.toUpperCase());
      console.log(char +" "+ con);
  });
}


function getIt(){
  $('p').on("click", function(){
      //action you want taken
      alert('Hey!');
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass("tasty");
  });
}

function pressIt(){
  $(document).on('keydown', function(key) {
    if (key.which == 71){
      alert('You have pressed the G key');
    }
  });
}


function submitIt(){
  $("form").on("submit", function() {
      alert('Your form is going to be submitted now.');
});
}
