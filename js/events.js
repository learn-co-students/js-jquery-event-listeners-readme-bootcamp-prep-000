//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  });
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('input').on('keydown', function(e){
    let key = (e.which)

    if ( key === 71 ) {
      alert('You pressed a G!')
    }
  })
}

function submitIt() {
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
