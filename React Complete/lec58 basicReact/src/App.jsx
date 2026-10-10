
import './App.css'
let color=["red","green","blue"]
let res=color.map((c)=>{
  return(
    <li>
      {c}
    </li>
  )
})

function App() {
return (
    <>
    <div>Hello</div>
    <ul>{res}</ul>
    <div>{}</div>
    </>
  )
}

export default App
