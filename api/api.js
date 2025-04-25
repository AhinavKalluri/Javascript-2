// // {
// //     //this is aclled json(api) same ass object
// //     //but the keys should be in string
// // }

// // [
// //     {},
// //     {}, //it can be written like tis also
    
// // ]


// //functions

// function sayMyName(){
//     console.log("A")
//     console.log("b")
//     console.log("h")
//     console.log("i")
// }
// sayMyName()

// function add(num1,num2){
//     let result=num1+num2;
//     return result
// }
// const result = add(1209,34)
// console.log("result:",result)

// function loginDetails(username){
//     return `${username} Just Logged in`

// }
// console.log((loginDetails("Abhinav")))

//rest or spread opreator
//when we(...) use it it return an array of items
// function caluclatCartPrice(...item1){
//     return item1

// }
// console.log(caluclatCartPrice(2,20,30))

const user = {
    username : "abhinav",
    price : 2000
}

function handelobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`) //here usernae is asigned to anyobject so we have to use anyobject in ${}
}

handelobject(user)

const mynewArray = [200,300,400,500]

function getSecondOne(getArray){

    return getArray[1]

}
 console.log(getSecondOne(mynewArray))
 