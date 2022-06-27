import React, { useState } from "react";
import { useSpeechSynthesis } from 'react-speech-kit';
import "./TextForm.css"

export default function TextForm(props) {


  const handelRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handelLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handelClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handelOnChange = (event) => {
    console.log("on Change");
    setText(event.target.value);
    setValue(event.target.value);
  };

  const [text, setText] = useState("Hello!!");
  const [value, setValue] = useState("");
  const {speak} = useSpeechSynthesis();
  console.log(props.myStyle);
  
  return (
      <div className="main">
        <div className="main" style={props.myStyle}>
        <h1 className="head">{props.heading}</h1>

        <div className="my-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
            </label>
            <textarea
            className="form-control text-column"
            id="exampleFormControlTextarea1"
            rows="8"
            
            value={text}
            onChange={handelOnChange}
            style={props.myStyle}
            ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handelUpClick}>
            {" "}
            Convert to UpparCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handelLowClick}>
            {" "}
            Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handelClearClick}>
            {" "}
            Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handelRemoveSpace}>
            {" "}
            Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={()=>speak({text:value})}>
            {" "}
            Listen
        </button>

        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>
            {text.split(" ").length-1} words and {text.length} Character
            </p>
            <p>{(0.008 * text.split(" ").length)} Minutes read</p>
            <h2 className="my-3">Preview</h2>
            <p>{text.length>0?text:"Enter the text in above box to preview"}</p>
        </div>
        </div>
    </div>
  );
}
