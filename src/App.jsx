import React,{useState} from 'react'
import "./App.css"

export default function App() {
  const [data, setData] = useState("")
  const [message, setMessage] = useState([])

  const handleChange= (e)=>{
    setData(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(data.trim()== ""){
      return
    }

    setMessage([...message, data])
    setData("")

  }

  return (
    <div>
      <h1>Mini Chat Application</h1>
      <div className="minichat">
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" value={data} onChange={handleChange} placeholder="Type your message here...."></input>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <h2>Messages:</h2>
      {message.map((current,index)=>(
        <p key ={index}> {current} </p>

      ))}
    </div>
  )
}
