let prod =["Subh",56899 ,"Btech",551,"Raaaa","Hello"]
// let prod ={
//     name:"Subh",
//     sall:56899,
//     course:"Btech",
//     551:"Raaaa",
//     'Sub':"Hello",
//     p_name:function(){
//          console.log("Hello")
//         console.log(this.name)
       
        
//     },
//     print_dis(){
//         console.log("10%")
//     }
// }
// prod.print_dis()
// prod.p_name()
// console.log(prod.name)
// console.log(prod.sall)
// console.log(prod.course)
// console.log(prod)
// console.log(prod.Sub)
// console.log(prod["name"])
// console.log(prod["hello"])
// console.log(prod["sub"])
// console.log(prod['sub'])
// console.log(prod.Sub)

// for(value of prod){
//     console.log(value)
// }
// prod.forEach(function(value,index){
//     console.log(value,index)
//     console.log(index,value)
// })


// Callback function 

// function a(){
//     console.log("a")
// }
// function b(fun){
   
//     // console.log(fun)
//     console.log("b")
//      fun()
// }
// b(function a(){
//     console.log("a")
// })

// for(value in prod){
//     console.log(value)
// }
let prod1 ={
    name:"Subh",
    sall:56899,
    course:"Btech",
    551:"Raaaa",
    'Sub':"Hello",
    p_name:function(){
         console.log("Hello")
        console.log(this.name)
       
        
    },
    print_dis(){
        console.log("10%")
    }
}
// for(value in prod1){
//     console.log(value)
// }
let {price,name,sall}=prod1
console.log(price,name,sall)
