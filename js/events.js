//define functions here
function getIt(){
  $("p").click(function(){
    alert("Hey!");
  })
}

function frameIt(){
  $("img").load(function(){
    $(this).addClass("tasty");
  });
}

function pressIt(){
  $("input").keydown(function(event){
    if(event.which === 71){
      alert("You pressed G.");
    }
  });
}

function submitIt(){
  $("form").submit(function(){
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){

// call functions here
  // getIt();
});
