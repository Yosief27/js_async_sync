function add(x,y){
    return x + y;

}
function addfive(x,add){
    return add(x,5);
}

function addtwo(arr){
    const arr_return=[]
    arr.forEach((item)=>{arr_return.push(item+2)});
    return arr_return
}
function multtwo(arr){
    const arr_emp=[]
    arr.foreach((item)=>{arr_emp.push(item*2)});
    return arr_return
}
function multbytwo(item){
    return item *2; 
}
function addtwo(item){
    return item +2; 
}
function general_function(arr,instruction_function){
    const arr_return=[]
    arr.forEach((item)=>{arr_return.push(instruction_function(item))});
    return arr_return

}
console.log(general_function([1,2,3,4],multbytwo));