
/*
what about if there is an error from the api or the database
how should we handle.
do we need extra function which runs on error 
i.e function loginuser(email,username,cb_success,cb_failure)
    loginuser(user.useremail,username,(cd_success)=>{
        console.log(video);
    },cd_failure=>{
        console.log('sorry');
    });
 
*//*
const username='dawit';
const promisef=new promise((resolve,reject)=>{
    if(username==='josi'){
        resolve({username:'josi test',books:['alkemisten','the way of a pilgrim']})
    }else{
        reject(new error('user does not have credential'));
    }
})
/*
promisef.then((user)=>{
    console.log(user);
}).catch((error)=>{
    console.log(error.message);
})
*/
console.log('start');
function loginuser(email,age){
    return new Promise((resolve,reject)=>{
        if(email==='josi@gmail.com') {
               setTimeout(()=>{
        console.log('now the call back function is done!')
        resolve({
            useremail:email,
            age:age,
        });
    },0);

        }else{
            reject( new error('please check username'));
        }

    }
    )
}

function getUservideo(email){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
        if(email==='josi@gmail.com'){

        resolve(['video1','video2','video3'])
        }
    })

    })
}
function getuserdetail(user1){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
      if(user1==='video1'){

      resolve({title:'the pilgrams way',pagen:200});
      }  
    })

       
    })
}
loginuser('josi@gmail.com',24).then(user=>
    getUservideo(user.useremail)).then((videos)=>getuserdetail(videos[0])       
   ).then(detail=>console.log(detail))
