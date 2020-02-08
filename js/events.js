//define functions here

function getIt(){
  alert("Hey!")
}

$('p').on("click", getIt());



function pressIt(){
  $("input").on("keydown", function(e){
    if (e.which === 71){
      window.alert("G was pressed.");
    }
  });
}

function frameIt(){
  $("img").on("load", function(){
    $("img").addClass("tasty");
  });
}


$(document).on('keydown', pressIt(key));

function submitIt(){
  alert('Your form is going to be submitted now.')
}

$("form").on("submit", submitIt());



/*
function getIt(){
  $("p").on("click", function(){
    window.alert("Hey!");
    });
  }
  
function frameIt(){
  $("img").on("load", function(){
    $("img").addClass("tasty");
  });
}

function pressIt(){
  $("input").on("keydown", function(e){
    if (e.which === 71){
      window.alert("G was pressed.");
    }
  });
}

function submitIt(){
  $("form").on("submit", function(){
    window.alert("Your form is going to be submitted now.");
  });
}
*/