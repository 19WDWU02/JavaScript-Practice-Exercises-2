$(document).ready(function(){

    $('.yourOption').click(function(){
        $('.yourOption').removeClass('win lose draw')
        var option = $(this);
        option.addClass('win');
        var myChoice = option.data('number');

        var compChoice =  Math.floor(Math.random() * 3) + 1;
        $('#compChoice').removeClass();
        if(compChoice === 1){
            $('#compChoice').addClass('fas fa-hand-rock fa-10x');
        } else if(compChoice === 2){
            $('#compChoice').addClass('fas fa-hand-paper fa-10x');
        } else if(compChoice === 3){
            $('#compChoice').addClass('fas fa-hand-scissors fa-10x');
        }

        if(myChoice === compChoice){
            option.addClass('draw');
            $('#compChoice').addClass('draw');
        } else if( (myChoice == 1) && (compChoice == 3) ){
            // I wins
            option.addClass('win');
            $('#compChoice').addClass('lose');
        } else if( (myChoice == 1) && (compChoice == 2) ){
            // Comp wins
            option.addClass('lose');
            $('#compChoice').addClass('win');
        } else if( (myChoice == 2) && (compChoice == 1) ){
            // I wins
            option.addClass('win');
            $('#compChoice').addClass('lose');
        } else if( (myChoice == 2) && (compChoice == 3) ){
            // Comp wins
            option.addClass('lose');
            $('#compChoice').addClass('win');
        } else if( (myChoice == 3) && (compChoice == 2) ){
            // I wins
            option.addClass('win');
            $('#compChoice').addClass('lose');
        }else if( (myChoice == 3) && (compChoice == 1) ){
            // Comp wins
            option.addClass('lose');
            $('#compChoice').addClass('win');
        }

        // // Simons ways :D
        // if(myChoice === compChoice){
        //     option.addClass('draw');
        //     $('#compChoice').addClass('draw');
        // } else if ((myChoice == 1 && compChoice == 3) || (myChoice == 2 && compChoice == 1) || (myChoice == 3 && compChoice == 2)) {
        //     // I win
        //     option.addClass('win');
        //     $('#compChoice').addClass('lose');
        // } else if ((myChoice == 1 && compChoice == 2) || (myChoice == 2 && compChoice == 3) || (myChoice == 3 && compChoice == 1)) {
        //     // Comp wins
        //     option.addClass('lose');
        //     $('#compChoice').addClass('win');
        // }








    })

});
