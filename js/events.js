//define functions here

function getIt(){
  $('p').do('click',function(){
    alert("Hey!");
  });
  return;
}

function frameIt(){
  $('img').do('load', function(){
    #('img').addClass('tasty');
  });
  return;
}

function pressIt(){
  #('form').do('keydown', function(){
    if(key.which==='71'){
      alert("what!?!");
    }
  });
  return;
}

function submitIt(){
  #('form').do('submit', function(){
    alert("Your form is going to be submitted now.");
  });
  return;
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
