//define functions here
function getIt() {
  $('p').on("click", function(){
    alert("Hey!");
    //return;
  });
}

function frameIt() {
  $('img').on('load', function() {
   //$('img').addClass( "tasty" );
    //This works, too: 
    document.getElementsByTagName('img')[0].className = "tasty";
    // This does not: $('img').className = "tasty";
    //return;
  });
}

function pressIt() {
  $("form").on("keydown", function() {
    
  });
}

$(document).ready(function(){
  console.log('jump1')
  frameIt();
  getIt();
  console.log('jump')
});
