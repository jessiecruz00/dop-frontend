import React, { useState } from 'react';
import MetaTags from 'react-meta-tags';
import SuccessModal from '../../components/Modal/successModal'
//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import PencilIcon from '../../assets/images/pencil.png'
import { useHistory } from 'react-router-dom'
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input,
  Modal,
  FormText
} from "reactstrap";
import * as ST from './styles'

const Projects = () => {
  const history = useHistory();
  const [modal_center, setmodal_center] = useState(false);
  const tog_center = () => {
    setmodal_center(!modal_center)
    // removeBodyCss()
  }
  const goMachine = val => {
    history.push('/projects')
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Projects | DOP Test Network</title>
        </MetaTags>
        <ST.EditWrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Update Project" />
            <div className='back' onClick={() => goMachine()}>
              <i className='dripicons-arrow-thin-left'></i>
              <span>Back</span>
            </div>
            <div className='row'>
              <div className='col-md-12'>Enter Project Details</div>
            </div>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input type="select" name="" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  <span className='inputTitle'>customer</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
              </div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input name="email" id="exampleEmail" />
                  <span className='inputTitle'>Project Name</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
              </div>
              <div className='col-md-1'></div>
            </div>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input name="email" id="exampleEmail" />
                  <span className='inputTitle'>SES Project</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
              </div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input name="email" id="exampleEmail" />
                  <span className='inputTitle'>Client Reference</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
              </div>
              <div className='col-md-1'></div>
            </div>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input name="email" id="exampleEmail" />
                  <span className='inputTitle'>Street</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
              </div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input name="email" id="exampleEmail" />
                  <span className='inputTitle'>City</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
              </div>
              <div className='col-md-1'></div>
            </div>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input name="email" id="exampleEmail" />
                  <span className='inputTitle'>State</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
              </div>
              <div className='col-md-5'>
                <FormGroup>
                  <Input name="email" id="exampleEmail" />
                  <span className='inputTitle'>Zip</span>
                  <img src={PencilIcon} alt='' />
                </FormGroup>
              </div>
              <div className='col-md-1'></div>
            </div>
            <div className='row'>
              <div className='col-md-5'>
                <Button onClick={() => tog_center()}>Update & Save</Button>
              </div>
            </div>
          </Container>
          <SuccessModal
            title='Successfully!'
            content='This project updated'
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