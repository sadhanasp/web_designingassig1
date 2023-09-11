let nos = [ 1 ,2 ,3 ,4 ,5];
//shift method
console.log("the initial array is:", nos);
 let fno = nos.shift()
console.log("array after shift:", nos);
console.log("the no got shifted:", fno);
//unshift
nos.unshift(10);
console.log("array after unshift:", nos);
let nums =[1,2,3,4,5,];
nos.splice(4,1);
//console.log("array after splice  deletion:", nums);
nums.splice(5,0,6);
//indexno, no of elements to replace , element to insert
console,log("array after splice deletion:",nums);
