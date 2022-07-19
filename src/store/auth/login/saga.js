import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import jwt from 'jwt-decode'

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN, VERIFY_USER } from "./actionTypes"
import { apiError, loginSuccess, logoutUserSuccess, verifySuccess, verifyFiled } from "./actions"

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper"
import {
  postLogin,
  // postJwtLogin,
  postSocialLogin,
  postVerify
} from "../../../helpers/fakebackend_helper"

const fireBaseBackend = getFirebaseBackend()

function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(postLogin, {
      email: user.email,
      password: user.password,
    })
    const userData = jwt(response.access_token)
    if (userData.verified) {
      localStorage.setItem("access_token", JSON.stringify(response.access_token))
      yield put(loginSuccess(userData))
      window.location.href = '/dashboard'
      // history.push("/dashboard")
    } else {
      yield put(apiError('You have to verify your email.'))
    }
  } catch (error) {
    yield put(apiError(error?.response?.data?.message))
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("access_token")
    history.push("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* verifyUser({ payload: { data, history } }) {
  try {
    const response = yield call(postVerify, data)
    if (response.success) {
      yield put(verifySuccess())
      const userData = jwt(response.access_token)
      localStorage.setItem("access_token", JSON.stringify(response.access_token))
      yield put(loginSuccess(userData))
  
      history.push("/dashboard")
    } else {
      yield put(verifyFiled())
    }
  } catch (error) {
    yield put(verifyFiled())
  }
}

function* socialLogin({ payload: { data, history, type } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend()
      const response = yield call(
        fireBaseBackend.socialLoginUser,
        data,
        type,
      )
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    } else {
      const response = yield call(postSocialLogin, data)
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    }
    history.push("/dashboard")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeLatest(SOCIAL_LOGIN, socialLogin)
  yield takeEvery(LOGOUT_USER, logoutUser)
  yield takeEvery(VERIFY_USER, verifyUser)
}

export default authSaga
