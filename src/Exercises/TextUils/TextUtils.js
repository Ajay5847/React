import React, { useState } from "react";

function TextUtils() {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handletoUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handletoLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handletoClear = () => {
    setText('');
  };
  return (
    <div>
      <div className="mb-3">
        <h3 className="heading mb-3">Enter your text here.</h3>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleText}
        ></textarea>
        <div className="btn btn-primary my-3" onClick={handletoUpperCase}>
          Convert to UpperCase
        </div>
        <div className="btn btn-primary mx-1" onClick={handletoLowerCase}>
          Convert to LowerCase
        </div>
        <div className="btn btn-primary mx-1" onClick={handletoClear}>
          Clear Text
        </div>
        <h3 className="summary">Your text summary</h3>
        <p>{(text.length === 0) ? 0 : text.trim().split(/\s+/).length} words and {text.split(/\s+/).join("").length} Characters</p>
        <h4 className="my-3">Preview</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TextUtils;
