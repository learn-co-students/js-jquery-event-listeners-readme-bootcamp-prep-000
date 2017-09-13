//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function(e) {
    this.classList.add('tasty');
    // this.className = 'tasty';
    console.log(e)
  });
}

function pressIt() {
  $('input').on('keydown', function(e) {
    // let e = arguments[0];
    if ( parseInt(e.which) === 71 ) {
      alert("g was pressed");
    }
  });
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert("Your form is going to be submitted now.");
    e.preventDefault();
  })
}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
