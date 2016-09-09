//define functions here
function getIt() {
  $('p').on('click', function(){
    alert("Hey!");
  })
}

//'load' event will not be called after ready() is run (will have already loaded)
function frameIt() {
  $('img').on('load',function(){
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('form').on('keydown', function(e) {
    if (71 === e.which) {
      alert('the -g- key has been compromised!!!');
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
  })
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
