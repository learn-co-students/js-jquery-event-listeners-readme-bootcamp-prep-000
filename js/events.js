/* Define a function `getIt` that does not accept a parameter. The function
should bind a `click` event to the `p` tag. When the paragraph is clicked, the
function should alert `"Hey!"`. */

var getIt = () => $('p').on('click', () => alert('Hey!') );

/* Define a function `frameIt` that does not accept a parameter. The function
should bind the `load` event that adds the class `tasty` to the image to add a
red frame to the image. */

var frameIt = () => $('img').load( () => {
  $('img').addClass('tasty');
});

/* Define a function `pressIt` that does not accept a parameter. The function
should bind a `keydown` event to the input field of the form that alerts a user
when they have pressed the `G` key. */

var pressIt = () => $('input').keydown( (key) => {if(key.which==71) alert("key G pressed")} );


/* Define a function `submitIt` that does not accept a parameter. The function
should bind a `submit` event to the form that alerts `"Your form is going to be
submitted now."`. */

var submitIt = () => $('form').submit( () => alert("Your form is going to be submitted now."));

$(document).ready(function(){

  getIt();
  frameIt();
  pressIt();
  submitIt();

});
