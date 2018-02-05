//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
};

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty');
  })
};

function pressIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
};

function submitIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
};


$(document).ready(function(){
  getIt();
  frameIt();

});
