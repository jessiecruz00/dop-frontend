import React from 'react';
import MetaTags from 'react-meta-tags';
import { useHistory } from 'react-router-dom'

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TrComponent from '../../components/Dashboard/TrComponent'
import { ReactComponent as PlusIcon } from '../../assets/images/adminIcons/plusIcon.svg'
import {
  Container,
  Table
} from "reactstrap";
import * as ST from './styles'

const data = [
  {
    projectName: 8767676,
    client: '01/01/2022',
    requestedBy: '07/07/2022',
    technician: 'GravelStone Inc',
    projectId: 1653,
    clientProjectId: 'Open',
    date: 'N/A'
  },
  {
    projectName: 8767676,
    client: '01/01/2022',
    requestedBy: '07/07/2022',
    technician: 'GravelStone Inc',
    projectId: 1653,
    clientProjectId: 'Open',
    date: 'N/A'
  },
  {
    projectName: 8767676,
    client: '01/01/2022',
    requestedBy: '07/07/2022',
    technician: 'GravelStone Inc',
    projectId: 1653,
    clientProjectId: 'Open',
    date: 'N/A'
  },
  {
    projectName: 8767676,
    client: '01/01/2022',
    requestedBy: '07/07/2022',
    technician: 'GravelStone Inc',
    projectId: 1653,
    clientProjectId: 'Closed',
    date: 'N/A'
  },
  {
    projectName: 8767676,
    client: '01/01/2022',
    requestedBy: '07/07/2022',
    technician: 'GravelStone Inc',
    projectId: 1653,
    clientProjectId: 'Open',
    date: 'N/A'
  },
  {
    projectName: 8767676,
    client: '01/01/2022',
    requestedBy: '07/07/2022',
    technician: 'GravelStone Inc',
    projectId: 1653,
    clientProjectId: 'Closed',
    date: 'N/A'
  }
]
const Projects = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard | DOP Test Network</title>
        </MetaTags>
        <ST.Wrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Dashboard" />
            <div className='btnLinkGroup'>
              <div className='row'>
                <div className='col-md-2' onClick={() => history.push('/newProject')}>
                  <div>New Project</div>
                  <div className='plusIcon'>
                    <PlusIcon />
                  </div>
                </div>
                <div className='col-md-2' onClick={() => history.push('/newCustomer')}>
                  <div>New Customer</div>
                  <div className='plusIcon'>
                    <PlusIcon />
                  </div>
                </div>
                <div className='col-md-2' onClick={() => history.push('/projects')}>
                  <div>Projects</div>
                </div>
                <div className='col-md-2' onClick={() => history.push('/invoices')}>
                  <div>Invoices</div>
                </div>
                <div className='col-md-2' onClick={() => history.push('/reports')}>
                  <div>Reports</div>
                </div>
                <div className='col-md-2' onClick={() => history.push('/customers')}>
                  <div>Customers</div>
                </div>
              </div>
            </div>
            <div className='tableTitle'>
              Recently Completed Projects
            </div>
            <div className="table-responsive">
              <Table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Client</th>
                    <th>Requested By</th>
                    <th>Technician</th>
                    <th>Project #</th>
                    <th>Client Project #</th>
                    <th>Date</th>
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
        </ST.Wrapper>
      </div>
    </React.Fragment>
  )
}

export default Projects;