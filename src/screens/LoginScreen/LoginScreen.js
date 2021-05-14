import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';

const LoginScreen = () => {

    const history = useHistory();
    const gotoPage = () => history.push('/home');

    return (
        <section className="container-fluid app-background vh-100 d-flex  justify-content-center align-self-center">
      <div className="row justify-content-center align-self-center min-vw-100">
        <div className="col-md-6 col-sm-12 col-lg-3">
          <section className="">
            <div className="card p-3 shadow-sm">
              <div className="card-body">
                <h3 className="card-title ">Welcome Back</h3>
                <p className="card-text text-muted ">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  Non aute elit culpa occaecat commodo irure adipisicing et. Adipisicing non commodo qui duis et dolore aliquip sit. 
                  Quis fugiat aliquip officia reprehenderit sit cupidatat non ad.  
                </p>
                <div>
                  <section>
                    <div>
                      <label
                        for="staticEmail"
                        className="col-sm-4 col-form-label fw-bold" 
                      >
                        Email
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Email"
                          aria-label="Your Email"
                          aria-describedby="basic-addon2"
                        />
                        <span className="input-group-text" id="basic-addon2">
                          <i className="lni lni-envelope text-secondary"></i>
                        </span>
                      </div>
                    </div>
                    <div>
                      <label
                        for="staticEmail"
                        className="col-sm-4 col-form-label fw-bold"
                      >
                        Password
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Password"
                          aria-label="Your Password"
                          aria-describedby="basic-addon2"
                        />
                        <span className="input-group-text" id="basic-addon2">
                          <i className="lni lni-lock text-secondary"></i>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label text-secondary" for="flexCheckDefault">
                          Remember Me
                        </label>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="d-flex justify-content-end align-self-center">
                  <a className="btn btn-primary primary"  onClick={gotoPage}>Continue</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
    )
}

LoginScreen.propTypes = {

}

export default LoginScreen

