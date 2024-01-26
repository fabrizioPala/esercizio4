import { Login } from "./Login";


function handleLogin(logindata){
 console.log(logindata)
}
export function App() {
    return (
        <div>
           
           <Login onLogin={handleLogin}/>
        </div>
        
    );
}
