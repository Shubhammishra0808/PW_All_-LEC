// let student={
//     name:"hello",
//     printname:function (){
//         console.log("hello","ram","shyam")
//     }
// }
// student.printname()
// let student={
//     name:"hello",
//     printname:function (){
//         console.log("hello",name)
//     }
// }
// student.printname()
// let student={
//     name:"Shubham",
//     res:56,
//     printname:function (){
//         console.log("hello",this.name)
//     }
// }
// student.printname()
// console.log(this.res)
// console.log(this)
// console.log(global)
// function ad(){
//     console.log("fun",this)
// }
// ad()
let prod={
    name:"ipad",
    printname:()=>{
        console.log(this.name)
    }
}
prod.printname() // arrow fun ka khud ka this nahi hota hai