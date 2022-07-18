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
import * as ST from './styles'

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
        <ST.AddMachineWrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Add Device" />
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
                    <Button onClick={() => tog_center()}>Save & New</Button>
                  </div>
                </div>
              </footer>
            </div>
          </Container>
          <SuccessModal
            title='Successfully!'
            content='New Device Created'
            modal_center={modal_center}
            setmodal_center={setmodal_center}
            tog_center={tog_center}
          />
        </ST.AddMachineWrapper>
      </div>
    </React.Fragment>
  )
}

export default Projects;