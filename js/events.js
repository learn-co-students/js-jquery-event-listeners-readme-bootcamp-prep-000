//define functions here

$(document).ready(function(){

// call functions here

getIt()
frameIt()
pressIt()
submitIt()

});

function getIt(){
  $('p').on('click',function(){alert('Hey!')})
}

function frameIt(){
  $('img').on('load',function(){$(this).addClass('tasty')})
}

function pressIt(){
  $('#typing').on('keypress',function(evt){
    console.log('evt='+evt+' and evt.which='+evt.which);
    if(evt.which===71){
      alert('G')
      }
    })
}

function submitIt(){
  $('form').on('submit',function(){alert('Your form is going to be submitted now.')})
}