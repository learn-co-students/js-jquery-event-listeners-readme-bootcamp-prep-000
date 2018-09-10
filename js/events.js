//define functions here

$(document).ready(function(){});

function getIt() {
  $('p').on('click', function(key) {
    if (key) {
    
    alert("Hey!")}
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').attr('<img src="img" class="tasty" border-color="red" />')
  })
}


