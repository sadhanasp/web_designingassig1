function greet(name) {
    console.log(" HELLO ,"+ name+"!");
}
function 
sayHellowithDelayNode(callback) {
    settimeout(function() {
        callback("john");
    },2000);
}
sayhellowithdelay(greet);//
