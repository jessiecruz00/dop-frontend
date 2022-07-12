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
import styled from 'styled-components'
import PencilIcon from '../../assets/images/pencil.png'
import avatar from '../../assets/images/users/avatar-8.jpg'

const Wrapper = styled.div`
  & {
    .form-group {
      margin-bottom: 15px;
      position: relative;
      span.inputTitle {
        position: absolute;
        top: -10px;
        left: 15px;
        padding: 0 8px;
        background: white;
      }
      img {
        position: absolute;
        top: 12px;
        right: 10px;
        width: 12px;
        height: auto;
      }
    }
    .profileImg img {
      border-radius: 100%;
    }
    #signature {
      display: flex;
      height: 100%;
    }
    #signature ~ img {
      top: calc(50% - 5px) !important;
    }
    .col-md-5 button {
      width: 100%;
      background: linear-gradient(90deg, #D14124 -0.05%, #B02509 99.95%);
      box-shadow: 0px 4px 25px rgba(255, 0, 0, 0.2);
      border-radius: 4px;
      color: white;
    }
    .row:nth-child(2) {
      margin-top: 30px;
      font-family: 'Montserrat';
      font-style: normal;
      font-size: 22px;
      text-align: center;
      margin-bottom: 30px;
    }
    .row:last-child {
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }
  }
`
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
          <title>Settings | DOP Test Network</title>
        </MetaTags>
        <Wrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Settings" />
            <div className='row'>
              <div className='col-md-12'>
                <div className='profileImg'>
                  <img src={avatar} alt='' />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input name="email" />
                  <span className='inputTitle'>Name</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
                <FormGroup>
                  <Input name="email" />
                  <span className='inputTitle'>Email</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
                <FormGroup>
                  <Input name="email" />
                  <span className='inputTitle'>Title</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
              </div>
              <div className='col-md-5'>
                <FormGroup style={{ display: 'flex', height: 'calc(100% - 15px)' }}>
                  <Input name="email" id="signature" />
                  <span className='inputTitle'>Signature</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
              </div>
              <div className='col-md-1'></div>
            </div>
            <div className='row'>
              <div className='col-md-5'>
                <Button onClick={() => tog_center()}>Save Settings</Button>
              </div>
            </div>
          </Container>
          <SuccessModal
            title='Successfully!'
            content='Your profile updated'
            modal_center={modal_center}
            setmodal_center={setmodal_center}
            tog_center={tog_center}
          />
        </Wrapper>
      </div>
    </React.Fragment>
  )
}

export default Projects;