import { useState } from "react";
import "./LoginForm.css";


export const LoginForm = () =>{

    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const handleFormSubmit = (e) =>{
        e.preventDefaoult();

        const userData = {
            username,
            password,
        }
        console.log(userData);
    }
    return(
        <section>
            <div className="bdfkjd">
                <h1>Login Form</h1>

                    <div className="login_form">
                        <form className="form" onSubmit={handleFormSubmit}>
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="Enter Your username" autoComplete="off" value={username} onChange={(e)=>setUserName(e.target.value)} />

                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Enter Your password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.password)} />

                            <button className="btn">Login</button>
                        </form>
                    </div>
            </div>
        </section>
    )
}