let orig_price=[500,569,859,1000,698];
// let dis_price=[];


// for(price of orig_price){ 
//     dis_price.push(price*0.9)
// }
// console.log(orig_price)
// console.log(dis_price)

// orig_price.forEach((val)=>{
//     dis_price.push(val*0.9)
// })
// console.log(orig_price)
// console.log(dis_price)


// const disP2=orig_price.map((value)=>{
// return value*0.9
// })
// console.log(disP2)
// let stu=[
//     {
//         name:"shubah",
//         marks:86
//     },
//     {
//         name:"aran",
//         marks:88
//     },
//     {
//         name:"hvc",
//         marks:12
//     },
//     {
//         name:"spkx",
//         marks:98
//     },
//     {
//         name:"shubaguh",
//         marks:56
//     }
// ]
// console.log(stu[2])
// const fail_stu=stu.filter((val)=>val.marks>33)
// console.log(fail_stu)

const a=[500,569,859,1000,698];
let to=0
a.forEach((n)=>to+=n)
console.log(to)
const to_mar=a.reduce((n,a)=>n+a)
console.log(to_mar)