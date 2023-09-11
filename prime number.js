function isprime(number) {
    if (number <=1){
        return false;}
        for (var i=2;i<number;i++) {
            if(number %i==0){
                return false;}}
                return true;}
var num = 17;
var isnumprime = isprime(num);
console.log("is" + num +" a prime number?" + isnumprime);