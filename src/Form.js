import React, { useRef, useState } from 'react';
import './Form.css';


const Form = () => {
    const [show,setShow] = useState(false);
   const yourName =  useRef(null);
   const yourPassword = useRef(null);
   const onSubmit = (e) => {
       e.preventDefault();
       const name = (yourName.current.value);
       const password = (yourPassword.current.value);
    
      name || password === "" ? alert("Please enter your name and password"): setShow(true);
   }

    return (
        <>
        <div className="forms">
            <form className="form-tag" onSubmit={onSubmit}>
                <div className="labels">
                <label>Enter Your Name</label>
                </div>
                <div className="input">
                <input className="inputs" type="text" placeholder="name" ref ={ yourName }  /> <br />
                <input className="inputs" type="text" placeholder="password" ref={yourPassword} />
                </div>
                <div className="submit">
                <button className="submits">Login</button>
                </div>
            </form>
            
        </div>
        <div className="result">
            <h3>
        {show ?`Your name is ${yourName.current.value} and ${yourPassword.current.value}`: ""}
        </h3>
        </div>
        </>
    )
}

export default Form
