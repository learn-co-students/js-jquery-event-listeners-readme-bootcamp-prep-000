//define functions here
function getIt() {
  $('p').on('click', function(){ return alert('Hey!')});
}

function frameIt() {
  $(window).on('load', function() {
    $('img').addClass('tasty');
  }
);
}

function pressIt(){
  $('form > input#typing').on('keydown', (e)=> { if (e.which === 71) {
    alert('You pressed G!')
  }
}
);
}

function submitIt(){
  $('form').on('submit', ()=>alert("Your form is going to be submitted now."));
}
$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
