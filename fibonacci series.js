function generatefibonacciseries(n) {
    var fibseries=[0,1];
    for(var i = 2;i < n ; i++) {
        fibseries[i]= fibseries[i-1] +fibseries[i-2];}
        return fibseries;}
        var count =10;
        var fibonacciseries = generatefibonacciseries(count);
        console.log("fibonacci series:");
         console.log(fibonacciseries);
