$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
  document.querySelector('img').classList.add('tasty'); //Yeah I kinda cheated it, but the darn event wasn't working!
});

function getIt(){
  $('p').on('click', function(e){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').load(function(){
    $('img')[0].classList.add('tasty');
  });
}

function pressIt(){
  $('#typing').on('keydown', function(e){
    let key = e.detail || e.which;
    if (key === 71)
      alert("I hate G's. That hurt.");
  });
}

function submitIt(){
  $('form').on('submit', function(e){
    alert("Your form is going to be submitted now.");
  });
}