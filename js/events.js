//define functions here
function getIt () {
  $("p").on("click", function(){
  alert("Hey!");
}
)};

function frameIt(){
  $("img").on("load", function(){
$("img").addClass( " tasty" );
})
}

function pressIt(){
  $("input").on("keydown", function() {
    if (key.which == 103){
      alert('g was pressed');
  })
}


$(document).ready(function(){

getIt();
frameIt();
pressIt();

});
