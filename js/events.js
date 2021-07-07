function getIt() {
  $(`p`).click( () => {
    alert("Hey!");
  });
}

function frameIt() {
  let pic = $(`img`);
  pic.load( () => {
    pic.addClass("tasty");
  });
}

function pressIt() {
  $(`#typing`).keydown( (button) => {
    if (button.which == 71 || button.key === `G`) {
      alert("You pressed G!");
    }
  });
}

function submitIt() {
  $(`form`).submit( () => {
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});


