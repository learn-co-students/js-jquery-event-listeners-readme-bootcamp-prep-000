//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}

function pressIt(){
  $('#typing').on('keydown', function(k){
    // console.log(k.key);
    if (k.which === 71) {
      alert('You have entered "g" ')
    }
  })
}

function submitIt(){
  $('form').on('submit',function(){
    alert('Your form is going to be submitted now.')
    // debugger;
  })
}

$(document).ready(function(){
// call functions here

getIt();
frameIt();
pressIt();
submitIt();
});
