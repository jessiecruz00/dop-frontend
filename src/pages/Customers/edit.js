import React, { useState } from 'react';
import MetaTags from 'react-meta-tags';
import SuccessModal from '../../components/Modal/successModal'
//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input,
  Modal,
  FormText
} from "reactstrap";
import PencilIcon from '../../assets/images/pencil.png'
import avatar from '../../assets/images/users/avatar-8.jpg'
import * as ST from './styles'


const Projects = () => {
  const [modal_center, setmodal_center] = useState(false);
  const tog_center = () => {
    setmodal_center(!modal_center)
    // removeBodyCss()
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Edit Customer | DOP Test Network</title>
        </MetaTags>
        <ST.EditWrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Customer/Edit" />
            <div className='row'>
              <div className='col-md-12'>
                Edit Customer
              </div>
            </div>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input name="email" />
                  <span className='inputTitle'>Customer Name</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
                <FormGroup>
                  <Input name="email" />
                  <span className='inputTitle'>Street</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
              </div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input name="email" />
                  <span className='inputTitle'>Email</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
                <FormGroup>
                  <Input name="email" />
                  <span className='inputTitle'>City</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
              </div>
              <div className='col-md-1'></div>
            </div>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-3'>
                <FormGroup>
                  <Input name="email" />
                  <span className='inputTitle'>State</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
              </div>
              <div className='col-md-4'>
                <FormGroup>
                  <Input name="email" />
                  <span className='inputTitle'>Zip</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
              </div>
              <div className='col-md-3'>
                <FormGroup>
                  <Input name="email" />
                  <span className='inputTitle'>Terms</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
              </div>
              <div className='col-md-1'></div>
            </div>
            <div className='row'>
              <div className='col-md-5'>
                <Button onClick={() => tog_center()}>Edit & Save</Button>
              </div>
            </div>
          </Container>
          <SuccessModal
            title='Successfully!'
            content='Customer Updated'
            modal_center={modal_center}
            setmodal_center={setmodal_center}
            tog_center={tog_center}
          />
        </ST.EditWrapper>
      </div>
    </React.Fragment>
  )
}

export default Projects;