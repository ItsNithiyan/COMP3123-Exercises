//Exercise 1
const greeter = (myArray, counter) => {
    const greetText = 'Hello ';
    
    for (const name of myArray) {
      console.log(`${greetText}${name}`);
    }
  };
  
  greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//Exercise 02
/*const capitalize = (str) => {
    const [first, ...rest] = str;
    return `${first.toUpperCase()}${rest.join('').toLowerCase()}`;
};

console.log(capitalize('fooBar')); // Output: Foobar
console.log(capitalize('nodeJs')); // Output: Nodejs

*/

//Exercise 3
/*const capitalize = (str) => {
    const [first, ...rest] = str;
    return `${first.toUpperCase()}${rest.join('').toLowerCase()}`;
};

const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors);

 */
//Exercise 4
/*const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20);

 /*
//Exercise 5
const array = [1, 2, 3, 4];

const calculateSum = array.reduce((sum, value) => sum + value, 0);
const calculateProduct = array.reduce((product, value) => product * value, 1);

console.log(calculateSum);
console.log(calculateProduct);
 /*




//Exercise 6
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());

 */