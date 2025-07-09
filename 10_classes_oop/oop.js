// const user ={
//     username:"hitesh",
//     loginCount:8,
//     siginIn:true,

//     getUserDetails:function(){
//         console.log(this)
//     }

// }

// console.log(user.getUserDetails())


const user= function(username,logincount,isloggedin){
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin;

    // return this;
}

const unserOne=new user("abhinav",3,true)
const userTwo=new user('hitesh',5,false)
console.log(unserOne);
