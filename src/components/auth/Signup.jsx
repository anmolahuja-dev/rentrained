import React from 'react'

function Signup() {
  return (
    <div className="d-md-flex half">
    <div className="bg" ></div>
    <div className="contents">

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
            <div className="form-block mx-auto">
              <div className="text-center mb-5">
              <h3>Sign Up to <strong>Rentrained</strong></h3>
               {/* <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>  */}
              </div>
              <form action="#" method="post">
                
                <div className="form-group first">
                  <label for="email">Email</label>
                  <input type="email" className="form-control" placeholder="your-email@gmail.com" id="username"/>
                </div>
                <div className="form-group last mb-3">
                  <label for="password">Password</label>
                  <input type="password" className="form-control" placeholder="Your Password" id="password"/>
                </div>
                <div className="form-group last mb-3">
                  <label for="password">Confirm Password</label>
                  <input type="password" className="form-control" placeholder="Your Password" id="password"/>
                </div>
                
               

                <input type="submit" value="Sign Up" className="btn btn-block btn-warning" />

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signup