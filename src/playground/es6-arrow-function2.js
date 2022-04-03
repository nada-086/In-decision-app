const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(56, 1));

// this keyword - no longer bound
const user = {
    name: 'Andrew',
    cities: ['Alexandria', 'Cairo', 'Fayoum'],
    printPlacesLived: function () {
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};

console.log(user.printPlacesLived());

// Challenge
const multiplier = {
    numbers: [1, 2, 3, 4, 5, 6, 7],
    multiplyBy: 3,
    multiply: function() {
        const array = this.numbers.map((num) => {
            return num * this.multiplyBy;
        });
        return array;
    }
}

console.log(multiplier.multiply());