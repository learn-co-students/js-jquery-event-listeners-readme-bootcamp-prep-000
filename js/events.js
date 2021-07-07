function getIt(){
 return $('p').on('click', function() {alert("Hey!")});
}

// function frameIt(){
//   $('img').on('load',function() {
//     $('img').addClass('tasty')
//   })
// }

function frameIt() {
  $('img').addClass('tasty')
}

function pressIt(){
  $('form').on('keydown', function(key){
    console.log(key.which);
    if (key.which == 71) alert('G was pressed');
  })
}

function submitIt(){
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.');
  })
}


$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});
