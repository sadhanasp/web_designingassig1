//creating an object using constructor function
function car(make ,model,year) {
    this.make =make;
    this.model =model;
    this.year =year;
}
//creating instances (objects) of the car class
const car1 =new car("toyota", "corolla", 2022);
const car2 =new car("honda", "civic", 2021);

//accessing object properties of car1 and car2
console.log(car1.make); //output: toyota
console.log(car1.model); //output: corolla
console.log(car1.year); //output: 2022

console.log(car2.make); //output :honda
console.log(car2.model); //output :civic
console.log(car2.year); //output :2021
