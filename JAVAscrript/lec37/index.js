// function outer(){
//     let a=80;
//     function inner(){
//         console.log(a)
//         let a = 5;
//     }
//     inner()
// }
//   outer()
// function outer(){
//     let a=80;
//     function inner(){
//         console.log(a)
       
//     }
//     return inner
// }
// let res= outer()
// console.log(res())
function outer(){
    let cout=0;
    function counter(){
        cout+=1
        console.log(cout)
    }
    return counter
}
let c1=outer()
let c2=outer()
c1()
c2()
c1()
c2()
c1()
c2()