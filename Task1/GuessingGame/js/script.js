$(document).ready(function(){


    $('#guess').click(function(){
        var myGuess = parseInt($('#myGuess').val());
        if(!myGuess){
            $('#myGuess').addClass('is-invalid');
        } else {
            $('#myGuess').removeClass('is-invalid');
            var computerNumber = Math.floor(Math.random() * 10) + 1;
            if(computerNumber === myGuess){
                console.log('Well done you guessed the right number');
            } else {
                console.log('Shame, you didnt get the right number, guess again');
            }
        }
    });

});
