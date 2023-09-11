function findmaxnumber(numbers) {
    var max= numbers[0];
    for (var i=1;i<numbers.length;i++) {
        if(numbers[i]>max){
        max = numbers[i];
    }}
    return max;}
    var numbers =[10,5,8,15,3];
    var maxnumber =findmaxnumber(number);
    console.log("the maximum number is:"+ maxnumber);

