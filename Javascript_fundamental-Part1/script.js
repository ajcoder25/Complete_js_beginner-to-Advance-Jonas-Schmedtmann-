


// // let country = "India"
// // let continent = "Asia"
// // let population = 400;



// // console.log(country);
// // console.log(continent);
// // console.log(population);





// // //////////////////////////////

// // let isIsland = false;
// // let population = 400;
// // let language;

// // console.log(typeof isIsland);
// // console.log(typeof population);
// // console.log(typeof language);



// // let firstName = "Ajay"


// // let currentYear = 2024;







// const checkBirth = 1998;

// let century;

// if (checkBirth <= 1995) {
//     century = 20;

// }
// // else {
// //     century = 21;

// // }


// // console.log(century);




// // if (mark)


// ///////////////

// // const DOB = 1997;

// // const result = (Number(DOB + 18));
// // console.log(result);


// // let n = '1' + 1
// // n = n - 1

// // console.log(n);




// // let b = '10' + 1;
// // b = b - 1
// // console.log(b);



// // Type conversion and coercion exercise

// console.log('9' - '5')
// //4

// console.log('19' - '13' + '17')
// //191317

// console.log('123' < 57);

// console.log(5 + 6 + '4' + 9 - 4 - 2)




// //Truthy and falsy Value

// // Falsy Value: 0,' '. undefined, null, NaN


// const money = 0;

// if (money) {
//     console.log('if it is true ')
// }
// else {
//     console.log('if it false'
//     )
// }


// // Equality operators

// //  loose -- ==
// //  strictly -- ===

// // != -- loosely
// // !=== --- Strictly

// // Equality Operators: == vs. ===


// // Q-1 Declare a variable numNeighbours based on a prompt input like this?

// // const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// // if (numNeighbours == 1) {
// //     console.log('Only 1 border!')
// // }
// // else if (numNeighbours > 1) {
// //     console.log('More than 1 border')
// // }
// // else {
// //     console.log('No border')
// // }


// // if (numNeighbours === 1) {
// //     console.log('only 1 border!')
// // }
// // else if (numNeighbours > 1) {
// //     console.log('More than 1 border')
// // }
// // else {
// //     console.log('no border')
// // }

// ////

// // Logical operator

// // const hasDriversLicense = true;
// // const hasGoodVision = true

// // console.log(hasDriversLicense && hasGoodVision)
// //True

// // && logical operator
// // True + True = True
// // True + False = False


// //  or(||)

// // True || True = True
// // True || false = True;

// const ajayHasLicense = true;
// const hasGoodVision = true;
// const isTired = false

// if (ajayHasLicense && hasGoodVision && !isTired) {
//     console.log('Your are eligible to drive')
// }
// else {
//     console.log('please fix the issue')
// }


// // if (ajayHasLicense || hasGoodVision) {
// //     console.log('Congrats!')
// // }
// // else {
// //     console.log('Try again')
// // }



// /*//CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable,
// and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.



// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
// */


// const Dolphins = (96 + 108 + 89) / 3
// const scoreDolphins = Dolphins
// console.log(scoreDolphins)

// const Koalas = (88 + 91 + 110) / 3;
// const scoreKoalas = Koalas

// console.log(scoreKoalas)


// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy")
// }
// else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy')
// }

// else if (scoreKoalas === scoreDolphins) {
//     console.log("BOth win the trophy")
// }

///////////////////////////////////////////////////

// Problem:- Sarah wants to less people < 50 and English Speaking

// let lang = 'Eng';
// let population = 49;
// if (lang === 'Eng' && population <= 50) {

//     console.log('Sarah Can Live it ')
// }

// else {
//     console.log("Doen't meet the criteria of sarah");

// }


const day = window.prompt("Enter your schedule for the day ")

if (day === 'Monday') {
    console.log('He structure the video ')
}
else if (day === 'tuesday') {
    console.log('He makes the plan how to do it ')
}

else if (day === 'wednesday' || day === 'thursday') {
    console.log('Both these two day he tried to learn new thing')
}

else {
    console.log('Remaining days he works but not consistently')
}

/////////////////////////////////////////////////////

// const  (expression){
//     case value1;
//     console.log('')
// }


// 



const bill = 500;
tip = (bill <= 300 && bill >= 50) ? bill * 0.15 : bill * 0.20







console.log(`Your bill was ${bill}, the tip was ${tip}, and the total value ${bill - tip}`)



// Q-2

population = 13;

population = (population >= 33) ? 'India population is more than that' : 'Below Average than that'

console.log(population);










