import { useState } from "react";
import { Welcome } from "./welcome";

export function InteractiveWelcome(){
    const[username, setUsername] =useState()
    function handleChangeEvent(e){
      const value= e.target.value
      setUsername(value)

    }
    return(
        <div>
<input value={username} onChange={handleChangeEvent}type="text" />
<Welcome name={username} />
        </div>
    )
    
   

}