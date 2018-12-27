//define functions here
function getIt() {
  $('p').on('click', => {
    alert("Hey!")
  });
}

$(document).ready(function(){
getIt();
// call functions here

});
