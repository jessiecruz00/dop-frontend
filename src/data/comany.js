import { del, get, post, put } from "../helpers/api_helper"
import * as url from "../helpers/url_helper"

export const requestCompany = data => post(url.REQUEST_COMPANY, data)
export const requestCheck = data => post(url.REQUEST_CHECK, data)
export const updateCompany = data => post(`/company/update/${data.id}`, data)
export const getStuffs = data => post(`/company/getStuffs/${data.company_id}`)
export const outUser = data => post('/auth/outUser', {id: data})
export const getAllStuffsNotImported = () => get('/auth/getAllStuffsNotImported')
export const changeUserRole = data => post('/auth/changeUserRole', data)
export const getAllCompany = data => get('/company/getApprove')
export const getCompany = data => get('/company/get')
export const companyApproveState = data => post(`/company/updateCompany/${data.id}`, data)
export const companyDelete = data => post(`/company/remove/${data.id}`, data)