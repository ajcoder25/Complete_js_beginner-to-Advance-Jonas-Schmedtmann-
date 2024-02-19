'use strict';

// console.log(document.querySelector('.message').textContent);


//change text using DOM Manipulation


// document.querySelector('.message').textContent = '✔ correct Number!'


// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);



//handling of button


const secretNumber = Math.floor(Math.random() * 20) + 1;


let score = 20;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    console.log(guess);

    //Step- 1 condition for if there is no content in it

    if (!guess) {
        document.querySelector('.message').textContent = '♦ No Number'
    }

    // if guess number be equal to Secret number it will consider this is an you have guessed it correct
    else if (guess === secretNumber) {

        document.querySelector('.message').textContent = '🏆 Correct Number!'
        document.querySelector('.number').textContent = secretNumber;





        //Targetting the css 

        // when targetting css value should be string
        // targetting css -- it should be camelCase

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('number').style.width = '30 rem';


    }

    //When guess is too High

    else if (guess > secretNumber) {

        if (score > 1) {

            document.querySelector('.message').textContent = '💉 Too High!';

            score--;
            document.querySelector('.score').textContent = score;

        }
        else {
            document.querySelector('.message').textContent = 'You lost the game!'
            document.querySelector('.score').textContent = 0;

        }


    }
    // When guess is Too Low 
    else if (guess < secretNumber) {
        if (score > 1) {

            document.querySelector('.message').textContent = '🔪 Too Low !';

            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.score').textContent = 'You lost the game!'
        }


    }

    // Adding again feature in it 

    document.querySelector('.again').addEventListener('click', function () {

    })




});