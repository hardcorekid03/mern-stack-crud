import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useLogin } from "../../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email,password)    }

  return (
    <>
      <section className="py-3 py-md-5">
        <div className="wrapper">
          <form className="form-signin shadow-sm" onSubmit={handleSubmit}>
            <h2 className="form-signin-heading">Please login</h2>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value= {email}
              className="form-control"
              name="email"
              placeholder="Email Address"
              required=""
              autoFocus=""
              autoComplete="current-email"

            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value= {password}
              className="form-control"
              name="password"
              placeholder="Password"
              required=""
              autoComplete="current-password"
            />
            <div className="form-bottom">

              <button 
              disabled={isLoading}
                className="buttonContainer btn btn-lg btn-dark btn-block"
                type="submit"
              >
                Log in
              </button>
              <label className="checkbox">
                <input
                  type="checkbox"
                  value="remember-me"
                  id="rememberMe"
                  name="rememberMe"
                />{" "}
                Remember me
              </label>
              <Link to="/signup" className="signup px-2" style={{ textDecoration: 'none', color: "black" }} >Sign Up</Link>
            </div>
            <div className="error mt-5">
            {error && <p className="error"> {error} </p>}
          </div>
          </form>

        </div>
      </section>
    </>
  );
}

export default Login;
