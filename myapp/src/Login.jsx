//Create a Login component containing three inputs: a username input, 
//a password input and a remember checkbox. 

import React, { useState } from "react"

let divStyle={

    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-end",
    border :"4px solid black",
    backgroundColor:"blue",
    height:"300px",
    width:"300px",
    padding:"30px"
}

export function Login(){
    const[userName,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [check,setCheck]=useState(false);


    function handleUserName(e){
        setUsername(e.target.value);
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    function handleCheck(e){
      setCheck( e.target.checked)
    }
    function handleSubmit(){
        console.log(userName)
        console.log(password)
        console.log(check)

    }
    return (
        <>
        <div style={divStyle}>
            <input value={userName}onChange={handleUserName} type="text" />
            <input value={password}onChange={handlePassword} type="password" />
            <input value={check}onChange={handleCheck}type="checkbox" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
       
        </>
    )
}