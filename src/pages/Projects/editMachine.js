import React, { useState } from 'react';
import MetaTags from 'react-meta-tags';

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { useHistory } from 'react-router-dom'
import SuccessModal from '../../components/Modal/successModal'
import PencilIcon from '../../assets/images/pencil.png'
import {
  Container,
  Button,
  Input,
  FormGroup
} from "reactstrap";
import styled from 'styled-components'

const Wrapper = styled.div`
  .back {
    margin-bottom: 10px;
    color: black;
    font-size: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      margin-left: 10px;
    }
    i {
      line-height: 20px;
    }
  }
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
  header {
    font-style: normal;
    font-weight: 500;
    color: #7F7F7F;
    margin-bottom: 20px;
    span {
      font-weight: 700;
      color: #000000;
    }
  }
  footer {
    .row:last-child {
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }
    button {
      width: 100%;
      background: linear-gradient(90deg, #D14124 -0.05%, #B02509 99.95%);
      box-shadow: 0px 4px 25px rgba(255, 0, 0, 0.2);
      border-radius: 4px;
      color: white;
    }
  }
`
const Projects = () => {
  const history = useHistory();
  const [modal_center, setmodal_center] = useState(false);
  const tog_center = () => {
    setmodal_center(!modal_center)
    // removeBodyCss()
  }
  const goMachine = val => {
    history.push('/projects/machines/222')
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Projects | DOP Test Network</title>
        </MetaTags>
        <Wrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Update Device" />
            <div className='back' onClick={() => goMachine()}>
              <i className='dripicons-arrow-thin-left'></i>
              <span>Back</span>
            </div>
            <div className="">
              <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-5'>
                  <header>
                    <div>Customer: <span>GravelStone Inc.</span></div>
                    <div>Project Name: <span>Ulatis Center</span></div>
                    <div>Project Number: <span>1244</span></div>
                  </header>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-5'>
                  <FormGroup>
                    <Input name="email" />
                    <span className='inputTitle'>Date</span>
                    <img src={PencilIcon} alt='' />
                  </FormGroup>
                  <FormGroup>
                    <Input name="email" />
                    <span className='inputTitle'>Equipment Type</span>
                    <img src={PencilIcon} alt='' />
                  </FormGroup>
                  <FormGroup>
                    <Input name="email" />
                    <span className='inputTitle'>Model</span>
                    <img src={PencilIcon} alt='' />
                  </FormGroup>
                </div>
                <div className='col-md-5'>
                  <FormGroup>
                    <Input name="email" />
                    <span className='inputTitle'>DOP Certificate #</span>
                    <img src={PencilIcon} alt='' />
                  </FormGroup>
                  <FormGroup>
                    <Input name="email" />
                    <span className='inputTitle'>Make</span>
                    <img src={PencilIcon} alt='' />
                  </FormGroup>
                  <FormGroup>
                    <Input name="email" />
                    <span className='inputTitle'>Serial</span>
                    <img src={PencilIcon} alt='' />
                  </FormGroup>
                </div>
                <div className='col-md-1'></div>
              </div>
              <section></section>
              <aside></aside>
              <footer>
                <div className='row'>
                  <div className='col-md-5'>
                    <Button onClick={() => tog_center()}>Update & Save</Button>
                  </div>
                </div>
              </footer>
            </div>
          </Container>
          <SuccessModal
            title='Successfully!'
            content='This Device Updated'
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