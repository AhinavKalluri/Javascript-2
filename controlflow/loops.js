// for loops/ *********
// for (let index = 0; index < 10; index++) {
//     console.log(`hi`)
// }


// for (let i = 0; i<=10 ;i++) {
//     console.log(`${i}th Table :`)
//     for (let j = 1; j<=10;j++){
//         console.log(i+' * '+j+' = '+ i*j)
//     }
    
// }


// *******************************while and do while loop

// let i =0
//  while (i<=10) {
// console.log(`hi all`)
//     i =i+2
//  }
//  declaratio
// do {
    
// } while (condition);

// ********************************** for of loop******************************
//for of used for arrays
// let arr=[1,2,3,4,5,"abh"]
// for (const num of arr) {
//     console.log(num)
// }

//**********************************mapping(MAPS) */
// const map =new Map()
// map.set('91','ABHINAV')
// map.set('92','Koushik')
// for (const key of map) {            //it throws error near key follow below step(Array form)
//     console.log(key)
// }

// for (const [key,value] of map) {            //if we write like this it gives in form for key value pair
//     console.log(key,':-',value)
// }

// const myObject = {
//     'game1':'BGMI',
//     'game2':'FreeFire'
// }

// for (const [key,value] of myObject) {            //it doesnt work with object so we  have to use forin for objects
//     console.log(key,':-',value)
// }

// ************* for in loop

// const myObject = {
//     'game1':'BGMI',
//     'game2':'FreeFire',
//     'game3':'cod'
// }

// for (const key in myObject) {
//     console.log(`${myObject[key]}`)
// }

// ******************* for each*************//
// const coding = ["js","react","ruby","python"]
// coding.forEach(function(val){
//     console.log(val)
// })

//second type for eachfor arr

// function secType(val){
//     console.log(val);
// }

// coding.forEach(secType)

//for each doesnt return values so we dont use return option

// const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


// const filterd =num.filter((num)=> {
//     return num>4});
// console.log(filterd)
//using foreah
// const newNum = []
// num.forEach((num)=>{
//     if(num>4){
//         newNum.push(num)
//     }
// })
// console.log(newNum)

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   const ruledBooks = books.filter((bk)=>bk.edition === 2010)

//   console.log(ruledBooks)

//   const andCond =books.filter((bk)=>{
//     return bk.genre =='Non-Fiction' && bk.edition==2010
//   })
//   console.log(andCond)
// const num =[1,2,3,4,5,6,7,8,9]
// const newNum = num.map((num)=>num+10)
// console.log(newNum)

// const twoMaps = num
//                 .map((num)=>num*10)
//                 .map((num)=>num*10)
//                 .filter((num)=> num>=200)
//         console.log(twoMaps)
//************************** reduce Function */
//it is used in shopping cart s to callculte the sum
//ex -1
// const myNum = [1,2,3,4,5]


// const myTotal = myNum.reduce((acc,curVal)=>{
//     console.log(`acc:${acc}   cur:${curVal}`)
//     return acc+curVal 

// },0)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const Total = shoppingCart.reduce((acc,curr)=>{
    console.log(`acc:${acc} curr:${curr.price} `)
    return acc+curr.price
},0)

console.log(Total)