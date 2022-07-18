import React from 'react';
import MetaTags from 'react-meta-tags';
import { useHistory } from 'react-router-dom'

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TrComponent from '../../components/Projects/TrMachines'
// import PlusIcon from '../../assets/images/adminIcons/plusIcon.svg'
import { ReactComponent as PlusIcon } from '../../assets/images/adminIcons/plusIcon.svg'
import {
  Container,
  Table,
  Button
} from "reactstrap";
import * as ST from './styles'

const data = [
  {
    certificateId: 8767676,
    equipmentType: 'MEG.',
    make: 'aero',
    model: '4534',
    serialId: 1653,
    status: 'PASS'
  },
  {
    certificateId: 8767676,
    equipmentType: 'MEG.',
    make: 'aero',
    model: '4534',
    serialId: 1653,
    status: 'PASS'
  },
  {
    certificateId: 8767676,
    equipmentType: 'MEG.',
    make: 'aero',
    model: '4534',
    serialId: 1653,
    status: 'PASS'
  },
  {
    certificateId: 8767676,
    equipmentType: 'MEG.',
    make: 'aero',
    model: '4534',
    serialId: 1653,
    status: 'PASS'
  },
  {
    certificateId: 8767676,
    equipmentType: 'MEG.',
    make: 'aero',
    model: '4534',
    serialId: 1653,
    status: 'PASS'
  }
]
const Projects = () => {
  const history = useHistory()
  const goAddMachine = val => {
    history.push('/projects/addMachine')
  }
  const goMachine = val => {
    history.push('/projects')
  }
  const printInvoice = () => {
    window.print()
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Project/machines | DOP Test Network</title>
        </MetaTags>
        <ST.MachinesWrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Project/Machines" />
            <div className='back d-print-none' onClick={() => goMachine()}>
              <i className='dripicons-arrow-thin-left'></i>
              <span>Back</span>
            </div>
            <div className='row panel'>
              <div className='col-md-3'>
                <header>Customer</header>
                <div>Email Adderss:</div>
                <div>465 Gravel Drive</div>
                <div>Fairfield, California</div>
                <div>94533</div>
              </div>
              <div className='col-md-3'>
                <header>Project</header>
                <div>Project Name: <span>Ulatis Center</span></div>
                <div>SES Project: <span>3454545</span></div>
                <div>Client Reference: <span>1244</span></div>
                <div>Street: <span>123 Ulatis Drive</span></div>
              </div>
              <div className='col-md-3'>
                <div style={{ marginTop: 30 }}>City: <span>Vacaville</span></div>
                <div>State: <span>California</span></div>
                <div>zip: <span>987867</span></div>
              </div>
              <div className='col-md-1'></div>
              <div className='col-md-2' onClick={() => goAddMachine()}>
                <div>Add<br />Machine</div>
                <div className='plusIcon'>
                  {/* <img src={PlusIcon} width={40} alt='' /> */}
                  <PlusIcon />
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <header>Job Equipment Certificate Status</header>
              <Table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>Certificate #</th>
                    <th>Equipment Type</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Serial #</th>
                    <th>Pass/Fail</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.map((res, index) => (
                    <TrComponent key={index} tableData={res}  />
                  ))}
                </tbody>
              </Table>
              <footer className='d-print-none'>
                <Button onClick={() => printInvoice()}>Print Certificates</Button>
                <Button>Close Project</Button>
              </footer>
            </div>
          </Container>
        </ST.MachinesWrapper>
      </div>
    </React.Fragment>
  )
}

export default Projects;