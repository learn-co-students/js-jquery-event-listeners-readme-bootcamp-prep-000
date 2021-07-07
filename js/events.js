//define functions here
function getIt() {
  $('p').on("click", function(){
    alert("Hey!")
  });
}

function frameIt() {
  $("img").attr('class','tasty').attr('style','border:5px solid red').load(function(){
  });
  //$('yourimageselector').attr('src', 'newsrc').load(function()
}

function pressIt() {
  $("#typing").on('keydown',function(key) {
    if (key.which===71) {
      alert('You pressed the "g"!')
    }
  })
}

function submitIt() {
  $("form").submit(function() {  //or submit instead of on
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
