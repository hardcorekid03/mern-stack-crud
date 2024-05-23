import React from 'react'
import "./Login.css"

function Login() {
  return (
    <>

<section className=" text-center text-lg-start">
  <div className="card mb-3">
    <div className="row g-0 d-flex align-items-center">
      <div className="col-lg-4 d-none d-lg-flex">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
          className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
      </div>
      <div className="col-lg-8">
        <div className="card-body py-5 px-md-5">

        <div data-mdb-input-init className="form-outline mb-4">

              <label className="form-label" for="form2Example1">Login</label>
            </div>

          <form>

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="form2Example1" className="form-control" />
              <label className="form-label" for="form2Example1">Email address</label>
            </div>


            <div data-mdb-input-init className="form-outline mb-4">
              <input type="password" id="form2Example2" className="form-control" />
              <label className="form-label" for="form2Example2">Password</label>
            </div>


            <div className="row mb-4">
              <div className="col d-flex justify-content-center">

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label className="form-check-label" for="form2Example31"> Remember me </label>
                </div>
              </div>

              <div className="col">

                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>

          </form>

        </div>
      </div>
    </div>
  </div>
</section>
    
    </>

  )
}

export default Login