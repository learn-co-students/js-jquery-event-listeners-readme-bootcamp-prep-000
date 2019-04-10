//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
 return $('img').on('load', function() {
   $('img').addClass('tasty');
 }); 
}


$(document).ready(function(){
// call functions here
alert(frameIt);
});
