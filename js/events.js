//define functions here

$(document).ready(function(){
});

  function getIt() {
    $('p').on("click", function () {
      alert("Hey!");
    })
  }
  function frameIt(){
    $("img").on("load", function(){
      $("img").addClass("tasty");
    });
  }

  function pressIt(){
    $("input").on("keydown", function(e){
      if (e.which==71){
        alert('G was pressed');
      }
    });
  }

function submitIt(){
  $("form").on("submit", function(){
      window.alert("Your form is going to be submitted now.");
      return;
  })
}


getIt();
frameIt();
pressIt();
submitIt();
