function getIt() {
  alert('Hey!');
}

function frameIt() {
        $("img").addClass("tasty");
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.which === 71){
      alert("A G don't come for free");
    }
  });
}

function submitIt() {
  alert('Your form is going to be submitted now.');
}

$(document).ready(function(){

  $('p').click(function() {
    getIt();
  });

  $('img').on('load', function(){
    frameIt();
  });

  $("form").on("submit", function() {
      submitIt();
  });

});
