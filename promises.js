
/*
what about if there is an error from the api or the database
how should we handle.
do we need extra function which runs on error 
i.e function loginuser(email,username,cb_success,cb_failure)
    loginuser(user.userEmail,username,(cd_success)=>{
        console.log(video);
    },cd_failure=>{
        console.log('sorry');
    });
 
*/
const username='dawit';
const promiseF=new Promise((resolve,reject)=>{
    if(username==='josi'){
        resolve({username:'josi test',books:['alkemisten','the way of a pilgrim']})
    }else{
        reject(new Error('user does not have credential'));
    }
})

promiseF.then((user)=>{
    console.log(user);
}).catch((error)=>{
    console.log(error.message);
})