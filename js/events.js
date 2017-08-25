function getIt(){
  $('p').on("click", function(){
    alert('hey');
  })
}

function frameIt () {
  $('img').on('load', function(){
    $('img').addClass('tasty');
});
}

function pressIt(){
  $(document).on('keydown', function(key) {
    if(key.which == 71){
        alert('G was pressed');
    }
  });
}

function submitIt(){
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
    return;
  }
)};


$(document).ready(function(){
// call functions here
});

// $('h1').on("eventname", function(){
//     //action you want taken
// });

// $("form").on("submit", function() {
//   if ($( "input:first" ).val() === "correct") {
//     alert('your form is going to be submitted now');
//     return;
//   }
//   alert("you entered the wrong value");
//   return;
// });
