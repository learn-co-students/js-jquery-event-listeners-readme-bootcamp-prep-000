//define functions here
// function getIt() {
//       $("p").on("click", function() {
//         alert("hey!");
//       };
//     }


function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $("input").on('keydown', function(key){
    if(key.which === 71) {
      alert("You pressed the g key");
    }
  });
}

function submitIt() {
  $("form").on('submit', function(){
    alert("Your form is going to be submitted now.");
  });
}

function getIt() {
  alert("hey");
}


$(document).ready(function(){

// call functions here
 $("p").on("click", getIt);
 frameIt();
});
