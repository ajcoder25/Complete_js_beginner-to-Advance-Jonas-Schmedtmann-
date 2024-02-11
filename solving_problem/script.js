//Q-1 

// user == 18 -- you are old enough to drive
//    user !=== 18 -- you are not old enough to drive
// user !=== 18 stating feeback you need these many year to turn 18 than you can drive


// const checkEligibility = prompt('Enter your age')

// if (checkEligibility >= 18) {
//     console.log('You are eligible to drive')
// }
// else if (checkEligibility <= 18) {
//     console.log(`Sorry for now you are not eligible to ride and you are ${18 - checkEligibility} years short to become eligible to ride `)
// }


// Q-2 
// who is older me or you

// const checkAge = prompt('Enter your age')

// if (checkAge >= 26) {
//     console.log(`You are ${checkAge - 26}  many years older than me`)
// }
// else if (checkAge <= 26) {
//     console.log(`you are ${26 - checkAge}  years younger than me `)
// }


// Q-3 
// a> b  return a> b
// else a is less than b




// if (a > b) {
//     return `${a} is greater than ${b}`
// }
// else {
//     return `${a} is less than ${b}`
// }

/// Creating it by using function

// function compareValue(a, b) {
//     if (a > b) {
//         return `${a} is greater than ${b}`
//     }
//     else {
//         return `${a} is less than ${b}`
//     }
// }


// let result = compareValue(3, 4);
// console.log(result);

//Trenary operator

// function checkvalue(a, b) {
//     return a > b ? 'a is greater than b' : 'a is less than b'
// }




// let result = checkvalue(4, 5)
// console.log(result)


// Q-3 

// const checkNumber = prompt('Enter the number')

// if (checkNumber % 2 === 0) {
//     console.log(`It's an even Number`)
// }
// else {
//     console.log(`it's an odd number`)
// }


//Exercise level 2 
//Q-1 

// const grade = prompt('Check your Grade')

// switch (grade) {
//     case 1:
//         (grade >= 80 && grade <= 100)
//         console.log('A grade')
//         break
//     case 2:
//         (grade >= 70 && grade <= 89)
//         console.log('B grade')
//         break;

//     case 4:
//         (grade >= 60 && grade <= 69)
//         console.log('C grade')
//         break;

//     case 5:
//         (grade >= 50 && grade <= 59)
//         console.log('D Grade')
//         break;

//     case 6:
//         (grade >= 0 && grade <= 49)
//         console.log('F Grade')
//         break;


//     default:
//         console.log('Invalid value')

// }

//Q-2 

// Autumn = september, october or november
//  winter = december, janurary, februrary
//  spring = March, April, May
// summer = june, july or August

// const checkSeason = prompt('Enter the Month');

// if (checkSeason === 'september' || checkSeason === 'october' || checkSeason === 'november') {
//     console.log("This is Autumn");
// } else if (checkSeason === 'december' || checkSeason === 'january' || checkSeason === 'february') {
//     console.log('This is winter season');
// } else if (checkSeason === 'march' || checkSeason === 'april' || checkSeason === 'may') {
//     console.log('This is spring season');
// } else if (checkSeason === 'june' || checkSeason === 'july' || checkSeason === 'august') {
//     console.log('This is summer season');
// } else {
//     console.log('Invalid input');
// }

// Q-3 

const checkday = prompt('Enter the day ')

if (checkday === 'saturday' || checkday === 'saturDay') {
    console.log(`${checkday} is a weekend`)
}
else if (checkday === 'Friday' || checkday === 'FriDay') {
    console.log(`${checkday} is a working day`)
}





