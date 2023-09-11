//creating a nested object representing a person  
const person ={
    firstname:"john",
    lastname:"doe",
    age:30,
    address: {
        street:" 123 main street",
city:"new york",
state: "NY",
zipcode:"10001"
    },
    occupation:"engineer"
};
//accessing properties of the main object
console.log(person.firstname); //output:john 
console.log(person.lastname); //output:doe
console.log(person.age); //output:30
console.log(person.occupation); //output:engineer 

//accessing properties of the nested object
console.log(person.address.street); //output:12
console.log(person.address.city); //output:NEW YORK
console.log(person.address.state); //output:NY
console.log(person.address.zipcode); //output:10001



