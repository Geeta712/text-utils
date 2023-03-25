import React, {useState} from 'react';

export default function TextForm(props) {
  const handleOnChange = (event) =>{
      setText(event.target.value);
  }

  const handleUpClick = () =>{
    //console.log("Clicked on uppercasebutton" +text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("converted to uppercase!","success");
  }

  const handleLowClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!","success");
  }

  const handleClearTextClick = () =>{
    let newText = '';
    setText(newText);
    props.showAlert("Cleared text successfully!","success");
  }

  const wordCount = (text) => {
    return text.replace(/\n/g, " ")
    .split(' ')
    .filter(text => text !== "")
    .length
  }

  const handleExtraSpaceClick = () =>{
      let newText = text.trim().split(/ +/).join(' ');
      setText(newText);
      props.showAlert("Removed extra spaces!","success");
  }

  const handleCopyClick = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!","success");
  }

  const handleRemoveHtmlTagsClick = () =>{
    var text = document.getElementById("myBox").value;
    const regex = /(<([^>]+)>)/ig;
    let newText = text.replace(regex, '');
    setText(newText);
    props.showAlert("Removed tags successfully!","success");
  }

  const [text, setText] = useState('');
  //text = "new text"; //Wrong way to change the state
  //setText("new text"); // Correct way to change the state

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#03315e'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#03315e'}}></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleClearTextClick}>Clear Text</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleExtraSpaceClick}>Remove Extra Space</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleRemoveHtmlTagsClick}>Remove Tags</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#03315e'}}>
      <h3>Your text summary is:</h3>
      <p>{wordCount(text)} words {text.length} characters</p>
      <p>{0.008 * wordCount(text)} Minutes read</p>
      <h4>Preview:</h4>
      <p>{text.length>0?text:'Enter something in the textbox to preview here'}</p>
    </div>
    </>
  )
}
