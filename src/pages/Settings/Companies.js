import React, { useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import ComfirmModal from '../../components/Modal/comfirmModal'
import SuccessModal from '../../components/Modal/successModal'
import { useSelector, useDispatch } from "react-redux"
import { requestCheck, updateCompany } from '../../data/comany'

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import PencilIcon from '../../assets/images/pencil.png'
import {
  Container,
  Button,
  Input,
  FormGroup,
  Form
} from "reactstrap";
import * as ST from './styles'

const Invoices = () => {
  const [modal_center, setmodal_center] = useState(false);
  const [modal_center1, setmodal_center1] = useState(false);
  const [companyData, setCompanyData] = useState(false);

  const { currentUser } = useSelector(state => ({
    currentUser: state.Login.user
  }))

  useEffect(() => {
    requestCheck({ create_user_id: currentUser?.sub }).then(res => {
      if (res.length && res[0].status) {
        // console.log(res[0])
        setCompanyData(res[0])
      }
    })
  }, [])
  const tog_center = () => {
    setmodal_center(!modal_center)
  }
  const tog_center1 = () => {
    setmodal_center1(!modal_center1)
  }
  const handleSubmit = (val) => {
    val.preventDefault()
    const data = {
      id: companyData?.id,
      company_name: val.target.company_name.value,
      logo: val.target.logo.value
    }
    updateCompany(data).then(res => {
      console.log(res)
    })
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Company | DOP Test Network</title>
        </MetaTags>
        <ST.CompanyWrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Company Admistration" />
            {!companyData?.status ? (
              <div>
                <Button className='newCustomer' onClick={() => tog_center()}>New Company Request</Button>
              </div>
            ) : (
              <Form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-5'>
                    <FormGroup style={{ display: 'flex', height: '100px' }}>
                      <Input name="logo" id="signature" />
                      <span className='inputTitle'>Company Logo</span>
                      <img src={PencilIcon} alt='' />
                    </FormGroup>
                    <FormGroup>
                      <Input defaultValue={companyData?.company_name} name="company_name" />
                      <span className='inputTitle'>Company Name</span>
                      <img src={PencilIcon} alt='' />
                    </FormGroup>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-5'>
                    <Button type='submit'>Save Settings</Button>
                  </div>
                </div>
              </Form>
            )}
            
          </Container>
          <ComfirmModal
            content='Do you create your new company?'
            modal_center={modal_center}
            setmodal_center={setmodal_center}
            tog_center={tog_center}
            type={'create-company'}
            data={{ create_user_id: currentUser?.sub }}
          />
          <SuccessModal
            title='Updated Successfully!'
            content='Your company information upadated'
            modal_center={modal_center1}
            setmodal_center={setmodal_center1}
            tog_center={tog_center1}
          />
        </ST.CompanyWrapper>
      </div>
    </React.Fragment>
  )
}

export default Invoices