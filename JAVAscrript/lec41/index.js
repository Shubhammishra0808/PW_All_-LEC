const f=document.querySelector("#form")
// f.addEventListener("submit",(e)=>{
//     e.preventDefault()
// console.log("hii")


// const name=document.querySelector("#name").value
// const email=document.querySelector("#email").value
// console.log({name,email})
// })
f.addEventListener("input",(e)=>{
const name=document.querySelector("#name").value
const email=document.querySelector("#email").value
console.log({name,email})
})
