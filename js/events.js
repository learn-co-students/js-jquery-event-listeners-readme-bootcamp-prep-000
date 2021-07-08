//define functions here
function getIt(){
  $('p').on('click',function(){
    alert('Hey!');
    return
  })
}

function frameIt(){
  $('.tasty').on('load',function(){
    $('this').css('border',"solid 2px red");
    return
  })
}

function pressIt(){
  $('input:text').on('keydown',function(a){
    if (a.which === 71){
      alert('Have you pressed G key');
      return
    }
  })
}

function submitIt(){
  $('form').on('submit',function(){
    alert("Your form is going to be submitted now.");
    return
  })
}

$(document).ready(function(){
// call functions here
  getIt();
  $('img').addClass("tasty");
  frameIt();
  pressIt();
  submitIt();
});
