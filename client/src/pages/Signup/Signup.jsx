import React from "react";
import "./Signup.css";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { Link } from 'react-router-dom';
import { useLogout } from "../../hooks/useLogout";

function Signup() {
  const {logout} = useLogout()
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email,password)
  }

  const handleLogout = () => {
    logout()
  }
  return (
    <>
      <section className="py-3 py-md-5">
        <div className="wrapper">
          <form className="form-signin shadow-sm" onSubmit={handleSubmit}>
            <h2 className="form-signin-heading">Sign Up</h2>

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
              {/* <Link to="/home" style={{ textDecoration: 'none' }}> */}
              <button 
                disabled = {isLoading}
                className="buttonContainer btn btn-lg btn-dark btn-block"
                type="submit"
              >
                Sign Up
              </button>
              {/* </Link> */}
              <label className="signup px-2" onClick={handleLogout}>Log out</label>
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

export default Signup;
