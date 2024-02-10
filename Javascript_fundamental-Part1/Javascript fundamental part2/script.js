//function


// function foodProcessor(apple, orange) {
//     console.log(apple, orange);

//     const juice = `Juice with ${apple} apples and ${orange} oranges`

//     return juice;
// }


// foodProcessor(5, 0);


// function foodProcessor(apple, orange) {

//     const juice = `This glass is made from ${apple} apples and ${orange} oranges`

//     return juice;
// }


// const finalJuice = foodProcessor(10, 1);

// console.log(finalJuice);


// const orangeJuice = foodProcessor(0, 10);
// console.log(orangeJuice);

// const appleJuice = foodProcessor(10, 0);
// console.log(appleJuice);


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

// function calcAge(birthYear) {
//     return 2024 - birthYear
// }

// const check = calcAge(1997)
// console.log(check);


// //////////////////////////////

// // function expression

// const checkAge = function (birthYear) {
//     return 2024 - birthYear
// }

// const age2 = checkAge(1995);
// console.log(age2);



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



// const checkChina = percentageOfWorld1(140)
// const checkIndia = percentageOfWorld1(142)
// const checkUsa = percentageOfWorld1(50)




// console.log(`China's ${checkChina} 2nd Highest`)
// console.log(` India's ${checkIndia} highest`)
// console.log(`Usa's ${checkUsa} 3rd highest`)


//function expression

// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100
// }


// const nowChina = percentageOfWorld2(140);
// const nowIndia = percentageOfWorld2(145);
// const nowUsa = percentageOfWorld2(150)


// console.log('China' + nowChina)
// console.log('India' + nowIndia)
// console.log('nowUsa' + nowUsa)

/////Arrow Function

// const calcAge3 = birthYeah => 2037 - birthYeah
// const age 3 = calcAge3(1991);




// const checkCode = hoursCode => 24 - hoursCode
// const howtoDefine = checkCode(5);
// console.log(howtoDefine);



///Arrow Function


// const yearsUntilRetirement = (birthyear, Name) => {
//     const age = 2037 - birthyear;
//     const retirement = 65 - age;
//     return `${Name} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, "Ajay"));


// const checkYourRetirement = (Name, years) => {

//     const age = 2037 - years
//     const retirmentAge = 65 - years
//     return `${Name} you are only left with these many ${retirmentAge} in service`

// }

// console.log(checkYourRetirement('Ajay', 1997))


// //Creating the Arrow Function


// const percentageOfWorld3 = (population) => {

//     return (population / 7900) * 100
// }


// const chinaPoP = percentageOfWorld1(1990);
// const indiaPop = percentageOfWorld3(1990)
// const UsaPop = percentageOfWorld3(1940)

// console.log('China:' + chinaPoP)
// console.log('India:' + indiaPop)
// console.log('UsaPop:' + UsaPop)


// ///////////////////////////////////////////////////

// // Function calling another function


// function multiplyByTwo(number) {
//     return number * 2;
// }

// function squareAndMultiply(value) {
//     const squared = value ** 2;
//     const result = multiplyByTwo(squared)
//     return result;
// }


// // calling SquareAnd Multiply function
// const finalResult = squareAndMultiply(5);

// console.log(finalResult);

///////////////////////////////

////////////////////////////////////
// Javascript function calling another function


// Step 1st

// function percentageOfWorld1(population) {
//     const pop = 7900
//     return (population / 7900) * 100
// }

// //step-2nd

// function describePopulation(country, population) {

//     const percentage = percentageOfWorld1(population)

//     const description = `${country} has ${population.toFixed(1)}  % million people, which is about 18.2% of the world`


//     return description;

// }

// console.log('China:', describePopulation('China', 440));
// console.log('India:', describePopulation('India', 445));
// console.log('USA:', describePopulation('USA', 400));





// function percentageOfWorld1(country, population) {
//     const calc = (population / 7900) * 100

//     console.log(`${country} has ${population} million people, which is about 18.2% of the world`)
//     return calc;



// }


// function describeCountry(country, population) {
//     const result = percentageOfWorld1(population)
//     return result;
// }

// console.log(describeCountry('India:', 10));




// ////////////////////////////////////////////////////////////////////

// //step 1st: Creating the arrow function

// const calcAverage = (a, b, c) => (a + b + c) / 3
// console.log(calcAverage(4, 5, 8));


// //Test-1

// let avgDolhins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// console.log(avgDolhins);
// console.log(avgKoalas);


// function checkWinner(avgDolhins, avgKoalas) {

//     if (avgDolhins >= 2 * avgKoalas) {

//         console.log(`${avgDolhins} vs ${avgKoalas} that's why Dolhin Win's`)


//     }

//     else if (avgKoalas >= 2 * avgDolhins) {


//         console.log(`${avgKoalas} vs ${avgDolhins} that's why koalas wins `)
//     }

//     else {
//         console.log('no! one wins')
//     }






// checkWinner(avgDolhins, avgKoalas)

// //Data 2

// avgDolhins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 3, 27);

// checkWinner(avgDolhins, avgKoalas);




///////////////////////////////////////////////////////





// const years = [1992, 1993, 1994, 1996]
// years[2] = 1998
// console.log(years);



// ///////////////
// function checkYourBirth(birth) {
//     return 2037 - birth;
// }


