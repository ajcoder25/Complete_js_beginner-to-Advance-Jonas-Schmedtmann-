
// strict Mode

'use strict';

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


//////////

Function

foodProcessor(5, 5) /// The value we put in the function we call it an argument

////

Imp: in function declaration you can call the function before you define it and whereas you can't call the before definiing it 
   in function expression





   ////Function calling in another function 

   Certainly! Let's break down the steps to solve this question:

1. **Define the percentageOfWorld1 Function:**
   - Create a function called `percentageOfWorld1` that takes a population as an argument and calculates the percentage of that population compared to the world population.

     ```javascript
     function percentageOfWorld1(population) {
         // Calculate the percentage
         const worldPopulation = 7900; // assuming a world population of 7.9 billion
         return (population / worldPopulation) * 100;
     }
     ```

2. **Define the describePopulation Function:**
   - Create a function called `describePopulation` that takes two arguments: `country` and `population`. Inside this function, call the `percentageOfWorld1` function and use its result to build the description string.

     ```javascript



     function describePopulation(country, population) {
         // Call percentageOfWorld1 and store the result
         const percentage = percentageOfWorld1(population);

         // Build the description string
         const description = `${country} has ${population} million people, which is about ${percentage.toFixed(1)}% of the world.`;

         // Return the description
         return description;
     }
     ```

3. **Call describePopulation for 3 Countries:**
   - Call the `describePopulation` function with data for three countries of your choice. Provide the country name and its population.

     ```javascript
     console.log(describePopulation('China', 1441));  // Example output: China has 1441 million people, which is about 18.3% of the world.
     console.log(describePopulation('India', 1393));  // Example output: India has 1393 million people, which is about 17.6% of the world.
     console.log(describePopulation('USA', 331));     // Example output: USA has 331 million people, which is about 4.2% of the world.
     ```

4. **Understanding the Approach:**
   - The `percentageOfWorld1` function calculates the percentage of a country's population compared to the assumed world population.
   - The `describePopulation` function calls `percentageOfWorld1` and uses its result to construct a description string for the given country and population.
   - The example calls demonstrate how to use these functions for different countries.

By following these steps, you'll have a function that can describe the population of a country based on the percentage of the world population it represents.



/////////////////////////////////////
Function part 1


Step 1st 

const calcAverage = (a,b,c) =>(a+b+c)/3;
console.log(calcAverage(3,4,5));


//Test 1

const scoreDolhins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);


const checkwinner = function(avgDolhins,avgKoalas){
   if(avgDolhins>=2* avgKoalas){
      console.log(`Dolhins win (${avgDolhins}) vs  ${avgKoalas}`);

  
}