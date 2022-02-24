import React from 'react'
import '../../css/login.css'

function Login() {
  return (
    <div className="d-md-flex half">
    <div className="bg" ></div>
    <div className="contents">

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
            <div className="form-block mx-auto">
              <div className="text-center mb-5">
              <h3>Login to <strong>Rentrained</strong></h3>
               {/* <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>  */}
              </div>
              <form action="#" method="post">
                <div className="form-group first">
                  <label for="username">Username</label>
                  <input type="text" className="form-control" placeholder="your-email@gmail.com" id="username"/>
                </div>
                <div className="form-group last mb-3">
                  <label for="password">Password</label>
                  <input type="password" className="form-control" placeholder="Your Password" id="password"/>
                </div>
                
                <div className="d-sm-flex mb-5 align-items-center">
                  <label className="control control--checkbox mb-3 mb-sm-0"><span className="caption">Remember me</span>
                    <input type="checkbox" checked="checked"/>
                    <div className="control__indicator"></div>
                  </label>
                  <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span> 
                </div>

                <input type="submit" value="Log In" className="btn btn-block btn-warning" />

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login