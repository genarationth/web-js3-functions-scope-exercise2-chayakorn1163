// Exercise 2.1 expression function
const isEven = function (number) {
  return number % 2 === 0 ? "is even" : "is odd";
};
console.log(isEven(7));

// Exercise 2.2 arrow function
const isEvenArrow = (num) => (num % 2 === 0 ? "is even" : "is odd");
console.log(isEvenArrow(8));
