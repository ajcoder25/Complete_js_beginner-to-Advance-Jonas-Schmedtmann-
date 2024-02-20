// Getting Element by tag name -- getElementsByClassName() method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements.

// syntax

// const allTitle = document.getElementsByTagName('h1')

// console.log(allTitle.length);



//--- we can use the length property to use to print it like array

// for (let i = 0; i < allTitle.length; i++) {
//     console.log(allTitle[i]);
// }


//Getting an element by id

//syntax
// document.getElementById('id')


// let titleId = document.getElementById('first-title')
// console.log(titleId);


//The getElementById function is used to select an element by its id attribute, and you don't need to include the # symbol when passing the id as an argument.



///Getting elements by using querySelector methods
// 1. when you try to use document.queryselector by tag name, you will only get the very first of tagname not all


// let boss = document.querySelector('h1')
// console.log(boss)

// let titleId = document.querySelector('#second-title')
// console.log(titleId)



//classname

// let checkClass = document.querySelector('.title')
// console.log(checkClass);

//querySelectorAll

const allTitle = document.querySelectorAll('h1')
console.log(allTitle);

for (let i = 0; i < allTitle.length; i++) {
    console.log(allTitle[i]);
}


// How to add an attribute 

let changeIt = document.querySelectorAll('h1')
changeIt[2].setAttribute('class', 'newClass')

for (let i = 0; i < changeIt.length; i++) {
    console.log(changeIt[2]);
}

changeIt[2].id = 'newId'
console.log(changeIt)


//Adding class using classList 

titles[3].class