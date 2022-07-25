import { del, get, post, put } from "../helpers/api_helper"

export const changeUserProfile = data => post('/auth/changeUserProfile', data)
export const sendEmail = data => post('/send-email', data)
export const checkResetPassword = data => post('/change-pass', data)
export const getUserCompanyInfo = data => post('/auth/getUserCompanyInfo', data)
export const notificationCompanyAdminData = () => get('/notificationSiteAdminData')
export const joinToCompany = data => post('/auth/joinToCompany', data)