

// Question
const data2 = {
    Name: 'Jonas',
    bestFriend: ['Michael', 'Peter', 'Steven'],
    birthYear: 1997,

    ageCalc: function () {
        console.log(this);

    }
};

// Example usage:
console.log(data2.ageCalc());