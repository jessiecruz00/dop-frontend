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

const Wrapper = styled.div`
  & {
    .form-group {
      margin-bottom: 10px;
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
      font-weight: 700;
      font-style: normal;
      font-size: 22px;
      text-align: center;
      margin-bottom: 30px;
    }
    .row:last-child {
      display: flex;
      justify-content: center;
      margin-top: 50px;
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
          <title>New Project | DOP Test Network</title>
        </MetaTags>
        <Wrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="New Project" />
            <div className='row'>
              <div className='col-md-12'>Enter Project Details</div>
            </div>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input type="select" name="" id="exampleSelect" placeholder='customer'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input name="email" id="exampleEmail" placeholder="Project Name" />
                </FormGroup>
              </div>
              <div className='col-md-1'></div>
            </div>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input name="email" id="exampleEmail" placeholder="SES Project" />
                </FormGroup>
              </div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input name="email" id="exampleEmail" placeholder="Client Reference" />
                </FormGroup>
              </div>
              <div className='col-md-1'></div>
            </div>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input name="email" id="exampleEmail" placeholder="Street" />
                </FormGroup>
              </div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input name="email" id="exampleEmail" placeholder="City" />
                </FormGroup>
              </div>
              <div className='col-md-1'></div>
            </div>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input name="email" id="exampleEmail" placeholder="State" />
                </FormGroup>
              </div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input name="email" id="exampleEmail" placeholder="Zip" />
                </FormGroup>
              </div>
              <div className='col-md-1'></div>
            </div>
            <div className='row'>
              <div className='col-md-5'>
                <Button onClick={() => tog_center()}>Create Project</Button>
              </div>
            </div>
          </Container>
          <SuccessModal
            title='Successfully!'
            content='New project created'
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