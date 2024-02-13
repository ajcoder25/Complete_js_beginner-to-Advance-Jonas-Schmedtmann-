// Q-1


// create an empty array


const ajay = []
console.log(ajay)


//Q-2 


const newArray = [1, 2, 3, 4, 5]
console.log(newArray.length)


const firstElement = newArray[0]
console.log('FirstElement:', firstElement)


const lastElement = newArray[newArray.length - 1]

console.log('Last Element:', lastElement)


//middle item

const middleElement = newArray[(newArray.length - 1) / 2]

console.log("middle Element:", middleElement);



//Q-5 

const mixedDataType = ['Ajay', 'Yadav', 1, 2, 3, 5, 6, 10, true]


console.log(mixedDataType);


//Q-6 
const itcompanies = ['facebook', 'google', 'microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// console.log(itcompanies);
// console.log(itcompanies.length);

// const firstCompany = itcompanies[0]

// console.log("first company:", firstCompany);

// const middleCompany = itcompanies[(itcompanies.length - 1) / 2]
// console.log("middle Company:", middleCompany);

// const lastCompany = itcompanies[itcompanies.length - 1]
// console.log('last company:', lastCompany);


// //printing the company

// console.log(itcompanies[0])
// console.log(itcompanies[1]);
// console.log(itcompanies[2]);
// console.log(itcompanies[3]);


/////////// to change in uppercase 

// for (let i = 0; i < itcompanies.length; i++) {
//     let changeToUppercase = itcompanies[i].toUpperCase()
//     console.log(changeToUppercase);
// }


// //Q-12 
// const sentence = itcompanies.slice(0, -1).join(', ') + ' and ' + itcompanies.slice(-1);
// const finalSentance = sentence + ' are big IT companies'
// console.log(finalSentance);


/////// Q-13

const value = prompt("check the comapany")
let found = false;


const lowerCaseValue = value.toLowerCase();

for (let i = 0; i < itcompanies.length; i++) {
    if (itcompanies[i].toLowerCase() === lowerCaseValue) {
        found = true;

        break;

    }

}
if (found) {
    console.log(`${value} this company is there`)
}
else {
    console.log(`${value} not found `)
}

