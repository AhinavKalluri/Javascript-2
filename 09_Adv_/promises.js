const promiseOne=new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("Async func executed");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise cosumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 fucniton")
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 Resolved')
})

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 3");
        resolve({userame:"Abhinv", Email:"Example@mail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Abhinav",password:"123"})
        }else{
            reject('ERROR! Something Went Wrong')
        }
    },1000)

})
promisefour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log('the promise is finally resolved or rejected');
})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false
        if(!error){
            resolve({username:"JAVA SCRIPT",password:"12333"})
        }
        else{
            reject("ERROR:JS went wrong")
        }
    },1000)

})

async function consumePromiseFive(){
   try {
     const response = await promiseFive
    console.log(response);
   } catch (error) {
        console.log(error)
   }
}
consumePromiseFive();

async function getAllUsers(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=   await response.json()
    console.log(data)
    }
    catch(error){
        console.log("E:",error)

    }

}
getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data) 
})
.catch((error)=>{
    console.log(error)
})