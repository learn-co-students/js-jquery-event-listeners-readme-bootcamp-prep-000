//define functions here

function getIt() {
  alert("Hey!")
}

function frameIt() {
  var img = document.getElementById('minion')
  img.className = "tasty"
}

function pressIt() {
   $('#typing').on('keydown', function(e) {
     // 'g' corresponds to 71
     if (e.which === 71) {
       alert("You pressed 'g'!")
     }
   })
 }

/*function pressIt(key) {
  if (key.keycode === 71) {
    alert('g was pressed')
    return
  } else if (key.which !== 71) {
    return
  }
}*/

function submitIt() {
  alert('Your form is going to be submitted now.')
}

$(document).ready(function(){

  // call functions here
  $('p').on("click",getIt())

  $('img').on("load",frameIt())
  $('form').on("keydown",pressIt())

  $('form').on("submit",submitIt())

});
