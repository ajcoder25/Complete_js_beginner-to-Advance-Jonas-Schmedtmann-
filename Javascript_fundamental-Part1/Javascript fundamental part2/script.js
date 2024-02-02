//function


// function foodProcessor(apple, orange) {
//     console.log(apple, orange);

//     const juice = `Juice with ${apple} apples and ${orange} oranges`

//     return juice;
// }


// foodProcessor(5, 0);


function foodProcessor(apple, orange) {

    const juice = `This glass is made from ${apple} apples and ${orange} oranges`

    return juice;
}


const finalJuice = foodProcessor(10, 1);

console.log(finalJuice);


const orangeJuice = foodProcessor(0, 10);
console.log(orangeJuice);

const appleJuice = foodProcessor(10, 0);
console.log(appleJuice);


///////////

// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.


// function describeCountry(country, population, capitalCity) {
//     let countryInfo = `${country} has ${population} millions and its capital city is ${capitalCity}`
//     return countryInfo;
// }

// const countryCheck = describeCountry("Finland", 6, "Helsinki")
// console.log(countryCheck);

// const countryIndia = describeCountry('India', 440, 'New-Delhi')
// console.log(countryIndia);

// const countryJapan = describeCountry('Japan', 90, 'Tokyo')
// console.log(countryJapan);


///////////

// Function declaration

function calcAge(birthYear) {
    return 2024 - birthYear
}

const check = calcAge(1997)
console.log(check);


//////////////////////////////

// function expression

const checkAge = function (birthYear) {
    return 2024 - birthYear
}

const age2 = checkAge(1995);
console.log(age2);



// ///Question on function declaration vs Expression


// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// }


///////////////////
//Solving through function declaration

// function percentageOfWorld1(population) {

//     return (population / 100) * 100
// }

// const popOfChina = percentageOfWorld1(140);
// const popOfIndia = percentageOfWorld1(141);
// const popOfUsa = percentageOfWorld1(70);


// console.log('Population China:' + 140 + '%')
// console.log('Population India:' + 141 + '%')
// console.log('Population of USA:' + 70 + '%')


// //Solving it through function expression


// const percentageOfWorld2 = function (population) {

//     return (7900 / population) * 100
// }


// const checkChina = percentageOfWorld2(140);
// const checkIndia = percentageOfWorld2(141)
// const checkUsa = percentageOfWorld2(70)


// console.log('China:' + checkChina + '%')
// console.log('India:' + checkIndia + '%')
// console.log('USA:' + checkUsa + '%')


// Doing it agian

//Function declaration

function percentageOfWorld1(population) {
    return (population / 7900) * 100
}


const checkChina = percentageOfWorld1(140)
const checkIndia = percentageOfWorld1(142)
const checkUsa = percentageOfWorld1(50)




console.log(`China's ${checkChina} 2nd Highest`)
console.log(` India's ${checkIndia} highest`)
console.log(`Usa's ${checkUsa} 3rd highest`)


//function expression

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100
}


const nowChina = percentageOfWorld2(140);
const nowIndia = percentageOfWorld2(145);
const nowUsa = percentageOfWorld2(150)


console.log('China' + nowChina)
console.log('India' + nowIndia)
console.log('nowUsa' + nowUsa)

/////Arrow Function

// const calcAge3 = birthYeah => 2037 - birthYeah
// const age 3 = calcAge3(1991);




// const checkCode = hoursCode => 24 - hoursCode
// const howtoDefine = checkCode(5);
// console.log(howtoDefine);



///Arrow Function


const yearsUntilRetirement = (birthyear, Name) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    return `${Name} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Ajay"));


const checkYourRetirement = (Name, years) => {

    const age = 2037 - years
    const retirmentAge = 65 - years
    return `${Name} you are only left with these many ${retirmentAge} in service`

}

console.log(checkYourRetirement('Ajay', 1997))


//Creating the Arrow Function


const percentageOfWorld3 = (population) => {

    return (population / 7900) * 100
}


const chinaPoP = percentageOfWorld1(1990);
const indiaPop = percentageOfWorld3(1990)
const UsaPop = percentageOfWorld3(1940)

console.log('China:' + chinaPoP)
console.log('India:' + indiaPop)
console.log('UsaPop:' + UsaPop)
