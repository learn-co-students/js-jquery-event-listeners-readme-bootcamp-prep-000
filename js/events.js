//define functions here

function getIt(){
  return $('p').on('click', alert('Hey!'));
}

function frameIt(){
  return $('img').on('load', function (){
     $('img').addClass('tasty');
  });
}

function pressIt(){
  return $('#typing').on('keydown', function (l){
    if(l.which == 71){
      alert('G was pressed');
    }
  })
}

function submitIt(){
  return $('form input:last').on('submit', alert("Your form is going to be submitted now."));
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
