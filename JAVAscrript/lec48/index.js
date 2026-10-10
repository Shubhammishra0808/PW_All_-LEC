// let stroage=localStorage.setItem("num",1)
// let stroage1=localStorage.setItem("num","Shubham")
// let s2=localStorage.getItem("num")
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    let data = xhttp.responseText;
    console.log(data);
    
};
xhttp.open("GET", "htttps://api.github.com/users/shubhammishra0808", true);
xhttp.send();