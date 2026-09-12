let student ={
    name:"shubham",
    rollno:60,
    sub:["hindi","Math","Eng"]
}
// console.log(student)
// destructuring 
// let{name,sub,rollno}=student
// console.l og(sub)
// let{...hel}=student
// console.log(hel)



// how to rename your key
// let{name:naam,sub:vishay,rollno}=student
// console.log(student)
// console.log(naam)
// console.log(name) //console.log(name) ReferenceError: name is not defined


// let ob1={
//     name:"Shubham",
//     phone:5465464654
// }

// let ob2={
//     add:"India",
//     aa_No:3693963/8385
// }
// let ob3={...ob1,...ob2}
// console.log(ob3)
// const arr=[5,9,6,36,89]
// arr[1]="shubham"
// console.log(arr)

// const obj = {
//     name:"Shubham",
//     rollno:464
// }
// obj.name="Rama"
// obj["name"]="dhvo"
// obj.clas="nfoln"
// console.log(obj)

const arr=[5,9,6,36,89,56,87,100]
// console.log(arr) 
// // delete 
// arr.splice(2,3)
// //add 
// arr.splice(3,0,456)
// arr.splice(3,1,"Shubham")
// arr.splice(4,1,"radha")
 
// console.log(arr)

let c = arr.slice(1,4)
console.log(c)
console.log(arr.indexOf(500))