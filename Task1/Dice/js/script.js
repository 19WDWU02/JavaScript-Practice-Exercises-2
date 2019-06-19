$(document).ready(function(){

    $('#diceRoll').click(function(){
        console.log('the button has been clicked');
        var number1 = Math.floor(Math.random() * 6) + 1;
        var number2 = Math.floor(Math.random() * 6) + 1;
        var number3 = Math.floor(Math.random() * 6) + 1;
        var dice1ClassName = diceCalc(number1);
        var dice2ClassName = diceCalc(number2);
        var dice3ClassName = diceCalc(number3);
        $('#dice').removeClass().addClass('fas fa-10x '+dice1ClassName);
        $('#dice2').removeClass().addClass('fas fa-10x '+dice2ClassName);
        $('#dice3').removeClass().addClass('fas fa-10x '+dice3ClassName);
    })

    function diceCalc(number){
        if(number == 1){
            return 'fa-dice-one';
        } else if(number == 2){
            return 'fa-dice-two';
        } else if(number == 3){
            return 'fa-dice-three';
        } else if(number == 4){
            return 'fa-dice-four';
        } else if(number == 5){
            return 'fa-dice-five';
        } else if(number == 6){
            return 'fa-dice-six';
        }
    }

});
