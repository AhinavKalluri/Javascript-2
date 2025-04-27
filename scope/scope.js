// if(true){
//     const a=10//by this we can see that const is used within the block
//     let b=20//by this we can see that let is used within the block
//     var c=30//var is global scopee
// }

// // console.log(a)
// // console.log(b)
// console.log(c)


//block scope

// function one(){
//     const us= "apple"

//     function two(){
//         const ap="banana"
//         console.log(us)
//         }
//         // console.log(ap) //it throws error because it with in two dunction only  
//     two()
// }
// one()


 // ************************ Arrow functions **************************

//  const user = {
//     username : "Ahinav",
//     price : 999,

//     welcome : function(){
//         console.log(`${this.username} welocme to the chat`)
//     }
   
//  }
//  user.welcome()
//  user.username = "honey"
//  user.welcome()

// const chai = function(){
//     let username = "abhinav"
//     console.log(username)
// }
                //Arrow function

// const chai = () =>{
//     let username = "abhinav"
//     console.log(this)
// }

// chai()


//  addTwo = (num1,num2)=>{ 
//     return num1+num2
//  }
//  console.log(addTwo(423,344))
            //implicit return

//  addTwo = (num1,num2)=> num1+num2

//  console.log(addTwo(423,344))

                //Arrays

   const myArray = [2,3,4,5,6,67,8,]
   
   myArray.forEach(()=>{
    console.log(myArray)
   })