import React,{useState} from 'react'

export default function Form(props) {
  const convertToUp =()=>{
    const newText = text.toUpperCase();
    setText(newText)
    console.log("button was clicked")

  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
    console.log("on Change")
  }
  const [text, setText] = useState("Enter your text here");
  return (
  <div>
    <h1>{props.heading}</h1>   
      <div className ="mb-3">
            <textarea className ="form-control" id="myBox" value = {text} onChange={handleOnChange} rows="8 "></textarea>
            </div>
            <button className="btn btn-primary" onClick={convertToUp}>Convert to uppercase</button>
   
     
      </div>
  )
}
