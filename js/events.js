function getIt() {
  $('p').click(function() {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').load(function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').keydown(function(key){
    if (key.which == '71') {
      alert('"g" was pressed.')
    }
  })
}

function submitIt() {
  $('form').submit(function() {
    alert("Your form is going to be submitted now.")
  })
}
//____________________________

$(document).ready(function(){
// call functions here
return getIt();
return frameIt();
return pressIt();
return submitIt();
});
