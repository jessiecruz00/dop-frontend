import React from 'react';
import MetaTags from 'react-meta-tags';
import { useHistory } from 'react-router-dom'

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TrComponent from '../../components/Customers/TrComponentDetail'
import {
  Container,
  Table,
  Button
} from "reactstrap";
import * as ST from './styles'


const data = [
  {
    projectName: 8767676,
    requestedBy: '01/01/2022',
    technician: '07/07/2022',
    projectId: 'GravelStone Inc',
    clientProjectId: 1653,
    date: 'Open',
    invoiceId: '123'
  },
  {
    projectName: 8767676,
    requestedBy: '01/01/2022',
    technician: '07/07/2022',
    projectId: 'GravelStone Inc',
    clientProjectId: 1653,
    date: 'Open',
    invoiceId: '123'
  },
  {
    projectName: 8767676,
    requestedBy: '01/01/2022',
    technician: '07/07/2022',
    projectId: 'GravelStone Inc',
    clientProjectId: 1653,
    date: 'Open',
    invoiceId: '123'
  },
  {
    projectName: 8767676,
    requestedBy: '01/01/2022',
    technician: '07/07/2022',
    projectId: 'GravelStone Inc',
    clientProjectId: 1653,
    date: 'Open',
    invoiceId: '123'
  },
  {
    projectName: 8767676,
    requestedBy: '01/01/2022',
    technician: '07/07/2022',
    projectId: 'GravelStone Inc',
    clientProjectId: 1653,
    date: 'Open',
    invoiceId: '123'
  },
  {
    projectName: 8767676,
    requestedBy: '01/01/2022',
    technician: '07/07/2022',
    projectId: 'GravelStone Inc',
    clientProjectId: 1653,
    date: 'Open',
    invoiceId: '123'
  }
]
const Projects = () => {
  const history = useHistory()
  const goEditCustomer = val => {
    history.push('/customers/edit/222')
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Customer/Detail | DOP Test Network</title>
        </MetaTags>
        <ST.DetailWrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Customer/Detail" />
            <div className='row panel'>
              <div className='col-md-3'>
                <header>Customer</header>
                <div>Email Adderss:</div>
                <nav>accounting@gravesinc.com</nav>
                <div>Terms:</div>
                <nav>Net 30</nav>
              </div>
              <div className='col-md-3'>
                <div style={{ marginTop: 20 }}>Billing Address</div>
                <nav>465 Gravel Drive</nav>
                <nav>Fairfield, California</nav>
                <nav>94533</nav>
              </div>
              <div className='col-md-6'>
                <Button onClick={() => goEditCustomer()}>Edit Customer</Button>
              </div>
            </div>
            <div className="table-responsive">
              <header>Project History</header>
              <Table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Requested By</th>
                    <th>Technician</th>
                    <th>Project #</th>
                    <th>Client Project #</th>
                    <th>Date</th>
                    <th>Invoice #</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.map((res, index) => (
                    <TrComponent key={index} tableData={res}  />
                  ))}
                </tbody>
              </Table>
            </div>
          </Container>
        </ST.DetailWrapper>
      </div>
    </React.Fragment>
  )
}

export default Projects;