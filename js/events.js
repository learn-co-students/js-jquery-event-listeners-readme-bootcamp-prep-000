function getIt() {
  alert("Hey!")
}

function frameIt() {
 $("img").addClass("tasty");
  'img'.class ='tasty'
}

function pressIt() {
   if ($('input') == 'G') {
    alert('You pressed a G key')
    return
  }
  else {
    return
  }


}
function submitIt() {
  alert("Your form is going to be submitted now.")
  return
}

$(document).ready(function(){

  $('p').on('click',getIt())

  $('img').on('load', frameIt())

  $("input").on('keydown', pressIt())


  $("form").on("submit", submitIt())

});
