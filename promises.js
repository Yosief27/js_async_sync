
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
function loginUser(email,age){
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

function getUserVideo(email){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
        if(email==='josi@gail.com'){

        resolve(['video1','video2','video3'])
        }else{
            reject(new Error('Please check the user email!'));
        }
    })

    })
}
function getUserDetail(video){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
      if(video==='video1'){

      resolve({title:'the pilgrams way',pagen:200});
      }  else{
          reject(new Error('No video matching!'))
      }
    })

       
    })
}
/*
loginuser('josi@gmail.com',24).then(user=>
    getUservideo(user.useremail)).then((videos)=>getuserdetail(videos[0])       
   ).then(detail=>console.log(detail))

 */
//working with async and await
async function displayUser(){
    try{
            const user=await loginUser('josi@gmail.com',23);
    const videos=await getUserVideo(user.useremail);
    const detail=await getUserDetail(videos[0]);
    
    console.log(detail) ;
    console.log(videos);
    
    console.log(user);

    }catch(err){
        console.log(err.message);
    }
}
displayUser();
//async function return promises so we need to use the .then operation to access the data that it is returned from.
