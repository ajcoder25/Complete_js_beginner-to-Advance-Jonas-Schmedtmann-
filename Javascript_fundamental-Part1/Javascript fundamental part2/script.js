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
