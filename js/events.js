//define functions here
//learn open js-jquery-event-listeners-readme-bootcamp-prep-000

var getIt = () => {
  $('p').append("click");
  alert("Hey!");
}

var frameIt = () => {
  $('img').on('load' , function() {
    $("img").addClass("tasty");
  });
}

var pressIt = () => {
    $('form input:first-child').on('keydown' , function(e){
        var key = parseInt(e.detail || e.which);
        if(key === 71)
            alert('G was prest');
    });
}

var submitIt = () => {
  $("form").on("submit", function() {
      alert('Your form is going to be submitted now.');
      return;
    });
}

  $(document).ready(function(){

    frameIt();
    submitIt();
    //pressIt();
// call functions here

});
