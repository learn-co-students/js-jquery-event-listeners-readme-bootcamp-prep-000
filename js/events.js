//define functions here

function getIt(){
  $('p').on('click', (e)=>{ alert('Hey!')});
}

function frameIt(){
  $('img').on('load', (e)=>{
    $('img').css('border', '10px red');
    $('img').attr('class', 'tasty')
  })
}

function pressIt(){
  $('input#typing').on('keydown', (e)=>{
    if(parseInt(e.which) === 71) alert('You are pressing G')
  })
}

function submitIt(){
  $('form').on('submit', (e)=>{ alert('Your form is going to be submitted now.')});
}

$(document).ready(function(){

// call functions here
  getIt();
  pressIt();

});
