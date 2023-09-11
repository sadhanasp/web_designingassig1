//creating an object using object literal notation
const person = {
    firstname: "DHRUTHI",
    lastname:"M",
    age:18,
    occupation:"engineer",
    //method inside the object
    sayHELLO:function() {
        console.log('hello,my name is ${this.firstname} ${this.lastname}.I am ${this.age} years old.')
    },
};
//accessing object properties
console.log(person.firstname);//output:dhruthi
console.log(person.lastname);//output:m
console.log(person.age);//output:18
console.log(person.occupation);//output:engineer
//calling the method of object
person.sayHELLO(); //output: hello,my name is dhruthi.m .i am 18 years old.


