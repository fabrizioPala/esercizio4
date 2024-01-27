import React, { useState } from "react"; 

let divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    border: "4px solid black",
    backgroundColor: "blue",
    height: "300px",
    width: "300px",
    padding: "30px"
};

export function Login({ onLogin }) {
    const [data, setData] = useState({ 
        username: "",                   
        password: "",
        checked: false
    });

    const handleData = (e) => {
        const { name, type, value, checked } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value//se il tipo di checked è uguale a checkbox allora la checkk sarà spntata in base al valore che noi diamo ()altrimenti il [name]sarà uguale a value
        }));
    };

    const handleSubmit = () => {
        onLogin(data);
    };
    function handleReset(){
        setData({
            username:"",
            password:"",
            checked:false
                })
    

    }

    return (
        <>
            <div style={divStyle}>
                <input
                    name="username"
                    value={data.username}
                    onChange={handleData}
                    type="text"
                />
                <input
                    name="password"
                    value={data.password}
                    onChange={handleData}
                    type="password"
                />
                <label>Rimani collegato
                <input
                    name="checked"
                    checked={data.checked}
                    onChange={handleData}
                    type="checkbox"
                />
                </label>
                
                <button onClick={handleSubmit} disabled={data.username === "" || data.password === ""}>
                    Submit
                </button>
                <button onClick={handleReset}>Reset</button>

            </div>
        </>
    );
}