// const ageCheck = [1990, 1994, 1995, 1996, 1997];

// // We want to calculate for the

// const age1 = checkYourBirth(ageCheck[0]);
// const age3 = checkYourBirth(ageCheck[ageCheck.length - 1])

// const age4 = checkYourBirth(ageCheck[2]);
// console.log(age1, age3, age4);



// function checkYourDob = (birth){
//     return 2024 - birth
// }




// function percentageOfWorld1(population) {
//     const pop = 7900
//     return (population / 7900) * 100
// }


// const population = [10, 1441, 1554, 20, 30];

// const percentages = [

//     percentageOfWorld1(population[0]),
//     percentageOfWorld1(population[1]),
//     percentageOfWorld1(population[2]),
//     percentageOfWorld1(population[3]),
//     percentageOfWorld1(population[population.length - 1])

// ];


// console.log(percentages);





// function percentageOfWorld1(population) {
//     return (population / 7900) * 100
// }


// ///
// const population = [10, 140, 150, 160]

// const percentage = [
//     percentageOfWorld1(population[0]),
//     percentageOfWorld1(population[1]),
//     percentageOfWorld1(population[population.length - 1])
// ]

// console.log(percentage);


// /// Basic Array Method

// const friend = ['Ajay', 'books', 'Michael', 'Rain']

// friend.push('Pooja');
// console.log(friend);

// friend.unshift('P')
// console.log(friend);

// //Remove elements
// friend.pop();
// console.log(friend.indexOf('Michael'));
// console.log(friend.push('kumar'));
// console.log(friend.includes('kumar'))
// console.log(friend);



/////////////////////////////////////

// // Array Question
// const calcTip = function (bill) {
//     return bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }




// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;
// }


// const bills = [125, 555, 44]

// const tips = [
//     calcTip(bills[0]),
//     calcTip(bills[1]),
//     calcTip(bills[2]),


// ]

// console.log(bills, tips);



/////////////////////////////////////////////////////////


// const data = {
//     Name: 'AJay',
//     lastName: 'yadav',
//     age: 2024 - 1997,
// //     bestFriend: ['Books', 'podcast', 'family']
// // };


///Add the data in object

// data['email'] = 'ajay12676@gmail.com';
// data.location = 'Dehradun';



// when you try acess data using dot notion you will not be able to do whereas in bracket notation you can do it
// const checkData = prompt("What do you want to know about the Ajay")



// if (data[checkData]) {
//     console.log(data[checkData]);

// }
// else {
//     console.log('You should try to enter the correct value')
// }



//Challenge
//Jonas has 3 friend, and his best friend is called Michael

// const data2 = {
//     Name: 'Jonas',
//     bestFriend: ['Michael', 'Peter', 'steven']
// }


// console.log(`${data2.Name} has ${data2.bestFriend.length}, and his best friend is called ${data2.bestFriend[0]}`);

/////////////////Object Method
// const data2 = {
//     Name: 'Jonas',
//     bestFriend: ['Michael', 'Peter', 'Steven'],
//     birthYear: 1997,

//     ageCalc: function () {
//         console.log(this);
//         return 2024 - this.birthYear;
//     }
// };

// // Example usage:
// console.log(data2.ageCalc());



////////////////////////////////////////////////////////Object Method


//Challenges Jonas is a 46- years old teacher, and he has a driver's license

const jonas = {
    firstName: 'Jonas',
    age: 46,
    hasDriverLicense: true,


    calcAge: function (age) {
        const birthYear = 2024 - this.age;
        console.log(this.birthYear);

    },

    getSummmary: function () {
        return `${this.firstName} he is born in ${this.birthYear}, and he has a ${this.hasDriverLicense ? 'a' : 'b'} driver's license`
    }


};



jonas.getSummmary();



///Question
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Miller',
    mass: 92,
    height: 1.95,
    johnBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
console.log(mark.bmi);

john.johnBMI();
console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
}




/////////////////////loop 

for (let rep = 1; rep <= 10; rep++) {
    console.log(`2 * ${rep} = ${2 * rep} `)
}


// Looping Array

// const Ajay = [firstName = 'Yadav', DOB = '1997']

// for (let i = 1; i < 2; i++) {
//     console.log(Ajay[i]);
// }

// const years = [1991, 2007, 1969, 2020]
// const ages = [];

// for (let i = 0; i < years.length; i++) {

//     ages.push(2037 - years[i])
// }

// console.log(ages);


///////////////////////////////


const info = ['Ajay', 'yadav', 'lives in shivaji colony', 'Roorkee']

for (let i = info.length - 1; i >= 0; i--) {
    console.log(i, info[i]);
}

//////////loop inside the loop 


for (let exercise = 1; exercise < 10; exercise++) {
    console.log(`------------Starting exercise ${exercise}`);


    for (let rep = 1; rep < 5; rep++) {
        console.log(`Exercise ${exercise} Count ${rep}`)
    }
}

let count = 1;
while (count <= 10) {
    console.log(`While: lifiting weigths repetition ${count}`)
    count++;
}

let dice = Math.floor(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled dice with ${dice}`)
    Math.floor(Math.random() * 6) + 1;

    if (dice === 6) {
        console.log('It is going to over')
    }
}

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}





const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    const total = bills[i] + tip
    tips.push(tip);
    totals.push(total);
}



