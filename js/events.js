//define functions here
//Binds a clck event to the p tag. When the paragraph is clicked, you will be alerted
function getIt() {
  $('p').on("click",function() {
    alert("Hey!");
})
}

function pressIt() {
  $("form").on('keydown',function(key) {
    if (key.which == 71) {
      alert("G was pressed")
    }
  })
}

function submitIt() {
  $("form").on("submit", function() {
      alert("Your form is going to be submitted now.");
})
}

function frameIt() {
  $(document).on("load", function() {
 $("img").addClass("tasty")    
  })
}



//selects document and checks the state of readiness to be run because the code within this function will only run if the DOM is ready for the javascript code to run
$(document).ready(function(){

// call functions here
getIt()
pressIt()
submitIt()
frameIt()

});
