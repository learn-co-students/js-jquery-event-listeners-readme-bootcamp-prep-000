var getIt = function() {
    var getPara = $('p');
    getPara.on('click', function() {
        alert('Hey!');
    });
},

    frameIt = function() {
        var tastyImg = $('img');
        tastyImg.on('load', function() {
            tastyImg.addClass('tasty');
        });
    },

    submitIt = function() {
        var submitForm = $('form');
        submitForm.on('submit', function() {
            alert('Your form is going to be submitted now.');
        });
    },

    pressIt = function() {
        var input = $('#typing');
        input.on('keydown', function(e) {
            if (e.which === 71) {
                alert('You\'ve pressed the g key!');
            }
        });
    };

$(document).ready(function() {
    getIt();
    frameIt();
    submitIt();
    pressIt();
});
