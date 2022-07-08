import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import React from "react"

import { Row, Col, Alert, Container } from "reactstrap"

//redux
import { useSelector, useDispatch } from "react-redux"

import { withRouter, Link } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

//Social Media Imports
import { GoogleLogin } from "react-google-login"
// import TwitterLogin from "react-twitter-auth"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"

// actions
import { loginUser, socialLogin } from "../../store/actions"

// import images
import logo from "../../assets/images/logo-sm.png"

//Import config
import { facebook, google } from "../../config"
import CarouselPage from "./CarouselPage"
import styled from 'styled-components'

const Wrapper = styled.div`
  .loginBg {
    background: url("/images/bro.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .auth-full-page-content {
    padding: 5rem !important;
    .auth-content {
      h5 {
        font-family: 'Montserrat' !important;
        font-style: normal;
        font-weight: 700;
        font-size: 28px !important;
        line-height: 38px;
        color: #000000;
      }
      h5 ~ p {
        font-family: 'Montserrat' !important;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #ACACAC;
      }
      input {

      }
    }
    button.btn-primary {
      background: linear-gradient(90deg, #D14124 -0.05%, #B02509 99.95%);
      border: 0;
    }
    a.text-primary {
      color: #D14124 !important;
    }
    .w-100>.h-100 {
      justify-content: center;
    }
  }
`
const Login = props => {
  const dispatch = useDispatch()

  const { error } = useSelector(state => ({
    error: state.Login.error,
  }))

  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    dispatch(loginUser(values, props.history))
  }

  const signIn = (res, type) => {
    if (type === "google" && res) {
      const postData = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        token: res.tokenObj.access_token,
        idToken: res.tokenId,
      }
      dispatch(socialLogin(postData, props.history, type))
    } else if (type === "facebook" && res) {
      const postData = {
        name: res.name,
        email: res.email,
        token: res.accessToken,
        idToken: res.tokenId,
      }
      dispatch(socialLogin(postData, props.history, type))
    }
  }

  //handleGoogleLoginResponse
  const googleResponse = response => {
    signIn(response, "google")
  }

  //handleTwitterLoginResponse
  // const twitterResponse = e => {}

  //handleFacebookLoginResponse
  const facebookResponse = response => {
    signIn(response, "facebook")
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Login | DOP & Test Nestwork</title>
      </MetaTags>
      <Wrapper>
        <div className="auth-page">
          <Container fluid className="p-0">
            <Row className="g-0">
              <Col lg={7} md={7} className="col-xxl-7 loginBg"></Col>
              <Col lg={5} md={5} className="col-xxl-5">
                <div className="auth-full-page-content d-flex p-sm-5 p-4">
                  <div className="w-100">
                    <div className="d-flex flex-column h-100">
                      <div className="mb-4 mb-md-5 text-center">
                        <Link to="/dashboard" className="d-block auth-logo">
                          <img src={logo} alt="" width="200" />
                        </Link>
                      </div>
                      <div className="auth-content">
                        <div className="text-center">
                          <h5 className="mb-0">Welcome to DOP TEST NETWORK</h5>
                          <p className="text-muted mt-2">Login to access the Certificate Maker App</p>
                        </div>
                        <AvForm
                          className="custom-form mt-4 pt-2"
                          onValidSubmit={(e, v) => {
                            handleValidSubmit(e, v)
                          }}
                        >
                          {error ? <Alert color="danger">{error}</Alert> : null}
                          <div className="mb-3">
                            <AvField
                              name="email"
                              // label="Email"
                              value="admin@themesbrand.com"
                              className="form-control"
                              placeholder="Email"
                              type="email"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <AvField
                              name="password"
                              value="123456"
                              type="password"
                              className="form-control"
                              required
                              placeholder="Password"
                            />
                          </div>
                          <div className="row mb-4">
                            <div className="col">
                              <div className="d-flex align-items-start">
                                <div className="flex-grow-1">
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="remember-check" />
                                    <label className="form-check-label" htmlFor="remember-check">
                                      Remember me
                                    </label>
                                  </div>
                                </div>
                                <div className="flex-shrink-0">
                                  <div className="">
                                    <Link to="/auth-recoverpw" className="text-muted">Forgot password</Link>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                          <div className="mb-3">
                            <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">Login</button>
                          </div>
                        </AvForm>
                        <div className="mt-5 text-center">
                          <p className="text-muted mb-0">Don't have an account ? <Link to="/register"
                            className="text-primary fw-semibold"> Sign up </Link> </p>
                        </div>
                      </div>
                      {/* <div className="mt-4 mt-md-5 text-center">
                        <p className="mb-0">© {new Date().getFullYear()} Minia . Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
    </React.Fragment>
  )
}

export default withRouter(Login)

Login.propTypes = {
  history: PropTypes.object,
}
