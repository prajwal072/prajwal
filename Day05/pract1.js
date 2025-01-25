console.log("hello world");

let a = 10;
let b = 20;

// console.log("a + b = ", a+b);
// console.log("a - b = ", a-b);
// console.log("a * b = ", a*b);
// console.log("a / b = ", a/b);
// console.log("4^4 = ", 4**4)

// const d = Math.pow(4,4)
// console.log("4^4 = ", d)

//km to miles
let km = 10;
let miles = km * 0.62137;
console.log(`${km} kg to miles is ${miles}`)

//degress to faerenhite
let degrees = 33;
let faharenhit = (degrees * 9/5) + 32;
console.log(`${degrees} degree celsius to faharenhit is ${faharenhit}`)

//kgs to pounds
let kg = 30;
let pounds = kg * 2.20462
console.log(`${kg} kg to pounds is ${pounds}`)


//BMI
let weight = 70;
let heightinM = 1.83;

const bmi = weight / Math.pow(heightinM, 2);

if(bmi < 18.5) {
    console.log(`You'r underweight, BMI score is ${bmi}`);
} else if(bmi > 18.5 && bmi < 24.9) {
    console.log(`You'r Normal weight, BMI is ${bmi}`);
} else if(bmi > 25 && bmi < 29.9) {
    console.log(`You'r Overweight, BMI score is ${bmi}`);
} else {
    console.log(`You'r Obese, BMI score is ${bmi}`)
}

//electricity bill
let input = prompt("Please enter electricity units: ")
let bill;
if(input <= 100) {
    bill = 0;
    alert("no charge")
} else if(input > 100) {
    bill = input * 5;
    alert("electricity bill is "+ bill)
} else {
    bill = input * 10;
    alert("electricity bill is "+ bill)
}