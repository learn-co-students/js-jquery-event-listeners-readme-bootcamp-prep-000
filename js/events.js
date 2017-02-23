//define functions here
function getIt(){
  $('p').on('click', ()=>{
    alert('Hey!');
  });
}

function frameIt(){
  $('img').on('load', ()=>{
    $('img').addClass("tasty");
  });
}

function pressIt(){
  $('#typing').on('keydown', (key)=>{
    if(key.which==71){
      alert('you pressed g!');
    }
  });
}

function submitIt(){
  $('form').on('submit',()=>{
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
// call functions here

});
