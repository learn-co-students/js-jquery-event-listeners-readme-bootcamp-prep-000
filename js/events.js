//define functions here
function getIt()
{
    $('p').on('click', function () {
        alert('Hey!');
    })
}

function frameIt()
{
    $('img').on('load', function (e) {
        $('img').attr('class', 'tasty');
    })
}

function pressIt()
{
    $('input').on('keydown', function(e) {
        if (e.which == 71) {
            alert('d');
        }
    })
}

function submitIt()
{
    $('form').on('submit', function(e){
        e.preventDefault;
        alert("Your form is going to be submitted now.");
    })
}
$(document).ready(function(){

    // call functions here
    getIt();
    frameIt();
    pressIt();
    submitIt();
});
