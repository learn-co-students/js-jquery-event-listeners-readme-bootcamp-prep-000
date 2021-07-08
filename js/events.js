//define functions here

function getIt(){
  $('p').on("click", function(){ // this binds a click event on p
    alert("Hey!"); // if the paragraph is click it alerts saying hey
  });
}

function frameIt(){
  $('img').on('load', function(){ // binds a load event to img and adds the tasty class
    $('img').addClass("tasty");
  });
}

function pressIt(){
  $(document).on('keydown', function(key){ // if g is pressed which the ascii key value is 71, it will alert you stating that you pressed G
    if (key.which === 71){
      alert("You have pressed G")
    }
  });
}

function submitIt(){
  $("form").on("submit", function(){ // this sets up a submit event 
    alert("Your form is going to be submitted now.");
    return;
  })
}

$(document).ready(function(){

// call functions here

});
