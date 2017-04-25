//define functions here
function getIt(){
  alert("Hey!")
}

function frameIt() {
  var img = document.querySelector('img')
  img.classList.add("tasty")
}

function pressIt() {
$(document).on('keydown', function(key){
  if(key.which == 71){
    alert('g was pressed')
  }
})
}

function submitIt(){
  alert("Your form is going to be submitted now.")
}

$(document).ready(function(){
// call functions here
$('p').on('click', function(){
  getIt()
})


// $(document).on('keydown', function(key)){
//   PressIt()
// })

$('form').on('submit', function(){
  submitIt()
})

$('img').on('load', function(){
  frameIt()
});

});
