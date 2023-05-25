import React ,{useState}from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("Enter Your Text Here:");
    const handeUpClick=(event)=>{
        event.preventDefault();
        console.log(text.toUpperCase());
        setText(text.toUpperCase());

    }
    const handleRemoveExtraSpaces = (event) => {
        event.preventDefault();
        const newText = text.replace(/\s+/g, " ");
        setText(newText);
      };
    const handeLoClick=(event)=>{
        event.preventDefault();
        console.log(text.toLowerCase());
        setText(text.toLowerCase());

    }
    const handleOnChange = (event) => {
        if (event.target.value === "Enter Your Text Here:") {
            setText("");
        }
        else if (event.target.value === "") {
          setText("Enter Your Text Here:");
        } 
        else {
          setText(event.target.value);
        }
    }
    const textOnClick=(event)=>{
        if (event.target.value === "Enter Your Text Here:") {
            setText("");
        }
        else if (event.target.value === "") {
          setText("Enter Your Text Here:");
        } 
        else {
          setText(event.target.value);
        }
    }
    return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className={`card bg-${props.mode} border-${props.mode=="light"?"":"light"}`}>
          <div className={`card-body `}>
            <h5 className="card-title mb-4 ">{props.heading}</h5>
            <form>
              <div className="form-group">
              <textarea className={`form-control bg-${props.mode} text-${props.mode==="light"?"dark":"light"}` } value={text} onClick={textOnClick} onChange={handleOnChange} rows="10" ></textarea>

              </div>
              <button  className="btn btn-primary m-2" onClick={handeUpClick}>Convert To UpperCase</button>
              <button  className="btn btn-primary m-2" onClick={handeLoClick}>Convert To UpperCase</button>
              <button  className="btn btn-primary m-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
            </form>
            <h5 className='my-4'>Your Text Summary:</h5>
            <ul>
                <li>Words :{text.split(" ").length}</li>
                <li>Charecters :{text.length}</li>
                <li>Expected Read Time: {text.split(" ").length*0.008} Minutes</li>
            </ul>

          </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}
