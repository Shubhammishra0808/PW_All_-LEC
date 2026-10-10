// async function f1(){
//     // console.log("hello");
//     return 10
// }
// function f2(){
//     // console.log("Radha");
//     return 20
//     // return Promise.resolve(20)
// }
// f1()
// console.log(f1());
// f1().then((data)=>{
//     console.log(data);
// })
// console.log(f2());

async function f3(){
    return "hello"
}
async function f4() {
    let data=await f3()
    console.log(data);
}
f4()

