console.log("Radhey Radhey");
// const p = new Promise(function (resolve, reject) {
//     // console.log(res,rej);
//     // return 1
//     resolve("fugf") 
//     reject("net nahi hai")
// })
// const p = new Promise(function (resolve, reject) {
//     // console.log(res,rej);
//     // return 1
//     resolve("fugf")
//     reject("net nahi hai")
// })
const p = new Promise(function (resolve, reject) {
    // console.log(res,rej);
    // return 1
    // resolve("fugf")
    reject("net nahi hai")
    reject("abhi nahi hya")
})

// console.log(typeof(p));
// console.log(p);
// p.then(function (v) { console.log(v); }, function (v) { console.log(v); })
const res = p.then(function (v) { console.log(v); })
.then(() => { })
.then()
.then()
.catch((v) => {
    console.log(v);
})
.catch((v) => {
    console.log(v);
})