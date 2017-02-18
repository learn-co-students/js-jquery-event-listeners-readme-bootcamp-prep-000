//define functions here
function getIt() {
  $('p').on('click', function(){ //creates event for click
    alert('Hey!'); //alert pops up when p is clicked
  })
};

function frameIt() {
  $('img').on('load', function(){ //creates load event
    $('img').addClass('tasty') //adds class after load
})
};

function pressIt() {
  $('input').on('keydown', function(key){
    if (key.which === 71){
      alert('G was pressed');
    }
  })
};

function submitIt() {
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){
  getit()
  frameIt()
  pressIt()
  submitIt()
});
