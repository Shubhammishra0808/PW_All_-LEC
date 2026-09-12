let gi=document.querySelector("#gift")
let h1=document.querySelector("#sur")
// gi.addEventListener('click',function(){
//     console.log("Hello how are you")
// })
gi.addEventListener('click',()=>{
    h1.classList.toggle("hidden")
    // h1.classList.remove("hidden")
    // h1.classList.add("reveal")
})
let d=document.querySelector("body")
let c1=document.querySelector("#c")
// c1.addEventListener('click',(e)=>{
//     d.append("Ram ram kya haal chal hai")
//     d.setAttribute("style","color:red")
//     console.log(e.target)
//     console.log(e.stopPropagation)
// })
c1.addEventListener('click',(e)=>{
    d.append("Ram ram kya haal chal hai")
    d.setAttribute("style","color:red; font-size:60px;text-align:center")
    console.log(e.target)
    console.log(e.stopPropagation)
},{once:true})