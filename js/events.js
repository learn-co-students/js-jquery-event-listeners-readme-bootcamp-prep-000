//define functions here

function getIt () {
  $('p').click(function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').addClass("tasty");
}

function pressIt() {
  $('#typing').on('keydown', function(key) 
    {
    if(key.which == 71)
      {
      alert('G was pressed...FINALLY!');
      }
    }
  );
}

function submitIt() {
  $('form').submit(function() {
    alert('Your form is going to be submitted now.');
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});

