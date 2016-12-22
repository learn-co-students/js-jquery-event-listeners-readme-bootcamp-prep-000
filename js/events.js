//define functions here
function getIt() {
    $('p').on('click', function(){
        alert("Hey!");
    });
}

function frameIt() {
    $('img').on('load', function(){
        $(this).addClass('tasty');
    })
}

function pressIt() {
    $('#typing').on('keydown', function(e) {
        if(parseInt(e.which || e.detail) == 71) {
            alert('g key');
        }
    });
}

function submitIt() {
    $('form').on('submit', function(e){
        alert("Your form is going to be submitted now.");
    });
}
$(document).ready(function(){
    getIt();
    frameIt();
    pressIt();
});
