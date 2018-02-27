//define functions here
//get it got it good
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  })
}

//we bumpin'
function frameIt() {
  $('img').on('load', function(){
    var img = document.querySelector('img');
    img.className = 'tasty';
    img.style.border = 'red';
  })
}

//sleigh bae
function pressIt() {
  $('form').on('keydown', function(key) {
    if (key.which === 71 ) {
      alert('You have pressed the G Thang!')
      return;
    }
  })
}

//submission complete
function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

  getIt();

  frameIt();
  
  pressIt();
  
  submitIt();
});
