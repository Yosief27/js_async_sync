function x(){
    console.log('this is the basic function');
}

function y(callback_function){
    console.log('this is the function with call the callback');
    callback_function();
}
//y(x);

console.log('start execution');

let callback=function(){
   console.log('hi from call back function');
}
setTimeout(
   callback
,5000);
console.log('end of execution');

