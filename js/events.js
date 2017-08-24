//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
};

function frameIt() {
  $('img').on('load', function() {
    var tasty = $(this).addClass('tasty');
    tasty.css("border", "1px solid red");
  })
};

function pressIt() {
  $(document).on('keydown', function(key) {
    if(key.which == 71) {
      alert('G was pressed');
    }
  })
};

function submitIt() {
  $(document).on('submit', function() {
    alert("Your form is going to be submitted now.")
  })
};

$(document).ready(function(){
getIt;
frameIt;
pressIt;
submitIt;
// call functions here

});
