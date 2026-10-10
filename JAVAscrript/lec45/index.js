// function fun1(callback){
//     console.log("This is my first fun");
//     callback()
// }
// function cb(){
//     console.log("hii");
// }

// fun1(cb)


function searchpiz(cb1){
    console.log("pizza searchng ....... ");
    setTimeout(()=>{
        console.log("see the menue bar");
        setTimeout(() => {
            cb1(p)

        }, 2000)
        let p=500;
      
    },3000)
}

function addcart(){
    console.log("add to cart ");
}
searchpiz(function(price){
    console.log(price);
})