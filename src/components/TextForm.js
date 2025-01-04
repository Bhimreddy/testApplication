import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnchange = (event)=> {
        setText(event.target.value)
    }

    const handleClear = ()=> {
        setText("")
    }

    const handleCopy = ()=> {
        var mybox = document.getElementById('myBox');
        mybox.select();
        navigator.clipboard.writeText(mybox.value)
    }

    const handleRemoveExtraSpace = ()=> {
       let newText = text.split(/[ ]+/)
       alert(newText)
        setText(newText.join(" "))
    }

    const [text, setText] = useState("");
  return (
    <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"
                style={{backgroundColor : props.mode === 'dark'?'gray':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClear} >Clear text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpace} >Remove Extra spaces</button>
        </div>
        <div className="container my-2" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>Your text summery</h1>
            <p>{text.split(" ").length} words And {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something to preview it'}</p>
        </div>
    </>
    
  )
}
