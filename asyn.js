console.log('start');
function loginUser(email,name,callback){
    setTimeout(()=>{
        console.log('now the call back function is done!')
        callback({
            userEmail:email,
            name:name
        })
    },0);


}
/*const user=loginUser('josiyoniug@gmial.com','josi');
console.log(user);
console.log('end');
*/

/*
the out put will be 
start 
undefined
end
now the call ball back function is done!
''''''''
but the point is we need the data for the user to be displayed but due to the execution of the js ,we get data but it is too late,even with zero time as the setTimeout function pass the call back function to the webapi to control the execution

*/
const asynWay = loginUser('josi@gmail.com','josi',done);
function done(user){
    console.log(user)
}