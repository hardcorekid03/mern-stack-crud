import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <section className="py-3 py-md-5">
        <div className="wrapper">
          <form className="form-signin shadow-sm">
            <h2 className="form-signin-heading">Please login</h2>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Email Address"
              required=""
              autoFocus=""
            />
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              required=""
              autoComplete=""
            />
            <div className="form-bottom">
              <button
                className="buttonContainer btn btn-lg btn-dark btn-block"
                type="submit"
              >
                Login
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
              <label className="signup px-2">Sign Up</label>
            </div>
            <div className="error">
            <p> Error 404: </p>
          </div>
          </form>

        </div>
      </section>
    </>
  );
}

export default Login;
