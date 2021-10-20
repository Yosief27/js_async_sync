let calc=function(num1,num2,calctype){
    if (calctype==='add'){
        return num1+num2;
    }
    else  if (calctype==='mult'){
        return num1*num2;
    }
}
//modifing 
let add=function(a,b){
    return a+b;
}
let mult=function(a,b){
    return a*b;
}
// so the point is you create as much as you can any number of function then need to use this function (calc2 to call any ) to call it .

let calc2=function(num1,num2,type_calc){
    return type_calc(num1,num2);
}
console.log (calc2(3,4, mult));
//rather we can create annonomus function with out a name
console.log(calc2(5,2,function(a,b){return a-b;}));