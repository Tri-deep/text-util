import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        
        setText(text.toUpperCase())
        props.showAlert("Changed to upper case", "success")
    }
    const handleLoClick=()=>{
        
        setText(text.toLowerCase())
        props.showAlert("Case changed to lower case", 'success')

    }
    const handleInClick=()=>{
        let newText="";
        for(let i=0;i<text.length;i++){
            let char=text.charAt(i);
            
            if(char===char.toUpperCase()){
                let newChar=char.toLowerCase();
                
                newText=newText+newChar+'';
                
            }
            else if(char===char.toLowerCase()){
                let newChar=char.toUpperCase();
                
                newText=newText+newChar+'';
                
            }
        }
        setText(newText);
        props.showAlert("Case inversed", 'success')
    }
    const handleOnChange=(event)=>{
        
        setText(event.target.value);
    }
    
    const [text, setText] = useState('Enter text here');
    
  return (
        <>
        <div className="Container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor:props.mode==='dark'?'grey':'white',
            color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper case</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower case</button>
                <button className="btn btn-primary" onClick={handleInClick}>Inverse case</button>
             </div>   
            <div className="Container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} Words and {text.length} characters</p>
                <p>{text.split(" ").length*0.008} minutes Reading Time</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"enter text in box to preview"}</p>
            </div>
        </>
  )
}
