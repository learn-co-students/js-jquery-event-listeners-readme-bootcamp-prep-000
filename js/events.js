//define functions here

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});

var getIt = function(){
$('p').on("click", function(){
  alert ('hey!')
})
}

var frameIt = function(){
  $('img').on('load', function(key){
    var img = document.querySelector('img')
   img.className = 'tasty'
  })
}
var pressIt = function(){
  $('input').on('keydown', function(key){
    if (key.which == 71){
      alert('g was pressed')
    }
})
}
  
var submitIt = function(){
  $('form').on('submit', function(){
    alert ('Your form is going to be submitted now.')
  })
}