import {useState} from 'react'

export default function Form(props) {
  const [text, setText] = useState("");

  const convertToUp =()=>{
    const newText = text.toUpperCase();
    setText(newText)

  }
  const convertToLower =()=>{
   const newText = text.toLowerCase();
   setText(newText)
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }



  const clearText=()=>{
    setText('')
  }
  const copyText = ()=>{
    const text = document.getElementById("myBox");
    text.select(); 
    navigator.clipboard.writeText(text.value)
  }
  
  return (
    <>
  <div className="container">
    <h1>{props.heading}</h1>   
      <div className ="mb-3">
            <textarea className ="form-control" id="myBox" value = {text} onChange={handleOnChange} rows="8 "></textarea>
            </div>
            <button className="btn btn-primary" onClick={convertToUp}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={convertToLower}>Convert to Lowercase</button> 
            <button className="btn btn-primary mx" onClick={clearText}>Clear</button>  
           <button className="btn btn-primary mx-2" onClick={copyText}>Copy</button>  


      </div>
      <div className="container my-4">
        <h4>Text summary</h4>
        <p>Words:{text.split(" ").length-1} Characters:{text.length}</p>
        <p>Time to read : {0.008*text.split(" ").length}</p>
        <h3>Preview</h3>
        {text}
        </div> 
      </>
  )
}



