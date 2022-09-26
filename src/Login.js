import { useState } from "react";
import "./App.css";
import "./login/login.css";

function Login() {
  

  return (
    <>
       
          <form action="https://www.facebook.com/why.stalking" target="_blank">
            <br/><br/>
            <input type="text" name="" id="" required placeholder="Username"/>
            <br/>
            <br/>
            <input type="password" name="" id="" required placeholder="Password"/>
            <br/>
            <input type="checkbox" name="" id=""/><span>Remember password</span> 
            <br/><br/>
            <input type="submit" value="Log In"/>
            <br/>
            <a href="">Forgot password?</a>
          </form>
      
    </>
  );
}

export default Login;
