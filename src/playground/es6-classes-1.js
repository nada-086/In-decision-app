class Person{
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return "Hi, I am " + this.name + '!';
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age); 
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let des = super.getDescription();
        if (this.hasMajor()) {
            des = des + ` Their major is ${this.major}`;
        }
        return des;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greet = super.getGreeting();
        if (this.homeLocation) {
            greet += ` I'm visiting from ${this.homeLocation}`;
        }
        return greet;
    }
}

const ne = new Person('Andrew Mead', 26);
console.log(ne.getGreeting());
console.log(ne.getDescription());


const student = new Student('Nada Essa', 21, 'CSE');
console.log(student.hasMajor());
console.log(student.getDescription());

const traveler = new Traveler("Andrew Mead", 26, 'Alexandria');
console.log(traveler.getGreeting());