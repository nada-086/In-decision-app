const square = function (x) {
    return x * x;
};


// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;
console.log(squareArrow(8));

// Challenge
const getFirstName1 = (fullName) => fullName.split(' ')[0];

const name = 'Mike Smith';
console.log(getFirstName1(name));

const getFirstName2 = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstName2(name));