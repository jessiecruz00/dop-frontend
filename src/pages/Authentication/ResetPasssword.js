import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import { Link } from "react-router-dom"

//import images
import logo from '../../assets/images/logo-sm-full.png'
import { checkResetPassword } from '../../data/user'

const VerifyEmail = props => {
  const [message, setMessage] = useState()
  const { token } = useParams();
  useEffect(() => {
    checkResetPassword({ token: token }).then(res => {
      if (res) {
        setMessage('success')
      } else {
        setMessage('failed')
      }
    })
  })
  return (
    <>
      <MetaTags>
        <title>Reset Password | DOP Test Network</title>
      </MetaTags>
      <div
        style={{
          textAlign: 'center',
          marginTop: 50,
        }}
      >
        <img src={logo} alt='' width='200' />
      </div>
      <div
      style={{
        fontFamily: 'PoppinsBold',
        fontStyle: 'normal',
        fontWeight: '500',
        textAlign: 'center',
        fontSize: '45px',
        width: '50%',
        margin: '0 auto',
        marginTop: 50
      }}
    >
      {message && (
        message === 'failed' && (
          <div className="alert alert-danger" role="alert">
            Email Verification was failed!
          </div>
        )
      )}
      {message && (
        message === 'success' && (
          <>
            <div className="alert alert-primary" role="alert">
              Verified successfully
            </div>
            <div style={{ marginTop: 30 }}>
              <p>Your password is reset to 12345</p>
              <Link to='/login'>Sing In</Link>
            </div>
          </>
        )
      )}
    </div>
    </>
  )
}

export default VerifyEmail;